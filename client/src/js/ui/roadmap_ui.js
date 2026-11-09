/* ui/roadmap_ui.js — renderiza a página de roadmap e guarda o progresso no navegador. */
import { ROADMAPS, STAGES } from "../data/Roadmap_data.js";
import { UNLOCK_RATIO, isDone, levelRatio, totalRatio, isUnlocked, nextStep, resourcesFor } from "../engine/roadmap_engine.js";

const STORAGE_KEY = "tiajudo:progress";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const pct = (ratio) => Math.round(ratio * 100);
const dots = (n) => "●".repeat(n) + "○".repeat(5 - n);

function load() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}
function save(all) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(all)); } catch { /* sem armazenamento: segue em memória */ }
}

/** Porcentagem concluída de uma trilha (útil para mostrar nos cards da home). */
export function progressOf(slug) {
  const roadmap = ROADMAPS.find((r) => r.slug === slug);
  return roadmap ? pct(totalRatio(roadmap, load()[slug] || {})) : 0;
}

function nextStepHtml(roadmap, done) {
  const step = nextStep(roadmap, done);
  if (!step) {
    return `<section class="next-step"><p class="next-step__label">Parabéns!</p><h2 class="next-step__title">Você concluiu esta trilha</h2><a class="next-step__link" href="index.html">Escolher outra trilha</a></section>`;
  }
  const links = resourcesFor(step.topic, roadmap.title)
    .map((r) => `<a class="next-step__link" href="${r.url}" target="_blank" rel="noopener">${r.label}</a>`).join("");
  return `<section class="next-step"><p class="next-step__label">Próximo passo recomendado · ${STAGES[step.level]}</p><h2 class="next-step__title">${esc(step.topic)}</h2><div class="next-step__links">${links}</div></section>`;
}

function levelHtml(roadmap, l, done, current) {
  const open = isUnlocked(roadmap, l, done);
  const status = open ? `${pct(levelRatio(roadmap, l, done))}% concluído` : `Bloqueado · conclua ${pct(UNLOCK_RATIO)}% do nível anterior`;
  const items = roadmap.levels[l].map((topic, i) => {
    const checked = isDone(done, l, i);
    return `<label class="check-item${checked ? " check-item--done" : ""}${open ? "" : " check-item--locked"}">
      <input class="check-item__input" type="checkbox" data-level="${l}" data-index="${i}"${checked ? " checked" : ""}${open ? "" : " disabled"}>
      <span class="check-item__text">${esc(topic)}</span></label>`;
  }).join("");
  const mods = (open ? "" : " level--locked") + (l === current ? " level--current" : "");
  return `<section class="level${mods}"><header class="level__header"><h3 class="level__title">${l + 1}. ${STAGES[l]}</h3><span class="level__status">${status}${l === current ? " · você está aqui" : ""}</span></header>${items}</section>`;
}

export function renderRoadmap(container, slug) {
  const roadmap = ROADMAPS.find((r) => r.slug === slug);
  if (!roadmap) { container.innerHTML = `<p class="roadmap__empty">Trilha não encontrada. <a href="index.html">Voltar</a></p>`; return; }

  const all = load();
  const done = all[slug] || {};
  const step = nextStep(roadmap, done);
  const total = pct(totalRatio(roadmap, done));

  container.innerHTML = `
    <a class="roadmap__back" href="index.html">← Todas as trilhas</a>
    <header class="roadmap__head">
      <div class="roadmap__icon">${esc(roadmap.icon)}</div>
      <div><h1 class="roadmap__title">${esc(roadmap.title)}</h1>
      <p class="roadmap__level"><span class="roadmap__dots">${dots(roadmap.dots)}</span> Dificuldade: ${roadmap.label}</p></div>
    </header>
    <p class="roadmap__summary">Progresso geral: ${total}%</p>
    <div class="progress-bar"><span class="progress-bar__fill" style="width:${total}%"></span></div>
    ${nextStepHtml(roadmap, done)}
    ${roadmap.levels.map((_, l) => levelHtml(roadmap, l, done, step ? step.level : -1)).join("")}
    <button class="roadmap__reset" type="button" data-action="reset">Reiniciar progresso desta trilha</button>`;

  container.querySelectorAll(".check-item__input").forEach((input) => input.addEventListener("change", () => {
    const next = { ...load() };
    next[slug] = { ...(next[slug] || {}), [`${input.dataset.level}-${input.dataset.index}`]: input.checked };
    save(next);
    const y = window.scrollY; renderRoadmap(container, slug); window.scrollTo(0, y);
  }));
  container.querySelector("[data-action=reset]").addEventListener("click", () => {
    const next = { ...load() }; delete next[slug]; save(next); renderRoadmap(container, slug);
  });
}