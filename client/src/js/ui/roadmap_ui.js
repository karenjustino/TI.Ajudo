import { ROADMAPS, STAGES } from "../data/Roadmap_data.js";
import { CATALOG } from "../data/catalog.js";
import { UNLOCK_RATIO, isDone, levelRatio, totalRatio, isUnlocked, nextStep, resourcesFor } from "../engine/roadmap_engine.js";

const STORAGE_KEY = "tiajudo:progress";
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const pct = (ratio) => Math.round(ratio * 100);
const dots = (n) => "●".repeat(n) + "○".repeat(5 - n);
function load() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; } }
function save(all) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(all)); } catch { /* local only */ } }

export function progressOf(slug) {
  const roadmap = ROADMAPS.find((r) => r.slug === slug);
  return roadmap ? pct(totalRatio(roadmap, load()[slug] || {})) : 0;
}

function nextStepHtml(roadmap, done) {
  const step = nextStep(roadmap, done);
  if (!step) return `<section class="next-step"><p class="next-step__label">Parabéns!</p><h2 class="next-step__title">Você concluiu esta trilha</h2><a class="next-step__link" href="index.html#trilhas">Escolher outra trilha</a></section>`;
  const links = resourcesFor(step.topic, roadmap.title).map((r) => `<a class="next-step__link" href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.label)}</a>`).join("");
  return `<section class="next-step"><p class="next-step__label">Próximo passo recomendado · ${STAGES[step.level]}</p><h2 class="next-step__title">${esc(step.topic)}</h2><div class="next-step__links">${links}</div></section>`;
}

function levelHtml(roadmap, level, done, current) {
  const open = isUnlocked(roadmap, level, done);
  const status = open ? `${pct(levelRatio(roadmap, level, done))}% concluído` : `Bloqueado · conclua ${pct(UNLOCK_RATIO)}% do nível anterior`;
  const items = roadmap.levels[level].map((topic, index) => {
    const checked = isDone(done, level, index);
    return `<label class="check-item${checked ? " check-item--done" : ""}${open ? "" : " check-item--locked"}"><input class="check-item__input" type="checkbox" data-level="${level}" data-index="${index}"${checked ? " checked" : ""}${open ? "" : " disabled"}><span class="check-item__text">${esc(topic)}</span></label>`;
  }).join("");
  return `<section class="level${open ? "" : " level--locked"}${level === current ? " level--current" : ""}"><header class="level__header"><h3 class="level__title">${level + 1}. ${STAGES[level]}</h3><span class="level__status">${status}</span></header>${items}</section>`;
}

function renderChecklist(container, roadmap, slug) {
  const checklist = container.querySelector(".roadmap__checklist-body");
  const done = load()[slug] || {}; const step = nextStep(roadmap, done); const total = pct(totalRatio(roadmap, done));
  checklist.innerHTML = `<p class="roadmap__summary">Progresso geral: ${total}%</p><div class="progress-bar"><span class="progress-bar__fill" style="width:${total}%"></span></div>${nextStepHtml(roadmap, done)}${roadmap.levels.map((_, level) => levelHtml(roadmap, level, done, step ? step.level : -1)).join("")}<button class="roadmap__reset" type="button" data-action="reset">Reiniciar progresso desta trilha</button>`;
  checklist.querySelectorAll(".check-item__input").forEach((input) => input.addEventListener("change", () => {
    const next = load(); next[slug] = { ...(next[slug] || {}), [`${input.dataset.level}-${input.dataset.index}`]: input.checked }; save(next); renderChecklist(container, roadmap, slug);
  }));
  checklist.querySelector("[data-action=reset]").addEventListener("click", () => { const next = load(); delete next[slug]; save(next); renderChecklist(container, roadmap, slug); });
}

export function renderRoadmap(container, slug) {
  const roadmap = ROADMAPS.find((item) => item.slug === slug);
  const details = CATALOG.trilhas[slug];
  const iconFiles = { dev: "desenvolvimento", dados: "dados", ciber: "cyberseguranca", redes: "redes", gestao: "gestao", ux: "produto", cloud: "cloud" };
  if (!roadmap || !details) { container.innerHTML = `<p class="roadmap__empty">Trilha não encontrada. <a href="index.html#trilhas">Voltar</a></p>`; return; }

  const options = details.steps.map((step, index) => `<article class="study-option"><span class="study-option__number">${index + 1}</span><div class="study-option__body"><h3>${esc(step.title)}</h3><p>${esc(step.description)}</p><div class="study-option__resources">${step.links.map((link) => `<div class="study-resource"><a href="${esc(link.url)}" target="_blank" rel="noopener">${esc(link.label)} <small>${esc(link.type)}</small></a><button type="button" data-add-resource="${link.id}">+ Adicionar ao meu plano</button></div>`).join("")}</div></div></article>`).join("");
  container.innerHTML = `<section class="roadmap-hero"><div class="roadmap-hero__inner"><a class="roadmap__back" href="index.html#trilhas">← Voltar para as trilhas</a><header class="roadmap__head"><div class="roadmap__icon"><img src="./src/img/${iconFiles[slug]}.png" alt=""></div><div><h1 class="roadmap__title">${esc(roadmap.title)}</h1><p class="roadmap__level"><span class="roadmap__dots">${dots(roadmap.dots)}</span> Dificuldade: ${roadmap.label} (${roadmap.dots} de 5)</p></div></header><p>${esc(roadmap.desc)}</p></div></section>
  <div class="roadmap__content"><aside class="roadmap__side"><section class="info-card"><h2>Um dia na vida</h2><p>${esc(details.diaNaVida)}</p></section><section class="info-card"><h2>Habilidades essenciais</h2><div class="info-tags">${details.habilidades.map((item) => `<span>${esc(item)}</span>`).join("")}</div></section><section class="info-card"><h2>Ferramentas usadas</h2><div class="info-tags info-tags--gold">${details.ferramentas.map((item) => `<span>${esc(item)}</span>`).join("")}</div></section><section class="info-card info-card--start"><h2>Como começar</h2><p>${esc(details.comoComecar)}</p></section></aside>
  <section class="roadmap__options"><header class="roadmap__options-head"><h2>Opções de estudo disponíveis</h2><button class="btn btn--primary" type="button" data-plan-open>Ver Meu Plano Personalizado</button></header>${options}<details class="roadmap__checklist"><summary>Acompanhar progresso do roteiro completo</summary><div class="roadmap__checklist-body"></div></details></section></div>`;

  renderChecklist(container, roadmap, slug);
  container.querySelectorAll("[data-add-resource]").forEach((button) => button.addEventListener("click", () => {
    const resource = details.steps.flatMap((item) => item.links).find((item) => item.id === button.dataset.addResource); if (!resource) return;
    let plans = {}; try { plans = JSON.parse(localStorage.getItem("tiajudo:personal-plan")) || {}; } catch { /* inicia vazio */ }
    plans[slug] ||= [];
    if (!plans[slug].some((item) => item.sourceId === resource.id)) plans[slug].push({ name: resource.label, link: resource.url, done: false, sourceId: resource.id });
    try { localStorage.setItem("tiajudo:personal-plan", JSON.stringify(plans)); } catch { /* mantém a interação */ }
    button.textContent = "Adicionado ao meu plano"; button.disabled = true;
  }));
}
