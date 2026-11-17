import { ROADMAPS, STAGES } from "./data/Roadmap_data.js";
import { isDone, levelRatio, totalRatio, isUnlocked, nextStep, UNLOCK_RATIO } from "./engine/roadmap_engine.js";

const PROGRESS_KEY = "tiajudo:progress";
const PLAN_KEY = "tiajudo:personal-plan";
const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const read = (key) => { try { return JSON.parse(localStorage.getItem(key)) || {}; } catch { return {}; } };
const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* acompanha durante a sessão */ } };
const progress = () => read(PROGRESS_KEY);
const plans = () => read(PLAN_KEY);
const totalItems = ROADMAPS.reduce((sum, trail) => sum + trail.levels.reduce((n, level) => n + level.length, 0), 0);

const requestedSlug = new URLSearchParams(location.search).get("trilha");
let savedActiveSlug = null;
try {
  savedActiveSlug = localStorage.getItem("tiajudo:active-trail");
} catch {
  // O painel continua disponível sem persistência local.
}
let activeSlug = savedActiveSlug === "none" ? null : requestedSlug || savedActiveSlug || ROADMAPS[0].slug;
if (activeSlug && !ROADMAPS.some((trail) => trail.slug === activeSlug)) activeSlug = ROADMAPS[0].slug;
const root = document.querySelector("[data-plan-dashboard]");

