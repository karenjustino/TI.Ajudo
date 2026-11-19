/* engine/recommend.js — regras de recomendação. Funções puras: sem DOM, sem estado global. */
import { TRAILS } from "../data/catalog.js";
import { QUESTIONS, LEVELS, HOURS_PER_WEEK, START_STEP } from "../data/questions.js";

/** Pontuação (0–100) de cada trilha, da mais para a menos afim. */
export function rankTrails(answers) {
  const score = TRAILS.map(() => 0);
  const max = TRAILS.map(() => 0);

  QUESTIONS.forEach((question, qi) => {
    const best = {};
    question.options.forEach(({ weights = {} }) => {
      for (const [trail, points] of Object.entries(weights)) best[trail] = Math.max(best[trail] ?? 0, points);
    });
    for (const trail in best) max[trail] += best[trail];

    const chosen = question.options[answers[qi]]?.weights ?? {};
    for (const trail in chosen) score[trail] += chosen[trail];
  });

  return TRAILS
    .map((_, index) => ({ index, percent: max[index] ? Math.round((score[index] / max[index]) * 100) : 0 }))
    .sort((a, b) => b.percent - a.percent);
}

export function affinityLabel(percent) {
  if (percent >= 60) return "Combina muito";
  if (percent >= 35) return "Combina bem";
  return "Vale explorar";
}

/** Respostas da própria pessoa que levaram a esta trilha (até 3). */
export function reasonsFor(trailIndex, answers) {
  return QUESTIONS
    .map((question, qi) => question.options[answers[qi]])
    .filter((option) => option?.weights?.[trailIndex] > 0)
    .map((option) => option.label)
    .slice(0, 3);
}

export function buildProfile(answers) {
  const ranking = rankTrails(answers);
  const top = ranking[0];
  return {
    answers,
    ranking,
    trailIndex: top.index,
    trail: TRAILS[top.index],
    undecided: top.percent === 0,
    levelName: LEVELS[answers[0]],
    hoursPerWeek: HOURS_PER_WEEK[answers[QUESTIONS.length - 1]],
    startStep: START_STEP[answers[0]],
  };
}