/* assistente.js — ponto de entrada da página assistente.html: liga os módulos entre si.
   Dependências seguem um sentido só: data → engine → ui → assistente.js */
import { initQuiz } from "./ui/quiz.js";
import { initResult } from "./ui/result.js";
import { initSpreadsheet } from "./ui/spreadsheet.js";

const result = initResult({ onRetry: () => quiz.start() });

const quiz = initQuiz({
  onRestart: () => result.hide(),
  onFinish: ({ answers, name }) => {
    quiz.hide();
    result.show(answers, name);
  },
});

initSpreadsheet({ onCatalogChange: () => result.refresh() });

quiz.start();