import { areas, courses } from '../data/catalog.js';

const levelFromScore = (score, answered) => {
  if (!answered) return 'Não avaliado';
  if (score >= 80) return 'Avançado';
  if (score >= 45) return 'Intermediário';
  return 'Básico';
};

export function evaluateProfile(answers = {}, quizAnswers = {}) {
  const subjects = {
    programming: {
      label: 'Programação',
      declared: answers.programming,
      quiz: 'programming'
    },
    web: {
      label: 'HTML e CSS',
      declared: answers.web,
      quiz: 'web'
    },
    database: {
      label: 'Banco de dados',
      declared: answers.database,
      quiz: 'database'
    },
    networks: {
      label: 'Redes',
      declared: answers.networks,
      quiz: 'networks'
    },
    tools: {
      label: 'Ferramentas e sistemas',
      declared: answers.tools,
      quiz: 'tools'
    },
    security: {
      label: 'Segurança',
      declared: null,
      quiz: 'security'
    },
    data: {
      label: 'Dados e análise',
      declared: null,
      quiz: 'data'
    },
    design: {
      label: 'UX e Design',
      declared: null,
      quiz: 'design'
    },
    qa: {
      label: 'Qualidade e testes',
      declared: null,
      quiz: 'qa'
    }
  };

  const declarationScore = {
    programming: [0, 10, 30, 55, 70],
    web: [0, 10, 30, 55, 70],
    database: [0, 10, 30, 55, 70],
    networks: [0, 30, 45, 60, 75]
  };

  const declarationOptions = {
    programming: [
      'Nunca programei.',
      'Já ouvi falar, mas não sei programar.',
      'Conheço o básico.',
      'Já desenvolvi alguns projetos.',
      'Tenho experiência com programação.'
    ],
    web: [
      'Não conheço.',
      'Já ouvi falar.',
      'Sei o básico.',
      'Consigo desenvolver páginas.',
      'Tenho domínio desses conhecimentos.'
    ],
    database: [
      'Não sei o que é.',
      'Já ouvi falar.',
      'Sei para que serve.',
      'Já utilizei bancos de dados.',
      'Sei criar consultas e estruturar bancos.'
    ],
    networks: [
      'Não conheço.',
      'Conheço conceitos básicos.',
      'Sei configurar algumas coisas.',
      'Tenho experiência prática.',
      'Tenho conhecimentos avançados.'
    ]
  };

  const levels = {};

  Object.entries(subjects).forEach(([key, subject]) => {
    const hasDeclaration =
      subject.declared !== null &&
      subject.declared !== undefined;

    let declared = 0;

    if (hasDeclaration && key === 'tools') {
      const selected = (subject.declared || [])
        .filter(item => item !== 'Nunca utilizei.');

      declared = Math.min(70, selected.length * 18);
    } else if (hasDeclaration && declarationOptions[key]) {
      const idx = declarationOptions[key].indexOf(subject.declared);
      declared = (declarationScore[key] || [0, 10, 30, 55, 70])[
        Math.max(0, idx)
      ];
    }

    const quiz = quizAnswers[subject.quiz] || [];
    const quizScore = quiz.length
      ? (quiz.filter(Boolean).length / quiz.length) * 100
      : null;

    const tested = quizScore !== null;

    const score = tested
      ? hasDeclaration
        ? declared * 0.35 + quizScore * 0.65
        : quizScore
      : declared;

    let declaredLevel = 'Não informado';

    if (hasDeclaration) {
      if (declared >= 55) {
        declaredLevel = 'Intermediário';
      } else if (declared >= 25) {
        declaredLevel = 'Básico';
      } else {
        declaredLevel = 'Iniciante';
      }
    }

    levels[key] = {
      label: subject.label,
      score: Math.round(score),
      level: tested ? levelFromScore(score, true) : 'Não avaliado',
      declaredLevel,
      hasDeclaration,
      tested,
      correct: quiz.filter(Boolean).length,
      total: quiz.length
    };
  });

  const scores = Object.values(levels)
    .filter(subject => subject.tested)
    .map(subject => subject.score);

  const overall = scores.length
    ? scores.reduce((a, b) => a + b, 0) / scores.length
    : 0;

  const general = scores.length
    ? levelFromScore(overall, true)
    : 'Ainda não avaliado';

  return {
    levels,
    general,
    overall: Math.round(overall)
  };
}


