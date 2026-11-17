import { ROADMAPS } from "../data/Roadmap_data.js";

const KEY = "tiajudo:personal-plan";
const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
const write = (data) => { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* mantém na tela */ } };
const safeHref = (value) => { try { const url = new URL(value); return ["http:", "https:"].includes(url.protocol) ? url.href : ""; } catch { return ""; } };

export function initPersonalPlan({ trailSlug = null } = {}) {
  if (!document.querySelector("[data-plan-modal]")) document.body.insertAdjacentHTML("beforeend", `<dialog class="plan-modal" data-plan-modal aria-labelledby="plan-title"><div class="plan-modal__head"><span class="plan-modal__badge">Seu plano unificado</span><button class="plan-modal__close" type="button" aria-label="Fechar">×</button></div><h2 id="plan-title">Meu Plano Personalizado</h2><div class="plan-modal__content"></div></dialog>`);
  const dialog = document.querySelector("[data-plan-modal]");
  const content = dialog.querySelector(".plan-modal__content");
  const current = ROADMAPS.find((item) => item.slug === trailSlug);
  let filter = current?.slug || null;

  function render() {
    const saved = read();
    const trails = filter ? ROADMAPS.filter((item) => item.slug === filter) : ROADMAPS;
    const rows = trails.flatMap((trail) => (saved[trail.slug] || []).map((entry) => ({ ...entry, trail })));
    const done = rows.filter((entry) => entry.done).length;
    content.innerHTML = `<form class="plan-form" data-plan-form><strong>Adicionar novo conteúdo próprio</strong><div class="plan-form__fields">${!filter ? `<label class="visually-hidden" for="plan-trail">Área</label><select id="plan-trail" name="trail" required><option value="">Escolha uma área</option>${ROADMAPS.map((trail) => `<option value="${trail.slug}">${esc(trail.title)}</option>`).join("")}</select>` : `<input type="hidden" name="trail" value="${filter}">`}<label class="visually-hidden" for="plan-name">Nome do curso, livro ou vídeo</label><input id="plan-name" name="name" placeholder="Nome do curso/livro/vídeo" required maxlength="120"><label class="visually-hidden" for="plan-link">Link opcional</label><input id="plan-link" name="link" type="url" placeholder="Link (opcional)"><button class="btn btn--primary" type="submit">Adicionar</button></div></form>
      <section class="plan-progress"><div><span>Progresso: <strong>${done} de ${rows.length} concluídos</strong></span><strong>${rows.length ? Math.round(done / rows.length * 100) : 0}%</strong></div><div class="plan-progress__bar"><span style="width:${rows.length ? done / rows.length * 100 : 0}%"></span></div></section>
      ${trails.map((trail) => { const items = saved[trail.slug] || []; if (!items.length && !filter) return ""; return `<section class="plan-group"><h3>${esc(trail.title)}</h3>${items.map((entry, index) => { const href = safeHref(entry.link); return `<article class="plan-item"><label><input type="checkbox" data-plan-done="${trail.slug}:${index}"${entry.done ? " checked" : ""}><span><strong>${esc(entry.name)}</strong><small>${esc(trail.title)}</small></span></label>${href ? `<a href="${esc(href)}" target="_blank" rel="noopener">Acessar ↗</a>` : ""}<button type="button" class="plan-item__remove" data-plan-remove="${trail.slug}:${index}" aria-label="Remover ${esc(entry.name)}">×</button></article>`; }).join("")}</section>`; }).join("")}
      ${rows.length ? `<button class="plan-clear" type="button" data-plan-clear>${filter ? "Limpar plano desta área" : "Limpar todo o plano"}</button>` : `<p class="plan-empty">Seu plano está vazio. Adicione cursos, livros ou vídeos para acompanhar seus estudos.</p>`}`;
    content.querySelector("[data-plan-form]").addEventListener("submit", (event) => { event.preventDefault(); const form = new FormData(event.currentTarget); const slug = String(form.get("trail")); const next = read(); next[slug] ||= []; next[slug].push({ name: String(form.get("name")).trim(), link: String(form.get("link")).trim(), done: false }); write(next); render(); });
    content.querySelectorAll("[data-plan-done]").forEach((input) => input.addEventListener("change", () => { const [slug, index] = input.dataset.planDone.split(":"); const next = read(); next[slug][index].done = input.checked; write(next); render(); }));
    content.querySelectorAll("[data-plan-remove]").forEach((button) => button.addEventListener("click", () => { const [slug, index] = button.dataset.planRemove.split(":"); const next = read(); next[slug].splice(Number(index), 1); if (!next[slug].length) delete next[slug]; write(next); render(); }));
    content.querySelector("[data-plan-clear]")?.addEventListener("click", () => {
      const next = read();
      if (filter) delete next[filter]; else Object.keys(next).forEach((slug) => delete next[slug]);
      write(next);
      try {
        const activeTrail = localStorage.getItem("tiajudo:active-trail") || ROADMAPS[0].slug;
        if (!filter || activeTrail === filter) localStorage.setItem("tiajudo:active-trail", "none");
      } catch { /* o plano foi limpo mesmo sem persistência */ }
      render();
    });
  }

  function open() { filter = current?.slug || null; render(); if (!dialog.open) dialog.showModal(); }
  document.addEventListener("click", (event) => { if (event.target.closest("[data-plan-open]")) { event.preventDefault(); open(); } });
  dialog.querySelector(".plan-modal__close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  return { open };
}
