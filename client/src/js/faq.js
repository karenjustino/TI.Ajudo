import { CATALOG } from "./data/catalog.js";

const esc = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
})[character]);
const list = document.querySelector("#faq-list");
list.innerHTML = CATALOG.faq.map((item, index) => `
  <details class="faq-item"${index < 3 ? " open" : ""}>
    <summary>
      <span>${esc(item.pergunta)}</span>
      <span class="faq-item__toggle" aria-hidden="true"></span>
    </summary>
    <div class="faq-item__answer">${esc(item.resposta)}</div>
  </details>
`).join("");

list.addEventListener("toggle", (event) => {
  const opened = event.target;
  if (!opened.matches(".faq-item") || !opened.open) return;
  list.querySelectorAll(".faq-item[open]").forEach((item) => {
    if (item !== opened) item.open = false;
  });
}, true);
