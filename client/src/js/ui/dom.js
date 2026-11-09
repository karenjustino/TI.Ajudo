export const $ = (id) => document.getElementById(id);

export const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

/** Espera `ms` (zero quando a pessoa pediu menos movimento). */
export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, prefersReducedMotion() ? 0 : ms));

export function escapeHtml(value) {
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(value).replace(/[&<>"']/g, (c) => map[c]);
}

export const setStatus = (message) => { $("status").textContent = message; };