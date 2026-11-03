# TI.Ajudo — Arquitetura do Orientador Conversacional

**Versão:** 1.4
**Data:** 02/11/2026

## 1. Visão geral

O TI.Ajudo é uma aplicação web de orientação vocacional e técnica em Tecnologia da Informação. Seu orientador conversacional identifica interesses, conhecimentos prévios, objetivos e preferências do usuário para apresentar recomendações de áreas profissionais e sugestões iniciais de aprendizagem.

A versão atual utiliza HTML, CSS e JavaScript moderno, com organização modular e Vite como ferramenta de desenvolvimento e build.

A avaliação e as recomendações são realizadas localmente por regras previamente definidas. O sistema não utiliza inteligência artificial generativa nem exige um back-end para executar o questionário.

## 2. Estrutura do projeto

A organização relevante para a aplicação é:

```text
TI.Ajudo/
├── client/
│   ├── index.html
│   ├── assistente.html
│   └── src/
│       ├── js/
│       │   ├── main.js
│       │   ├── assistente.js
│       │   ├── data/
│       │   │   ├── catalog.js
│       │   │   └── questions.js
│       │   ├── engine/
│       │   │   └── recommend.js
│       │   └── ui/
│       │       └── chatbot.js
│       └── styles/
│           ├── main.css
│           ├── base.css
│           ├── layout.css
│           ├── tokens.css
│           ├── components/
│           │   ├── button.css
│           │   └── cards.css
│           └── pages/
│               ├── advisor.css
│               └── home.css
└── vite.config.js
```

## 3. Responsabilidade dos módulos

| Arquivo | Responsabilidade |
|---|---|
| `client/index.html` | Estrutura da página inicial e acesso ao orientador. |
| `client/assistente.html` | Estrutura da página dedicada ao assistente virtual. |
| `src/js/main.js` | Inicialização dos recursos da página inicial. |
| `src/js/assistente.js` | Importação dos estilos e inicialização do assistente. |
| `src/js/ui/chatbot.js` | Controle do estado da conversa, navegação entre perguntas e renderização das telas. |
| `src/js/data/questions.js` | Definição das perguntas de perfil e dos testes introdutórios. |
| `src/js/data/catalog.js` | Catálogo de áreas e referências de aprendizagem. |
| `src/js/engine/recommend.js` | Avaliação dos conhecimentos, classificação, recomendações e plano de estudos. |
| `src/styles/` | Estilos globais, componentes e estilos específicos das páginas. |

## 4. Fluxo do orientador

1. O usuário acessa a página inicial e seleciona a opção para iniciar a orientação.
2. O sistema abre a página `assistente.html`.
3. O assistente apresenta as boas-vindas e inicia as perguntas de perfil.
4. O usuário informa conhecimentos, interesses, preferências e objetivos por meio de opções interativas.
5. Conforme as respostas, o sistema seleciona os testes introdutórios pertinentes.
6. Usuários que estão começando do zero podem seguir um fluxo sem testes técnicos.
7. O usuário pode acompanhar o progresso, retornar a perguntas anteriores e alterar respostas.
8. Antes da avaliação, o sistema apresenta uma etapa de revisão e permite informar o nome, opcionalmente.
9. O mecanismo de recomendação processa as respostas e os resultados dos testes.
10. O assistente apresenta a avaliação por assunto, até três áreas recomendadas, tecnologias relacionadas e um plano inicial de estudos.
11. O usuário pode reiniciar o questionário.

## 5. Dados e avaliação

### 5.1 Dados utilizados

O orientador utiliza estruturas locais para representar:

- Perguntas de perfil, conhecimentos, interesses e objetivos.
- Opções de resposta e identificadores associados.
- Testes introdutórios organizados por assunto.
- Áreas profissionais e suas relações com interesses e conhecimentos.
- Plataformas e referências de aprendizagem.

As respostas ficam no estado da aplicação durante a sessão do questionário. Na versão atual, não há envio para servidor nem armazenamento persistente do histórico do usuário.

### 5.2 Avaliação dos conhecimentos

