# Arquitetura do TI.Ajudo

Este documento descreve o comportamento presente no código. Os requisitos planejados estão em [documento-requistos.md](documento-requistos.md).

## Aplicação

O TI.Ajudo é uma aplicação front-end estática feita com HTML, CSS e JavaScript (ES modules). O Vite serve os arquivos durante o desenvolvimento e gera o build. Não há back-end.

## Páginas e módulos

| Arquivo | Função |
|---|---|
| `client/index.html` | Apresenta o projeto e as sete trilhas. |
| `client/assistente.html` | Exibe o questionário, o resultado e os controles de planilha. |
| `client/roadmap.html` | Exibe o roadmap indicado pelo parâmetro `trilha`. |
| `client/src/js/data/questions.js` | Perguntas, opções, níveis e tempo semanal. |
| `client/src/js/data/catalog.js` | Sete trilhas, etapas e links de estudo. |
| `client/src/js/data/Roadmap_data.js` | Etapas e tópicos dos roadmaps. |
| `client/src/js/engine/recommend.js` | Pontuação das trilhas e montagem do perfil. |
| `client/src/js/engine/roadmap_engine.js` | Regras de progresso e desbloqueio dos níveis. |
| `client/src/js/ui/` | Interface do questionário, resultado, planilha e roadmap. |

## Questionário e recomendações

O fluxo faz seis perguntas sobre nível informado, interesses, forma de trabalho, atividades preferidas, matemática e lógica, e tempo semanal disponível. As opções de interesse e preferência têm pesos associados às trilhas. `recommend.js` soma os pesos das respostas e ordena as sete trilhas.

O resultado mostra a trilha com maior pontuação, as três primeiras no ranking e um plano de etapas. O nível informado determina a etapa inicial sugerida; o tempo semanal é exibido no resultado. Não há teste técnico nem avaliação de conhecimento por assunto na versão atual.

## Dados no navegador

- As respostas do questionário ficam em memória durante a sessão e não são enviadas a um servidor.
- O progresso do roadmap é salvo em `localStorage`, separado por trilha.
- A importação de planilha substitui etapas do catálogo em memória; a alteração vale durante a sessão atual.

## Limites da versão atual

- As recomendações seguem pesos definidos nas opções do questionário; não usam IA generativa ou aprendizado de máquina.
- O resultado é uma sugestão de trilha, não uma avaliação profissional.
- Os links de estudo são externos e podem mudar.
- Não há conta de usuário, sincronização ou histórico remoto.

## Executar e compilar

Na raiz do projeto, use `npm install` para instalar as dependências, `npm run dev` para iniciar o Vite e `npm run build` para gerar a versão de produção em `dist/`.
