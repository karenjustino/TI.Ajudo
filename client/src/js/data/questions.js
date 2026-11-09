/* data/questions.js — perguntas do assistente e textos de apoio.
   Cada opção tem `weights`: { índiceDaTrilha: pontos } (ver data/catalog.js).
   Opção sem `weights` não influencia o perfil (ex.: "Ainda não sei"). */

const NOT_SURE = { label: "Ainda não sei, e tudo bem." };

export const QUESTIONS = [
  {
    text: "Como você considera seu conhecimento atual em tecnologia?",
    hint: "Não existe resposta certa. Só queremos entender seu ponto de partida.",
    options: [
      { label: "Sou completamente iniciante." },
      { label: "Conheço algumas coisas básicas." },
      { label: "Tenho conhecimentos intermediários." },
      { label: "Tenho bastante conhecimento e experiência." },
    ],
  },
  {
    text: "O que mais chama sua atenção?",
    hint: "Escolha a que estiver mais perto, mesmo que não seja perfeita.",
    options: [
      { label: "Criar sites, apps e sistemas.", weights: { 0: 3, 5: 1 } },
      { label: "Descobrir padrões nos números.", weights: { 1: 3 } },
      { label: "Proteger e investigar sistemas.", weights: { 2: 3, 3: 1 } },
      { label: "Montar e manter redes e servidores.", weights: { 3: 3, 6: 1, 2: 1 } },
      NOT_SURE,
    ],
  },
  {
    text: "Como você prefere trabalhar?",
    options: [
      { label: "Sozinho, concentrado em problemas técnicos.", weights: { 0: 1, 1: 1, 2: 1 } },
      { label: "Em equipe, organizando o que cada um faz.", weights: { 4: 3, 5: 1 } },
      { label: "Conversando com pessoas e entendendo suas necessidades.", weights: { 5: 3, 4: 1 } },
      { label: "Automatizando tarefas repetitivas.", weights: { 6: 3, 0: 1 } },
      NOT_SURE,
    ],
  },
  {
    text: "Qual atividade soa mais interessante?",
    options: [
      { label: "Desenhar uma tela mais fácil de usar.", weights: { 5: 3 } },
      { label: "Escrever código que resolve um problema.", weights: { 0: 3, 6: 1 } },
      { label: "Montar um relatório com gráficos.", weights: { 1: 3, 4: 1 } },
      { label: "Planejar prazos, riscos e entregas.", weights: { 4: 3 } },
      NOT_SURE,
    ],
  },
  {
    text: "Como é sua relação com matemática e lógica?",
    options: [
      { label: "Gosto bastante.", weights: { 1: 2, 0: 1, 2: 1 } },
      { label: "Me viro bem.", weights: { 0: 1, 3: 1, 6: 1 } },
      { label: "Prefiro áreas criativas ou de pessoas.", weights: { 5: 2, 4: 1 } },
      { label: "Não sei dizer." },
    ],
  },
  {
    text: "Quanto tempo você tem por semana para estudar?",
    hint: "Vale o que for realista para a sua rotina. Constância importa mais que quantidade.",
    options: [
      { label: "Cerca de 2 horas." },
      { label: "Cerca de 5 horas." },
      { label: "10 horas ou mais." },
    ],
  },
];

/* Frase de incentivo após responder a pergunta de mesmo índice (null = nenhuma). */
export const FEEDBACK = [
  "Obrigado por contar! Todo mundo começa de algum lugar.",
  null,
  "Boa! Isso já ajuda a afinar as sugestões.",
  null,
  "Quase lá, falta só uma!",
];

/* Índices seguem a ordem das opções das perguntas 1 (nível) e 6 (tempo). */
export const LEVELS = ["Iniciante", "Básico", "Intermediário", "Avançado"];
export const HOURS_PER_WEEK = [2, 5, 10];
export const START_STEP = [0, 0, 1, 2]; // etapa inicial sugerida por nível