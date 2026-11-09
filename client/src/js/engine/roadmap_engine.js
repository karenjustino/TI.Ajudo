/* engine/roadmap_engine.js — regras de progresso e recomendação do roadmap.
   Funções puras: sem DOM, sem localStorage. `done` é um objeto { "nivel-item": true }. */

export const UNLOCK_RATIO = 0.7;

const key = (level, index) => `${level}-${index}`;

export const isDone = (done, level, index) => Boolean(done[key(level, index)]);

export function levelRatio(roadmap, level, done) {
  const items = roadmap.levels[level];
  return items.filter((_, i) => isDone(done, level, i)).length / items.length;
}

export function totalRatio(roadmap, done) {
  const sum = roadmap.levels.reduce((acc, _, l) => acc + levelRatio(roadmap, l, done), 0);
  return sum / roadmap.levels.length;
}

/** O nível só abre quando o anterior chegou a 70%. */
export const isUnlocked = (roadmap, level, done) =>
  level === 0 || levelRatio(roadmap, level - 1, done) >= UNLOCK_RATIO;

/** Primeiro nível aberto e incompleto; -1 quando a trilha acabou. */
export function currentLevel(roadmap, done) {
  return roadmap.levels.findIndex((_, l) => levelRatio(roadmap, l, done) < 1 && isUnlocked(roadmap, l, done));
}

/** Próximo passo recomendado: primeiro item pendente do nível atual. */
export function nextStep(roadmap, done) {
  const level = currentLevel(roadmap, done);
  if (level < 0) return null;
  const index = roadmap.levels[level].findIndex((_, i) => !isDone(done, level, i));
  return { level, index, topic: roadmap.levels[level][index] };
}

/** Atalhos de estudo para um tópico (troque por links curados quando houver API). */
export function resourcesFor(topic, trailTitle) {
  const q = encodeURIComponent;
  return [
    { label: "Vídeo-aula", url: `https://www.youtube.com/results?search_query=${q(`${topic} ${trailTitle} tutorial`)}` },
    { label: "Documentação", url: `https://www.google.com/search?q=${q(`${topic} documentação guia`)}` },
    { label: "Prática", url: `https://www.google.com/search?q=${q(`${topic} projeto prático iniciante`)}` },
  ];
}