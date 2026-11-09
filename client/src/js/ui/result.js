/* ui/result.js — tela de resultado e folha de impressão (#sheet). */
import { buildProfile, affinityLabel, reasonsFor } from "../engine/recommend.js";
import { TRAILS } from "../data/catalog.js";
import { $, escapeHtml as esc, prefersReducedMotion } from "./dom.js";
import { exportPlan } from "./spreadsheet.js";

let last = null; // { answers, name } do resultado em exibição

function renderLinks(links) {
  return links
    .map((l) => `<a class="plan__link" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a>`)
    .join("");
}

function resultHtml(profile, name) {
  const { trail, ranking, undecided, startStep, levelName, hoursPerWeek } = profile;
  const reasons = undecided
    ? ["Você ainda está descobrindo o que mais gosta, e isso é completamente normal. Esta é uma boa porta de entrada."]
    : reasonsFor(profile.trailIndex, profile.answers).map((r) => `Você escolheu: “${r}”`);

  const affinity = ranking.slice(0, 3).map(({ index, percent }) =>
    `<li class="affinity__item"><span>${esc(TRAILS[index].name)}</span>` +
    `<span class="affinity__meter"><span class="affinity__fill" style="width:${Math.max(percent, 4)}%"></span></span>` +
    `<em class="affinity__level">${affinityLabel(percent)}</em></li>`).join("");

  const plan = trail.steps.map((step, i) =>
    `<li class="plan__item"><b>${esc(step.title)}</b>` +
    (i < startStep ? '<span class="plan__badge">Pode pular se já souber</span>' : "") +
    `<div class="plan__links">${renderLinks(step.links)}</div></li>`).join("");

  return `<div class="result">
    <p class="result__eyebrow">${name ? `${esc(name)}, seu` : "Seu"} ponto de partida</p>
    <h2 class="result__heading">${undecided ? "Que tal começar por " : "Você combina com "}${esc(trail.name)}</h2>
    <p class="section__sub">${esc(trail.description)} Use o plano como ponto de partida: você pode mudar de rumo quando quiser.</p>
    <div class="result__why"><h3 class="result__subtitle">Por que essa trilha?</h3>
      <ul class="result__reasons">${reasons.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></div>
    <h2 class="result__title">Áreas com mais a ver com você</h2>
    <ul class="affinity">${affinity}</ul>
    <h2 class="result__title">Plano de estudos: ${esc(trail.name)}</h2>
    <p class="section__sub">Nível informado: ${levelName}. Ritmo sugerido: ${hoursPerWeek} horas por semana. ${startStep ? `Você pode começar pela etapa ${startStep + 1} e voltar às anteriores quando precisar.` : "Comece pela etapa 1."}</p>
    <ol class="plan">${plan}</ol>
    <div class="result__actions">
      <button class="btn btn--primary" type="button" data-act="print">Imprimir ou salvar em PDF</button>
      <button class="btn btn--secondary" type="button" data-act="plan">Baixar meu plano (.xlsx)</button>
      <button class="btn btn--secondary" type="button" data-act="retry">Refazer perguntas</button>
    </div>
    <p class="result__note">Este plano é um ponto de partida, não uma decisão definitiva. Você pode refazer as perguntas quando quiser.</p>
  </div>`;
}

function sheetHtml(profile, name) {
  const { trail, levelName, hoursPerWeek } = profile;
  const steps = trail.steps.map((step, i) =>
    `<div class="print__step"><div><span class="print__box"></span><b>${i + 1}. ${esc(step.title)}</b></div><ul>` +
    step.links.map((l) => `<li>${esc(l.label)}: ${esc(l.url)}</li>`).join("") +
    '</ul><div class="print__line">Anotações:</div></div>').join("");

  return `<h1 class="print__title">Meu plano de estudos</h1>
    <p>TI.Ajudo, gerado em ${new Date().toLocaleDateString("pt-BR")}</p>
    <p>Nome: ${name ? esc(name) : "______________________________________"}</p>
    <h2 class="print__heading">Trilha: ${esc(trail.name)}</h2>
    <p>Nível informado: ${levelName}. Ritmo sugerido: ${hoursPerWeek} horas por semana.</p>
    <h2 class="print__heading">Etapas</h2>${steps}
    <p class="print__note">Os conteúdos listados são de terceiros e não pertencem ao TI.Ajudo.</p>`;
}

function render() {
  const profile = buildProfile(last.answers);
  $("result").innerHTML = resultHtml(profile, last.name);
  $("sheet").innerHTML = sheetHtml(profile, last.name);
}

export function initResult({ onRetry }) {
  $("result").addEventListener("click", (e) => {
    const action = e.target.dataset.act;
    if (action === "retry") onRetry();
    if (action === "print") window.print();
    if (action === "plan") exportPlan(buildProfile(last.answers));
  });

  return {
    show(answers, name) {
      last = { answers, name };
      render();
      $("result").hidden = false;
      $("result").querySelector(".result__heading")
        .scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    },
    hide() { $("result").hidden = true; },
    /** Redesenha se o catálogo mudou (planilha importada) enquanto o resultado está na tela. */
    refresh() { if (last && !$("result").hidden) render(); },
  };
}