O módulo `recommend.js` combina as informações declaradas pelo usuário com os resultados dos testes disponíveis para estimar o nível de conhecimento por assunto.

A classificação documentada utiliza as seguintes faixas:

| Pontuação | Classificação |
|---|---|
| Abaixo de 45 | Básico |
| De 45 a 79 | Intermediário |
| A partir de 80 | Avançado |

A classificação avançada depende de evidência obtida por teste. Quando não existe teste para determinado assunto, o sistema não deve apresentar uma classificação avançada como se tivesse sido comprovada.

A média geral considera somente os assuntos efetivamente avaliados. Por isso, a leitura dos resultados individuais por assunto é mais informativa do que observar apenas a média.

**Regra de pontuação:** a regra documentada para assuntos com teste prevê participação de até 35% da autodeclaração e 65% do desempenho no teste. Os pesos e limiares efetivamente utilizados devem permanecer centralizados no módulo `recommend.js`. Qualquer alteração no código deve ser refletida neste documento e no documento de requisitos.

## 6. Áreas recomendadas

A versão atual contempla 19 possibilidades de recomendação:

1. Front-end.
2. Back-end.
3. Full Stack.
4. Desenvolvimento Mobile.
5. Inteligência Artificial.
6. Machine Learning.
7. Ciência de Dados.
8. Análise de Dados.
9. Engenharia de Dados.
10. Cibersegurança.
11. Redes.
12. Suporte Técnico.
13. Infraestrutura.
14. Cloud Computing.
15. DevOps.
16. Engenharia de Plataforma.
17. UX/UI.
18. Gestão de Projetos.
19. Qualidade e Testes de Software (QA).

O mecanismo seleciona até três áreas com base nas informações disponíveis. A recomendação é uma orientação inicial e não representa uma avaliação profissional ou certificação.

## 7. Plano de estudos e catálogo

O plano de estudos é elaborado a partir da área recomendada, do nível identificado e dos conhecimentos considerados já demonstrados.

A finalidade é sugerir uma sequência inicial de aprendizagem, evitando recomendar como conteúdo básico aquilo que o usuário já demonstrou conhecer.

O catálogo contém referências para plataformas de aprendizagem, incluindo:

- Curso em Vídeo.
- Fundação Bradesco.
- Recode.
- Santander Open Academy.
- Eu Capacito.
- Udemy.
- Alura.

Os links cadastrados direcionam para plataformas ou catálogos de conteúdo. Eles não garantem que cada recomendação corresponda a um curso individual específico, nem que o conteúdo, preço ou disponibilidade permaneçam inalterados.

## 8. Tecnologias

- **HTML5:** estrutura das páginas.
- **CSS3:** apresentação visual e estilos modulares.
- **JavaScript moderno (ES Modules):** fluxo do questionário, dados e regras de recomendação.
- **Vite:** servidor de desenvolvimento e ferramenta de build.

## 9. Limitações conhecidas

- O algoritmo é determinístico e baseado em regras; não utiliza IA generativa ou aprendizado de máquina.
- Os testes são introdutórios e não certificam proficiência.
- As recomendações dependem da cobertura e da qualidade das perguntas, respostas e regras cadastradas.
- O plano é uma orientação inicial, não substitui uma formação completa.
- O catálogo utiliza referências externas, sujeitas a alterações pelas respectivas plataformas.
- As respostas não são persistidas em servidor e não existe histórico de avaliações na versão atual.
- Não há autenticação ou cadastro obrigatório de usuários.

## 10. Possíveis evoluções

- Ampliar e revisar o banco de perguntas e testes.
- Melhorar a avaliação de competências comportamentais.
- Revisar os critérios e pesos do mecanismo de recomendação.
- Detalhar trilhas com pré-requisitos e materiais específicos.
- Realizar testes de usabilidade e acessibilidade.
- Integrar uma API ou back-end caso surja necessidade de persistência.
- Implementar histórico de avaliações com consentimento e proteção adequada dos dados.
- Publicar a aplicação em uma plataforma de hospedagem.

---

**Documento técnico da arquitetura do orientador conversacional do TI.Ajudo.**