function render() {
  const allProgress = progress();
  const doneTotal = ROADMAPS.reduce((sum, trail) => sum + trail.levels.flatMap((level, li) => level.map((_, i) => isDone(allProgress[trail.slug] || {}, li, i))).filter(Boolean).length, 0);
  const overallPercent = totalItems ? Math.round(doneTotal / totalItems * 100) : 0;
  const trailCards = ROADMAPS.map((item) => { const ratio = Math.round(totalRatio(item, allProgress[item.slug] || {}) * 100); const count = item.levels.reduce((n, level) => n + level.length, 0); const complete = Object.values(allProgress[item.slug] || {}).filter(Boolean).length; return `<button type="button" class="dashboard-trail${item.slug === activeSlug ? " dashboard-trail--active" : ""}" data-select-trail="${item.slug}"><span class="dashboard-trail__top"><span class="dashboard-trail__icon">${esc(item.icon)}</span><strong>${ratio}%</strong></span><span class="dashboard-trail__name">${esc(item.title)}</span><span class="plan-progress__bar"><span style="width:${ratio}%"></span></span><small>${complete}/${count} concluídos</small></button>`; }).join("");
  if (!activeSlug) {
    root.innerHTML = `<section class="dashboard-hero"><div class="dashboard-hero__inner"><span class="plan-modal__badge">Acompanhamento sem cadastro</span><h1>Seu Plano de Progresso</h1><p>Seu plano personalizado foi esvaziado. Escolha uma trilha para continuar acompanhando seu progresso.</p><section class="dashboard-total"><div><strong>Progresso Geral em TI</strong><small>${doneTotal} de ${totalItems} itens concluídos nas trilhas</small></div><div class="dashboard-total__visual"><div class="plan-progress__bar"><span style="width:${overallPercent}%"></span></div><strong>${overallPercent}%</strong></div></section></div></section><section class="dashboard-main"><h2>Todas as Trilhas</h2><div class="dashboard-trails">${trailCards}</div><section class="dashboard-empty"><h2>Nenhuma trilha ativa</h2><p>Selecione uma trilha acima para abrir seu acompanhamento.</p></section></section>`;
    bindTrailCards();
    return;
  }
  const trail = ROADMAPS.find((item) => item.slug === activeSlug);
  const done = allProgress[activeSlug] || {};
  const step = nextStep(trail, done);
  const activeDone = trail.levels.flatMap((level, li) => level.map((_, i) => isDone(done, li, i))).filter(Boolean).length;
  const customPlans = plans();
  const chosen = customPlans[activeSlug] || [];
  const chosenTotal = Object.values(customPlans).reduce((count, entries) => count + entries.length, 0);
  const chosenDone = Object.values(customPlans).flat().filter((entry) => entry.done).length;

  root.innerHTML = `<section class="dashboard-hero"><div class="dashboard-hero__inner"><span class="plan-modal__badge">Acompanhamento sem cadastro</span><h1>Seu Plano de Progresso</h1><p>Escolha uma trilha para abrir o checklist de etapas e acesse os links de orientação para começar seus estudos. Seu progresso fica salvo apenas neste navegador.</p><section class="dashboard-total"><div><strong>Progresso Geral em TI</strong><small>${doneTotal} de ${totalItems} itens concluídos nas trilhas</small></div><div class="dashboard-total__visual"><div class="plan-progress__bar"><span style="width:${overallPercent}%"></span></div><strong>${overallPercent}%</strong></div></section><section class="dashboard-total dashboard-total--personal"><div><strong>Meu plano personalizado</strong><small>${chosenDone} de ${chosenTotal} conteúdos escolhidos concluídos</small></div><div class="dashboard-total__visual"><div class="plan-progress__bar"><span style="width:${chosenTotal ? chosenDone / chosenTotal * 100 : 0}%"></span></div><strong>${chosenTotal ? Math.round(chosenDone / chosenTotal * 100) : 0}%</strong></div></section></div></section>
  <section class="dashboard-main"><h2>Todas as Trilhas</h2><div class="dashboard-trails">${trailCards}</div>
  <section class="dashboard-active"><header class="dashboard-active__head"><div><span class="plan-modal__badge">Trilha ativa</span><h2>${esc(trail.title)}</h2><p>${esc(trail.desc)}</p></div><a class="btn btn--secondary" href="./roadmap.html?trilha=${trail.slug}">Ver guia da trilha →</a></header><section class="dashboard-active__progress"><div class="dashboard-active__progress-label"><span>Progresso nesta trilha</span><strong>${activeDone} de ${trail.levels.flat().length} (${Math.round(totalRatio(trail, done) * 100)}%)</strong></div><div class="plan-progress__bar"><span style="width:${Math.round(totalRatio(trail, done) * 100)}%"></span></div></section>
  ${trail.levels.map((items, li) => { const open = isUnlocked(trail, li, done); const ratio = Math.round(levelRatio(trail, li, done) * 100); return `<section class="dashboard-level${open ? "" : " dashboard-level--locked"}"><header><h3>${li + 1}. ${STAGES[li]}</h3><span>${open ? `${ratio}% concluído` : `Bloqueado · conclua ${Math.round(UNLOCK_RATIO * 100)}% do nível anterior`}${step?.level === li ? " · você está aqui" : ""}</span></header>${items.map((item, i) => { const checked = isDone(done, li, i); return `<label class="check-item${checked ? " check-item--done" : ""}"><input type="checkbox" data-progress-check="${li}:${i}"${checked ? " checked" : ""}${open ? "" : " disabled"}><span class="check-item__text">${esc(item)}</span></label>`; }).join("")}</section>`; }).join("")}
  <section class="dashboard-personal"><h3>Conteúdos no meu plano personalizado</h3>${chosen.length ? chosen.map((entry, index) => `<div class="dashboard-personal__item"><label><input type="checkbox" data-personal-check="${index}"${entry.done ? " checked" : ""}><span>${esc(entry.name)}</span></label>${entry.link ? `<a href="${esc(entry.link)}" target="_blank" rel="noopener">Acessar ↗</a>` : ""}</div>`).join("") : `<p>Você ainda não adicionou conteúdos desta trilha. <a href="./roadmap.html?trilha=${trail.slug}">Explore as opções de estudo</a>.</p>`}</section></section></section>`;

  bindTrailCards();
  root.querySelectorAll("[data-progress-check]").forEach((input) => input.addEventListener("change", () => { const [level, index] = input.dataset.progressCheck.split(":"); const next = progress(); next[activeSlug] ||= {}; next[activeSlug][`${level}-${index}`] = input.checked; write(PROGRESS_KEY, next); render(); }));
  root.querySelectorAll("[data-personal-check]").forEach((input) => input.addEventListener("change", () => { const next = plans(); next[activeSlug][input.dataset.personalCheck].done = input.checked; write(PLAN_KEY, next); render(); }));
}

function bindTrailCards() {
  root.querySelectorAll("[data-select-trail]").forEach((button) => button.addEventListener("click", () => { activeSlug = button.dataset.selectTrail; localStorage.setItem("tiajudo:active-trail", activeSlug); history.replaceState(null, "", `?trilha=${activeSlug}`); render(); }));
}

render();

window.addEventListener("storage", (event) => {
  if (event.key !== "tiajudo:active-trail") return;
  activeSlug = event.newValue === "none" ? null : event.newValue || ROADMAPS[0].slug;
  render();
});
