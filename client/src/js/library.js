import { CATALOG } from "./data/catalog.js";

const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const catalogItems = Object.values(CATALOG.trilhas).flatMap((trail) => trail.steps.flatMap((step) => step.links.map((link) => ({ trail, step, link }))));
const search = document.querySelector("#library-search");
const trailFilter = document.querySelector("#library-trail");
const typeFilter = document.querySelector("#library-type");
const grid = document.querySelector(".library-grid");
const count = document.querySelector(".library-count");

Object.values(CATALOG.trilhas).forEach((trail) => trailFilter.insertAdjacentHTML("beforeend", `<option value="${esc(trail.id)}">${esc(trail.name)}</option>`));
[...new Set(catalogItems.map(({ link }) => link.type))].sort((a, b) => a.localeCompare(b, "pt-BR")).forEach((type) => typeFilter.insertAdjacentHTML("beforeend", `<option value="${esc(type)}">${esc(type)}</option>`));

function savedPlans() {
  try {
    return JSON.parse(localStorage.getItem("tiajudo:personal-plan")) || {};
  } catch {
    return {};
  }
}

function render() {
  const query = search.value.trim().toLocaleLowerCase("pt-BR");
  const filtered = catalogItems.filter(({ trail, step, link }) => {
    const matchesTrail = !trailFilter.value || trail.id === trailFilter.value;
    const matchesType = !typeFilter.value || link.type === typeFilter.value;
    const searchableText = `${trail.name} ${step.title} ${step.description} ${link.label} ${link.type}`;
    const matchesSearch = !query || searchableText.toLocaleLowerCase("pt-BR").includes(query);
    return matchesTrail && matchesType && matchesSearch;
  });
  count.textContent = `${filtered.length} conteúdo(s) encontrado(s)`;
  grid.innerHTML = filtered.length ? filtered.map(({ trail, step, link }) => {
    const plan = savedPlans();
    const alreadyAdded = (plan[trail.id] || []).some((item) => item.sourceId === link.id);
    const typeClass = link.type.toLocaleLowerCase("pt-BR").replace(/[^a-z0-9]+/g, "-");
    return `<article class="library-card"><header><span class="library-pill library-pill--trail">${esc(trail.name)}</span><span class="library-pill library-pill--type library-pill--${typeClass}">${esc(link.type)}</span></header><h2>${esc(link.label)}</h2><p>Etapa: ${esc(step.title)}</p><footer><a href="${esc(link.url)}" target="_blank" rel="noopener">Acessar orientação ↗</a><button type="button" data-library-add="${trail.id}:${link.id}"${alreadyAdded ? " disabled" : ""}>${alreadyAdded ? "Adicionado ao plano" : "+ Adicionar ao plano"}</button></footer></article>`;
  }).join("") : `<p class="library-empty">Nenhum conteúdo encontrado. Tente outro termo ou altere os filtros.</p>`;
  grid.querySelectorAll("[data-library-add]").forEach((button) => button.addEventListener("click", () => {
    const [slug, id] = button.dataset.libraryAdd.split(":");
    const item = catalogItems.find(({ trail, link }) => trail.id === slug && link.id === id);
    if (!item) return;
    const plans = savedPlans();
    plans[slug] ||= [];
    if (!plans[slug].some((entry) => entry.sourceId === id)) plans[slug].push({ name: item.link.label, link: item.link.url, done: false, sourceId: id });
    try {
      localStorage.setItem("tiajudo:personal-plan", JSON.stringify(plans));
    } catch {
      // Mantém a interação disponível mesmo sem armazenamento local.
    }
    button.textContent = "Adicionado ao plano";
    button.disabled = true;
  }));
}

[search, trailFilter, typeFilter].forEach((control) => control.addEventListener(control === search ? "input" : "change", render));
render();
