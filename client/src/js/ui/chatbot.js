/* ui/chatbot.js — a conversa: bolhas, "digitando…" e histórico.
   Cada mensagem tem uma `key` de ordem; `trimChat(key)` volta a conversa até aquele ponto. */
import { $, wait } from "./dom.js";

let log = [];

function createNode(entry, animate) {
  const isHint = entry.kind === "hint";
  const node = document.createElement(isHint ? "p" : "div");
  node.className = isHint
    ? "chat__hint"
    : `chat__bubble chat__bubble--${entry.who}${animate ? " chat__bubble--enter" : ""}`;
  node.textContent = entry.text;
  return node;
}

const scrollToEnd = () => { const chat = $("msgs"); chat.scrollTop = chat.scrollHeight; };

function render() {
  const chat = $("msgs");
  chat.textContent = "";
  log.forEach((entry) => chat.appendChild(createNode(entry, false)));
  scrollToEnd();
}

function add(entry) {
  log.push(entry);
  $("msgs").appendChild(createNode(entry, true));
  scrollToEnd();
}

export function clearChat() { log = []; $("msgs").textContent = ""; }
export const addUserMessage = (text, key) => add({ who: "user", text, key });
export const addHint = (text, key) => add({ kind: "hint", text, key });

/** Remove tudo que vem depois de `maxKey` e redesenha a conversa. */
export function trimChat(maxKey) {
  log = log.filter((entry) => entry.key <= maxKey);
  render();
}

/**
 * Mostra "digitando…" e depois a mensagem do assistente.
 * `isCurrent()` diz se a conversa ainda vale (false após recomeçar ou voltar); nesse caso retorna false.
 */
export async function botSay(text, key, isCurrent) {
  const typing = document.createElement("div");
  typing.className = "chat__bubble chat__bubble--bot chat__typing";
  typing.innerHTML = '<span class="visually-hidden">O assistente está digitando…</span><i></i><i></i><i></i>';
  $("msgs").appendChild(typing);
  scrollToEnd();

  await wait(Math.min(450 + text.length * 8, 1100));
  typing.remove();
  if (!isCurrent()) return false;

  add({ who: "bot", text, key });
  return true;
}