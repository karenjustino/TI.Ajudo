
import { questions, quizzes } from '../data/questions.js';

import {
  evaluateProfile,
  buildRecommendations,
  buildStudyPlan,
  getCourses
} from '../engine/recommend.js';

const $ = (selector, root = document) =>
  root.querySelector(selector);

const escapeHTML = value =>
  String(value).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[c]);

export function initChatbot() {
  const mount = $('#advisor');

  if (!mount) return;

  let index = 0;
  let answers = {};
  let quizQueue = [];
  let quizIndex = 0;
  let quizAnswers = {};
  let name = '';
  let activeQuestions = [];

  mount.innerHTML = `
    <div class="advisor-shell">
      <div class="advisor-top">
        <div>
          <span class="online-dot"></span>
          <strong>Assistente TI.Ajudo</strong>
          <small>Orientação profissional em tecnologia</small>
        </div>

        <button class="text-button" id="restart">
          Recomeçar
        </button>
      </div>

      <div class="progress-wrap">
        <div class="progress-meta">
          <span id="progress-label">Preparando orientação...</span>
          <span id="progress-percent">0%</span>
        </div>

        <div class="progress-track">
          <span id="progress-fill"></span>
        </div>
      </div>

      <div class="chat-log" id="chat-log" aria-live="polite"></div>

      <div class="chat-controls" id="chat-controls"></div>
    </div>
  `;

  const log = $('#chat-log', mount);
  const controls = $('#chat-controls', mount);

  const scroll = () => {
    log.scrollTop = log.scrollHeight;
  };

  function bubble(text, who = 'bot') {
    const el = document.createElement('div');

    el.className = `bubble ${who}`;
    el.textContent = text;

    log.append(el);
    scroll();
  }

  function typing() {
    const el = document.createElement('div');

    el.className = 'typing';
    el.innerHTML = '<i></i><i></i><i></i>';

    log.append(el);
    scroll();

    return el;
  }

  // Define quais perguntas serão apresentadas.
  function prepareQuestions() {
    const beginner =
      answers.level === 'Sou completamente iniciante.';

    const basicQuestions = [
      'level',
      'study',
      'interest',
      'workstyle',
      'goal',
      'time'
    ];

    const technicalQuestions = [
      'programming',
      'web',
      'languages',
      'database',
      'networks',
      'tools'
    ];

    const selectedIds = beginner
      ? basicQuestions
      : [
          'level',
          'study',
          ...technicalQuestions,
          'interest',
          'workstyle',
          'goal',
          'time'
        ];

    activeQuestions = selectedIds
      .map(id => questions.find(q => q.id === id))
      .filter(Boolean);
  }

  // Atualiza a barra de progresso.
  function updateProgress() {
    const total = activeQuestions.length;
    const pct = total
      ? Math.round((index / total) * 100)
      : 0;

    $('#progress-label', mount).textContent =
      `Pergunta ${Math.min(index + 1, total)} de ${total}`;

    $('#progress-percent', mount).textContent = `${pct}%`;

    $('#progress-fill', mount).style.width = `${pct}%`;
  }

  // Apresenta a pergunta atual.
  function renderQuestion() {
    const total = activeQuestions.length;

    if (index >= total) {
      startQuizzes();
      return;
    }

    updateProgress();

    const q = activeQuestions[index];
    const t = typing();

    controls.innerHTML = '';

    window.setTimeout(() => {
      t.remove();

      bubble(q.text);

      if (q.hint) {
        const h = document.createElement('p');

        h.className = 'chat-hint';
        h.textContent = q.hint;

        log.append(h);
      }

      renderOptions(q);
    }, 260);
  }

  // Apresenta as alternativas da pergunta.
  function renderOptions(q) {
    const selected = Array.isArray(answers[q.id])
      ? answers[q.id]
      : [];

    controls.innerHTML = `
      <div class="option-list ${q.multi ? 'multi' : ''}">
        ${q.options.map((o, i) => `
          <button
            class="option ${q.multi && selected.includes(o) ? 'selected' : ''}"
            data-index="${i}"
            type="button"
          >
            ${escapeHTML(o)}
            ${q.multi && selected.includes(o) ? ' ✓' : ''}
          </button>
        `).join('')}
      </div>

      ${q.multi ? `
        <button
          class="primary-button"
          id="confirm-options"
          type="button"
        >
          Confirmar seleção
        </button>
      ` : ''}

      <div class="chat-nav">
        ${index > 0
          ? '<button class="text-button" id="back">← Voltar</button>'
          : ''
        }

        <span>
          ${q.multi
            ? 'Você pode escolher mais de uma opção.'
            : ''
          }
        </span>
      </div>
    `;

    controls.querySelectorAll('.option').forEach(btn => {
      btn.addEventListener('click', () => {
        const value = q.options[Number(btn.dataset.index)];

        if (q.multi) {
          let current = Array.isArray(answers[q.id])
            ? [...answers[q.id]]
            : [];

          const exclusiveOptions = [
            'Ainda não sei qual área escolher.',
            'Ainda não tenho preferência.',
            'Nunca utilizei.',
            'Ainda não conheço nenhuma.'
          ];

          if (exclusiveOptions.includes(value)) {
            current = [value];
          } else {
            current = current.filter(
              x => !exclusiveOptions.includes(x)
            );

            current = current.includes(value)
              ? current.filter(x => x !== value)
              : [...current, value];
          }

          answers[q.id] = current;

          renderOptions(q);
        } else {
          choose(value, q.id, value);
        }
      });
    });

    $('#confirm-options', controls)?.addEventListener('click', () => {
      const selectedValues = answers[q.id] || [];

      if (!selectedValues.length) {
        bubble('Escolha pelo menos uma opção para continuar.');
        return;
      }

      choose(
        selectedValues.join(', '),
        q.id,
        [...selectedValues]
      );
    });

    $('#back', controls)?.addEventListener('click', () => {
      index = Math.max(0, index - 1);

      controls.innerHTML = '';

      if (log.lastElementChild?.classList.contains('chat-hint')) {
        log.lastElementChild.remove();
      }

      log.lastElementChild?.remove();

      renderQuestion();
    });
  }

  // Salva a resposta e avança.
  function choose(value, answerId, storedValue = value) {
    bubble(value, 'user');

    if (answerId) {
      answers[answerId] = storedValue;
    }

    if (index === 0) {
      prepareQuestions();
    }

    index++;

    renderQuestion();
  }

  // Identifica os assuntos que podem receber avaliação técnica.
  function startQuizzes() {
    const beginner =
      answers.level === 'Sou completamente iniciante.';

    if (beginner) {
      showReview();
      return;
    }

    const wanted = [];

    const interest = (
      Array.isArray(answers.interest)
        ? answers.interest.join(' ')
        : String(answers.interest || '')
    ).toLowerCase();

    const selectedTools = Array.isArray(answers.tools)
      ? answers.tools
      : String(answers.tools || '')
          .split(',')
          .map(item => item.trim());

    const add = key => {
      if (quizzes[key] && !wanted.includes(key)) {
        wanted.push(key);
      }
    };

    if (
      answers.programming &&
      !answers.programming.startsWith('Nunca') &&
      !answers.programming.startsWith('Já ouvi')
    ) {
      add('programming');
    }

    if (
      answers.web &&
      !answers.web.startsWith('Não') &&
      !answers.web.startsWith('Já ouvi')
    ) {
      add('web');
    }

    if (
      answers.database &&
      !answers.database.startsWith('Não') &&
      !answers.database.startsWith('Já ouvi')
    ) {
      add('database');
    }

    if (
      answers.networks &&
      !answers.networks.startsWith('Não')
    ) {
      add('networks');
    }

    if (selectedTools.some(x =>
      [
        'Linux',
        'Git e GitHub',
        'Docker',
        'Terminal / linha de comando'
      ].includes(x)
    )) {
      add('tools');
    }

    if (/proteger|segurança/.test(interest)) {
      add('security');
    }

    if (/dados|analisar|inteligência artificial/.test(interest)) {
      add('data');
    }

    if (/design|visuais|criatividade/.test(interest)) {
      add('design');
    }

    if (/testar|erros|qualidade|validação/.test(interest)) {
      add('qa');
    }

    const selected = wanted.slice(0, 4);

    if (!selected.length) {
      showReview();
      return;
    }

    bubble(
      'Pelas suas respostas, podemos aprofundar a avaliação de alguns conhecimentos. Você gostaria de responder algumas questões técnicas rápidas?'
    );

    controls.innerHTML = `
      <div class="option-list">
        <button class="option" id="accept-quizzes" type="button">
          Sim, quero responder
        </button>

        <button class="option" id="skip-quizzes" type="button">
          Prefiro pular os testes
        </button>
      </div>
    `;

    $('#accept-quizzes', controls).addEventListener('click', () => {
      quizQueue = selected.flatMap(key =>
        quizzes[key].map((item, questionIndex) => ({
          key,
          item,
          questionIndex
        }))
      );

      quizIndex = 0;
      quizAnswers = {};

      bubble('Ótimo! Vamos começar os testes. Responda com calma.');

      renderQuiz();
    });

    $('#skip-quizzes', controls).addEventListener('click', () => {
      bubble(
        'Sem problemas! Vamos montar suas recomendações com base nas respostas que você já forneceu.',
        'user'
      );

      showReview();
    });
  }

  // Apresenta os testes técnicos.
  function renderQuiz() {
    if (quizIndex >= quizQueue.length) {
      showReview();
      return;
    }

    const { key, item } = quizQueue[quizIndex];

    const labels = {
      programming: 'programação',
      web: 'HTML e CSS',
      database: 'banco de dados',
      networks: 'redes',
      tools: 'ferramentas',
      security: 'segurança',
      data: 'dados',
      design: 'design',
      qa: 'qualidade de software'
    };

    $('#progress-label', mount).textContent =
      `Avaliação técnica ${quizIndex + 1} de ${quizQueue.length}`;

    $('#progress-percent', mount).textContent = 'Avaliação';

    $('#progress-fill', mount).style.width =
      `${Math.round((quizIndex / quizQueue.length) * 100)}%`;

    bubble(`Vamos avaliar ${labels[key]}. ${item.q}`);

    controls.innerHTML = `
      <div class="option-list">
        ${item.a.map((a, i) => `
          <button
            class="option"
            data-answer="${i}"
            type="button"
          >
            ${escapeHTML(a)}
          </button>
        `).join('')}
      </div>

      <div class="chat-nav">
        <button class="text-button" id="quiz-back" type="button">
          ← Voltar
        </button>

        <span>
          Questão ${quizIndex + 1} de ${quizQueue.length}
        </span>
      </div>
    `;

    controls.querySelectorAll('[data-answer]').forEach(btn => {
      btn.addEventListener('click', () => {
        const correct =
          Number(btn.dataset.answer) === item.correct;

        quizAnswers[key] = [
          ...(quizAnswers[key] || []),
          correct
        ];

        bubble(btn.textContent, 'user');

        bubble(
          correct
            ? 'Isso mesmo! ' + item.why
            : 'Ainda não. ' + item.why
        );

        quizIndex++;

        renderQuiz();
      });
    });

    $('#quiz-back', controls).addEventListener('click', () => {
      if (quizIndex > 0) {
        quizIndex--;

        const previousKey = quizQueue[quizIndex].key;

        quizAnswers[previousKey]?.pop();

        log.lastElementChild?.remove();
        log.lastElementChild?.remove();

        renderQuiz();
      } else {
        bubble(
          'Você pode revisar suas respostas iniciais ao final.'
        );
      }
    });
  }

  // Apresenta a revisão antes de gerar o resultado.
  function showReview() {
    $('#progress-label', mount).textContent = 'Revisão do perfil';
    $('#progress-percent', mount).textContent = 'Quase lá';
    $('#progress-fill', mount).style.width = '95%';

    bubble(
      'Terminamos as perguntas! Confira seu perfil antes de gerar as recomendações.'
    );

    const rows = activeQuestions.map(q => `
      <div class="review-row">
        <span>${escapeHTML(q.text)}</span>

        <strong>
          ${
            Array.isArray(answers[q.id])
              ? escapeHTML(answers[q.id].join(', '))
              : escapeHTML(answers[q.id] || '—')
          }
        </strong>
      </div>
    `).join('');

    controls.innerHTML = `
      <div class="review-panel">
        <h3>Revise suas respostas</h3>

        <div class="review-list">
          ${rows}
        </div>

        <div class="review-name">
          <label for="visitor-name">Como podemos chamar você? (opcional)</label>

          <input
            id="visitor-name"
            type="text"
            placeholder="Digite seu nome"
            maxlength="60"
          />
        </div>

        <div class="review-actions">
          <button
            class="secondary-button"
            id="review-back"
            type="button"
          >
            Refazer respostas
          </button>

          <button
            class="primary-button"
            id="finish"
            type="button"
          >
            Gerar meu perfil
          </button>
        </div>
      </div>
    `;

    $('#visitor-name', controls).value = name;

    $('#visitor-name', controls).addEventListener('input', e => {
      name = e.target.value.trim();
    });

    $('#review-back', controls).addEventListener('click', () => {
      reset();

      bubble('Vamos começar novamente! Responda às perguntas com calma.');
    });

    $('#finish', controls).addEventListener('click', renderResult);
  }

  // Gera as recomendações e apresenta os resultados.
  function renderResult() {
    const evaluation = evaluateProfile(answers, quizAnswers);

    const recs = buildRecommendations(answers, evaluation);

    const primary = recs[0];

    if (!primary) {
      bubble(
        'Não foi possível gerar uma recomendação. Tente responder novamente.'
      );
      return;
    }

    const subjectRows = Object.values(evaluation.levels)
      .map(s => `
        <div class="level-row">
          <span>${escapeHTML(s.label)}</span>

          <strong>
            ${
              s.tested
                ? escapeHTML(s.level)
                : s.hasDeclaration
                  ? `Autodeclarado: ${escapeHTML(s.declaredLevel)}`
                  : 'Não avaliado'
            }
          </strong>

          <small>
            ${
              s.tested
                ? `${s.correct}/${s.total} acertos`
                : s.hasDeclaration
                  ? 'Conhecimento informado pelo usuário'
                  : 'Sem informações suficientes'
            }
          </small>
        </div>
      `)
      .join('');

    const cards = recs.map((a, i) => `
      <article class="result-area">
        <span class="rank">
          ${i + 1}ª recomendação · ${a.score}% de compatibilidade
        </span>

        <h3>${escapeHTML(a.name)}</h3>

        <p>${escapeHTML(a.desc)}</p>

        <p>${escapeHTML(a.reason)}</p>

        <small>
          ${escapeHTML(
            a.knowledgeNote || 'Conhecimentos técnicos ainda em avaliação.'
          )}
        </small>
      </article>
    `).join('');

    const plan = buildStudyPlan(
      primary,
      evaluation,
      answers.time
    );

    const planHTML = plan.weeks.map(w => `
      <li>
        <strong>
          Semana ${w.week}: ${escapeHTML(w.topic)}
        </strong>

        <span>${escapeHTML(w.activity)}</span>
      </li>
    `).join('');

    const courseList = getCourses(primary);

    const courseHTML = courseList.length
      ? courseList.map(c => `
          <article class="course-item">
            <div>
              <strong>${escapeHTML(c.name)}</strong>

              <small>
                ${escapeHTML(c.platform)} ·
                ${escapeHTML(c.level)} ·
                ${escapeHTML(c.mode)}
              </small>

              <small>${escapeHTML(c.note || '')}</small>
            </div>

            <a
              class="course-link"
              href="${escapeHTML(c.url)}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar conteúdo ↗
            </a>
          </article>
        `).join('')
      : '<p>Nenhum conteúdo cadastrado para esta área no momento.</p>';

    $('#progress-label', mount).textContent = 'Seu resultado';
    $('#progress-percent', mount).textContent = '100%';
    $('#progress-fill', mount).style.width = '100%';

    controls.innerHTML = '';

    log.innerHTML = `
      <section class="results">

        <div class="result-intro">
          <span class="eyebrow">Seu perfil TI.Ajudo</span>

          <h2>
            ${
              name
                ? `Vamos nessa, ${escapeHTML(name)}!`
                : 'Seu próximo passo começa aqui.'
            }
          </h2>

          <p>
            Esta é uma orientação inicial baseada nas suas respostas
            e nos testes realizados. Não é uma certificação profissional.
          </p>

          <div class="overall">
            <span>Nível geral avaliado</span>

            <strong>${escapeHTML(evaluation.general)}</strong>

            <small>
              ${
                evaluation.overall
                  ? `Pontuação média: ${evaluation.overall}/100`
                  : 'Responda mais testes para refinar seu nível.'
              }
            </small>
          </div>
        </div>

        <h3>Conhecimentos por assunto</h3>

        <div class="level-list">
          ${subjectRows}
        </div>

        <h3>Áreas que combinam com você</h3>

        <div class="result-grid">
          ${cards}
        </div>

        <h3>Seu plano inicial de estudos</h3>

        <p class="plan-meta">
          Dedicação sugerida: ${escapeHTML(plan.hours)} por semana,
          considerando sua disponibilidade informada.
        </p>

        <ol class="study-plan">
          ${planHTML}
        </ol>

        <h3>Tecnologias para explorar</h3>

        <div class="tech-tags">
          ${primary.tech.map(t => `
            <span>${escapeHTML(t)}</span>
          `).join('')}
        </div>

        <h3>Cursos para começar</h3>

        <div class="course-list">
          ${courseHTML}
        </div>

        <p class="disclaimer">
          Os conteúdos são sugestões de aprendizagem.
          A disponibilidade, gratuidade e condições de acesso
          podem variar conforme a plataforma.
        </p>

        <div class="result-actions">
          <button class="primary-button" id="restart-result">
            Refazer orientação
          </button>

          <button class="secondary-button" id="print-result">
            Imprimir / salvar PDF
          </button>
        </div>

      </section>
    `;

    $('#restart-result', log).addEventListener('click', reset);

    $('#print-result', log).addEventListener('click', () => {
      window.print();
    });

    scroll();
  }

  // Reinicia completamente o atendimento.
  function reset() {
    index = 0;
    answers = {};
    quizQueue = [];
    quizIndex = 0;
    quizAnswers = {};
    name = '';
    activeQuestions = [];

    log.innerHTML = '';
    controls.innerHTML = '';

    $('#progress-label', mount).textContent = 'Preparando orientação...';
    $('#progress-percent', mount).textContent = '0%';
    $('#progress-fill', mount).style.width = '0%';

    prepareQuestions();
    renderQuestion();
  }

  $('#restart', mount).addEventListener('click', () => {
    if (
      confirm(
        'Deseja reiniciar a orientação? Suas respostas atuais serão apagadas.'
      )
    ) {
      reset();

      bubble('Vamos começar novamente! Como posso ajudar você hoje?');
    }
  });

  bubble(
    'Olá! 👋 Eu sou o assistente do TI.Ajudo. Vou ajudar você a descobrir possibilidades na área de Tecnologia da Informação e montar um caminho de aprendizado.'
  );

  bubble(
    'Vamos conversar? Responda às perguntas selecionando as opções. Você poderá revisar tudo antes de finalizar.'
  );

  prepareQuestions();
  renderQuestion();
}