function interestTags(answers) {
 const text = [...(answers.interest||[]),...(answers.workstyle||[])].join(' ').toLowerCase();
 const tags = new Set();
 if (/site|aplicativo|programação|desenvolvimento/.test(text)) ['web','programming'].forEach(x=>tags.add(x));
 if (/inteligência artificial/.test(text)) ['programming','data'].forEach(x=>tags.add(x));
 if (/dados|analisar/.test(text)) ['data','database'].forEach(x=>tags.add(x));
 if (/proteger|segurança|investigação/.test(text)) ['security','networks'].forEach(x=>tags.add(x));
 if (/redes|computadores|infraestrutura|equipamentos/.test(text)) ['networks','tools'].forEach(x=>tags.add(x));
 if (/nuvem|servidores/.test(text)) ['tools','networks'].forEach(x=>tags.add(x));
 if (/visuais|design|criatividade/.test(text)) tags.add('design');
 if (/projetos|gestão|organização/.test(text)) tags.add('management');
 if (/testar|erros|qualidade|validação/.test(text)) tags.add('qa');
 return tags;
}

export function buildRecommendations(answers, evaluation) {
 const tags = interestTags(answers);
 const ranked = areas.map(area => {
   const matched = area.tags.filter(t=>tags.has(t)).length;
   const interest = matched / Math.max(tags.size, area.tags.length, 1);
const knowledgeKeys = area.tags
  .map(t => evaluation.levels[t])
  .filter(item => item && (item.hasDeclaration || item.tested));
   const knowledge = knowledgeKeys.length ? knowledgeKeys.reduce((a,b)=>a+b.score,0)/knowledgeKeys.length/100 : .25;
   const goal = answers.goal === 'Conseguir meu primeiro estágio.' || answers.goal === 'Conseguir meu primeiro emprego em TI.' ? .08 : 0;
   const score = interest * .72 + knowledge * .20 + goal;
   const reason = interest > .55 ? 'Seus interesses declarados combinam diretamente com as atividades desta área.' : interest > .2 ? 'A área tem relação com parte dos assuntos e atividades que despertaram seu interesse.' : 'É uma possibilidade complementar para explorar, considerando seus conhecimentos e objetivos.';
   return {...area,score:Math.round(Math.min(score,1)*100),reason};
 }).sort((a,b)=>b.score-a.score);
 const chosen = ranked.slice(0,3);
return chosen.map(area => ({
  ...area,
  reason: area.reason,
  knowledgeNote: area.tags
    .map(t => evaluation.levels[t])
    .filter(item => item && (item.hasDeclaration || item.tested))
    .map(item =>
      item.tested
        ? `${item.label}: ${item.level.toLowerCase()}`
        : `${item.label}: conhecimento autodeclarado (${item.declaredLevel.toLowerCase()})`
    )
    .join(' • ')
}));
}

export function buildStudyPlan(area, evaluation, time) {
 const hours = time?.includes('Menos') ? '2 a 3 horas' : time?.includes('30 minutos') ? '4 a 5 horas' : time?.includes('1 e 2') ? '7 a 10 horas' : time?.includes('Mais de 2') ? '12 a 15 horas' : '4 a 6 horas';
 const skills = Object.values(evaluation.levels);
const known = skills
  .filter(s =>
    s.tested
      ? ['Avançado', 'Intermediário'].includes(s.level)
      : ['Avançado', 'Intermediário'].includes(s.declaredLevel)
  )
  .map(s => s.label.toLowerCase());
 const tasks = area.learn.filter(item=>!known.some(k=>item.toLowerCase().includes(k.split(' ')[0])));
 const sequence = tasks.length ? tasks : area.learn.slice(-3);
 const weeks = sequence.slice(0,4);
 return {hours,weeks:weeks.map((topic,i)=>({week:i+1,topic,activity:i===3?'Desenvolva um pequeno projeto e registre o que aprendeu.':i===2?'Pratique com exercícios e um desafio guiado.':'Estude os conceitos e faça anotações com exemplos.'}))};
}


export function getCourses(area) {
  if (!area) return [];

  const related = courses.filter(course =>
    course.areas?.includes(area.id)
  );

  const prioritized = related.sort((a, b) => {
    if (a.mode === 'Gratuito' && b.mode !== 'Gratuito') return -1;
    if (a.mode !== 'Gratuito' && b.mode === 'Gratuito') return 1;
    return 0;
  });

  return prioritized.slice(0, 4);
}

