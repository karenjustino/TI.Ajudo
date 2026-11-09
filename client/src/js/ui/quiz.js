/* ui/quiz.js — fluxo das perguntas: nome, perguntas, progresso, voltar e recomeçar. */
import { QUESTIONS, FEEDBACK } from "../data/questions.js";
import { $, escapeHtml, wait } from "./dom.js";
import { clearChat, addUserMessage, addHint, trimChat, botSay } from "./chatbot.js";

const TOTAL = QUESTIONS.length;

/* Ordem das mensagens: intro < nome < (pergunta i, resposta i, incentivo i) < fim. */
const KEY = {
  intro: -2,
  name: -1,
  question: (i) => i * 3,
  answer: (i) => i * 3 + 1,
  feedback: (i) => i * 3 + 2,
  end: TOTAL * 3,
};

let state;
let token = 0; // muda ao recomeçar/voltar, cancelando conversas pendentes
let hooks = { onRestart() {}, onFinish() {} };

const live = (t) => () => t === token;
const setChoices = (html) => { $("opts").innerHTML = html; };

function updateProgress() {
  const inQuiz = state.mode === "question";
  const done = state.mode === "done";
  const percent = done ? 100 : inQuiz ? Math.round((state.index / TOTAL) * 100) : 0;
  const label = done
    ? "Tudo respondido"
    : inQuiz
      ? `Pergunta ${state.index + 1} de ${TOTAL}${state.index === TOTAL - 1 ? " · a última!" : ""}`
      : "Vamos nos conhecer";

  $("pgt").textContent = label;
  $("pgp").textContent = `${percent}%`;
  $("pgb").style.width = `${percent}%`;
  $("pgbar").setAttribute("aria-valuenow", percent);
  $("back").hidden = !(inQuiz && state.index > 0);
}

async function start() {
  const t = ++token;
  state = { mode: "intro", index: 0, answers: [], name: "" };
  hooks.onRestart();
  $("quiz").hidden = false;
  clearChat();
  setChoices("");
  updateProgress();

  const say = (text, key) => botSay(text, key, live(t));
  if (!(await say("Oi! Eu sou o Ajudo, o assistente do TI.Ajudo. 👋", KEY.intro))) return;
  if (!(await say(`Vou te ajudar a descobrir por onde começar em tecnologia. São ${TOTAL} perguntas rápidas, e não existe resposta certa ou errada.`, KEY.intro))) return;
  if (!(await say("Antes de tudo: como você prefere ser chamado? Se quiser, pode pular.", KEY.intro))) return;

  state.mode = "name";
  updateProgress();
  setChoices(
    '<form class="name-form" id="nameForm">' +
      '<label class="visually-hidden" for="nameInput">Seu nome ou apelido</label>' +
      '<input class="name-form__input" id="nameInput" type="text" maxlength="30" autocomplete="given-name" placeholder="Seu nome ou apelido">' +
      '<button class="btn btn--primary" type="submit">Continuar</button>' +
      '<button class="link-button link-button--dark" type="button" data-skip>Prefiro não dizer</button>' +
    "</form>"
  );
}

async function setName(name) {
  if (state.mode !== "name") return;
  const t = token;
  state.mode = "intro";
  state.name = name;
  setChoices("");
  addUserMessage(name || "Prefiro não dizer", KEY.name);
  const reply = name ? `Prazer, ${name}! Vamos começar.` : "Tudo bem! Vamos começar.";
  if (await botSay(reply, KEY.name, live(t))) ask(0, t);
}

async function ask(index, t) {
  state.mode = "question";
  state.index = index;
  updateProgress();

  const question = QUESTIONS[index];
  if (!(await botSay(question.text, KEY.question(index), live(t)))) return;
  if (question.hint) addHint(question.hint, KEY.question(index));
  showChoices(index, index > 0);
}

function showChoices(index, focusFirst) {
  setChoices(QUESTIONS[index].options
    .map((option, k) => `<button class="choice" type="button" data-k="${k}">${escapeHtml(option.label)}</button>`)
    .join(""));
  if (focusFirst) $("opts").querySelector(".choice")?.focus({ preventScroll: true });
}

function choose(k) {
  if (state.mode !== "question") return;
  const i = state.index;
  state.answers[i] = k;
  setChoices("");
  addUserMessage(QUESTIONS[i].options[k].label, KEY.answer(i));
  if (i + 1 >= TOTAL) finish(); else next(i);
}

async function next(i) {
  const t = token;
  const encouragement = FEEDBACK[i];
  if (encouragement && !(await botSay(encouragement, KEY.feedback(i), live(t)))) return;
  ask(i + 1, t);
}

async function finish() {
  const t = token;
  const { name } = state;
  state.mode = "done";
  updateProgress();

  const text = `Pronto${name ? `, ${name}` : ""}! Já sei por onde você pode começar. Montando o seu plano…`;
  if (!(await botSay(text, KEY.end, live(t)))) return;
  await wait(600);
  if (t === token) hooks.onFinish({ answers: state.answers, name: state.name });
}

function back() {
  if (state.mode !== "question" || state.index < 1) return;
  const previous = state.index - 1;
  token++;
  state.answers.length = previous;
  state.index = previous;
  trimChat(KEY.question(previous));
  updateProgress();
  showChoices(previous, true);
}

/** Liga os eventos do quiz. `onRestart` roda ao (re)começar; `onFinish({ answers, name })` ao terminar. */
export function initQuiz({ onRestart, onFinish }) {
  hooks = { onRestart, onFinish };

  $("opts").addEventListener("click", (e) => {
    const choice = e.target.closest(".choice");
    if (choice) return choose(Number(choice.dataset.k));
    if (e.target.closest("[data-skip]")) setName("");
  });
  $("opts").addEventListener("submit", (e) => {
    if (e.target.id !== "nameForm") return;
    e.preventDefault();
    setName($("nameInput").value.trim());
  });
  $("back").addEventListener("click", back);
  $("reset").addEventListener("click", start);

  return { start, hide: () => { $("quiz").hidden = true; } };
}