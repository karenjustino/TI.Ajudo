# Documento de Requisitos — TI.Ajudo

**Versão:** 1.5
**Data:** 16/11/2026

**Desenvolvedores:** Karen Gabrielle Justino, Gabriel Anastácio Pereira, Miguel Pereira

**Curso:** Ciência da Computação — Centro Universitário Braz Cubas

**Disciplina:** Estágio Supervisionado

---

## 1. Introdução

### 1.1 Objetivo

O objetivo do TI.Ajudo é orientar pessoas interessadas em Tecnologia da Informação por meio de um questionário conversacional. Os requisitos incluem identificar interesses, conhecimentos prévios, objetivos e preferências; na versão atual, o questionário coleta interesses, preferências, nível autodeclarado e tempo disponível.

Com base nas respostas, apresenta recomendações de áreas profissionais, uma avaliação introdutória dos conhecimentos identificados e sugestões iniciais de aprendizagem. O público prioritário é formado por pessoas que estão começando em TI ou que desejam direcionar sua trajetória na área.

### 1.2 Escopo

A aplicação possui uma página inicial, um questionário de perfil e páginas de roadmap. Na versão atual, o questionário recomenda uma trilha entre sete opções com base nas respostas. Testes técnicos e avaliação por assunto permanecem como requisitos planejados.

**Dentro do escopo:**

- Questionário em formato conversacional.
- Perguntas sobre conhecimentos, interesses, objetivos e preferências.
- Seleção condicional de testes introdutórios.
- Avaliação baseada em regras e respostas do usuário.
- Recomendação de até três áreas de TI.
- Plano inicial de estudos considerando os conhecimentos identificados.
- Catálogo de áreas e referências para plataformas de aprendizagem.
- Página inicial com acesso ao orientador.
- Organização modular de interface, dados e lógica.

**Fora do escopo:**

- **Venda de cursos próprios:** o sistema indica materiais e plataformas de terceiros.
- **Emissão de certificados oficiais:** o TI.Ajudo orienta, mas não certifica conhecimentos.
- **Fórum próprio de dúvidas:** o usuário pode ser direcionado a comunidades externas.
- **Avaliação profissional certificada:** os testes são introdutórios e não comprovam proficiência profissional.
- **IA generativa:** a versão atual utiliza regras programadas, sem geração de respostas por modelos de IA.
- **Persistência de histórico em servidor:** as respostas não são armazenadas remotamente na versão atual.

### 1.3 Público-alvo e personas

Os perfis abaixo são exemplos de público-alvo, não resultados de entrevistas ou pesquisa com usuários.

| Persona | Grupo | Perfil | Necessidade |
|---|---|---|---|
| Ana, 18 anos | Estudante | Saindo do ensino médio | Descobrir qual área ou curso escolher. |
| Rafael, 20 anos | Estudante | Já cursa TI, mas ainda não escolheu uma especialização | Comparar possibilidades de carreira. |
| Carlos, 35 anos | Transição de carreira | Profissional de outra área | Encontrar um caminho para entrar em TI. |
| Mariana, 24 anos | Curiosa/entusiasta | Sem formação na área | Descobrir conteúdos acessíveis para começar. |

O sistema deve utilizar linguagem simples e didática, sem pressupor conhecimentos prévios sobre programação, banco de dados, redes ou frameworks.

### 1.4 Glossário

| Termo | Significado |
|---|---|
| Área | Campo de atuação profissional dentro da Tecnologia da Informação. |
| Trilha | Sequência organizada de assuntos e conteúdos recomendados. |
| Tópico | Unidade de conhecimento que compõe uma trilha de estudos. |
| Fluência digital | Familiaridade com ferramentas e recursos básicos de tecnologia. |
| Soft skills | Competências comportamentais, como comunicação, adaptabilidade e resolução de problemas. |
| Teste técnico | Questões introdutórias utilizadas para estimar conhecimentos sobre determinado assunto. |
| Recomendação | Resultado gerado pelo sistema com base nas respostas e avaliações. |

---

## 2. Requisitos funcionais (RF)

Os requisitos abaixo descrevem as funcionalidades previstas e sua situação na versão 1.5.

| ID | Requisito | Prioridade | Status |
|---|---|---|---|
| RF01 | O sistema deve apresentar perguntas para identificar os interesses do usuário em diferentes áreas de TI. | Alta | Implementado |
| RF02 | O sistema deve identificar conhecimentos prévios e familiaridade com tecnologias e ferramentas. | Alta | Parcialmente implementado: pergunta o nível autodeclarado, sem verificar ferramentas específicas. |
| RF03 | O sistema deve apresentar perguntas técnicas de múltipla escolha conforme os conhecimentos e interesses declarados. | Alta | Não implementado |
| RF04 | O sistema deve considerar preferências comportamentais e formas de trabalho na análise do perfil. | Alta | Parcialmente implementado |
| RF05 | O sistema deve calcular e apresentar até três áreas compatíveis com o perfil do usuário. | Alta | Parcialmente implementado: apresenta as três trilhas mais bem classificadas. |
| RF06 | O sistema deve montar um plano inicial de estudos considerando os conhecimentos identificados. | Alta | Parcialmente implementado: usa o nível autodeclarado para sugerir a etapa inicial. |
| RF07 | O sistema deve permitir retornar a perguntas anteriores e alterar respostas. | Média | Implementado |
| RF08 | O sistema deve apresentar o progresso do questionário. | Média | Implementado |
| RF09 | O sistema deve permitir reiniciar o questionário e descartar as respostas da tentativa atual. | Baixa | Implementado |
| RF10 | O sistema deve disponibilizar informações sobre áreas de atuação e referências de aprendizagem. | Média | Parcialmente implementado |
| RF11 | A página inicial deve apresentar uma chamada para ação que permita iniciar o questionário. | Alta | Implementado |
| RF12 | O sistema deve organizar perguntas, dados, recomendações e interface em módulos independentes. | Média | Implementado |

---

## 3. Requisitos não funcionais (RNF)

| ID | Categoria | Requisito |
|---|---|---|
| RNF01 | Usabilidade | Utilizar linguagem clara e didática, evitando jargões técnicos sem explicação. |
| RNF02 | Usabilidade | Apresentar interface intuitiva e acolhedora para pessoas iniciantes. |
| RNF03 | Acessibilidade | Buscar contraste adequado entre textos e elementos visuais e oferecer navegação por teclado. |
| RNF04 | Responsividade | Permitir utilização em celulares, tablets e computadores. |
| RNF05 | Desempenho | Apresentar os resultados em tempo adequado após a conclusão do questionário. |
| RNF06 | Manutenibilidade | Organizar perguntas, áreas, recomendações e materiais em arquivos e módulos independentes. |
| RNF07 | Escalabilidade | Permitir inclusão de novas áreas, perguntas e conteúdos sem reescrever completamente o algoritmo. |
| RNF08 | Disponibilidade | Permitir publicação em plataforma de hospedagem com acesso por link público. |
| RNF09 | Compatibilidade | Buscar compatibilidade com versões atuais de Chrome, Firefox, Edge e Safari. |

---

## 4. Regras de negócio

| ID | Regra | Exemplo / observação |
|---|---|---|
| RN01 | As recomendações devem considerar interesses e conhecimentos identificados durante o questionário. | Interesse em dados e conhecimento de SQL podem contribuir para recomendações relacionadas a dados. |
| RN02 | O sistema deve considerar o nível identificado para orientar a sequência de aprendizagem. | Conteúdos introdutórios devem preceder assuntos mais complexos quando necessário. |
| RN03 | A recomendação das áreas deve considerar informações declaradas e resultados dos testes disponíveis. | Interesses e conhecimentos técnicos contribuem para identificar áreas compatíveis. |
| RN04 | Conhecimentos já demonstrados devem ser considerados na elaboração do plano. | Um assunto já dominado não precisa ser recomendado novamente como conteúdo básico. |
| RN05 | Os testes técnicos devem ser selecionados conforme as respostas e os interesses do usuário. | Um usuário interessado em programação e dados pode receber questões desses assuntos. |
| RN06 | O resultado deve respeitar a quantidade e a qualidade das informações disponíveis. | Sem teste disponível, o sistema não deve afirmar que um nível avançado foi comprovado. |
| RN07 | O nome do usuário deve ser opcional. | O questionário pode ser concluído sem cadastro ou identificação pessoal. |

---

## 5. Casos de uso resumidos

### UC01 — Responder ao questionário

- **Ator:** usuário interessado em tecnologia.
- **Fluxo principal:**
  1. O usuário acessa a página inicial.
  2. Seleciona a opção para iniciar o orientador.
  3. Responde às perguntas apresentadas pelo assistente.
  4. O sistema seleciona perguntas e testes conforme as respostas.
  5. O usuário revisa suas informações.
  6. O sistema apresenta a avaliação e as recomendações.
- **Fluxo alternativo:** o usuário retorna a perguntas anteriores e altera respostas.
- **Pós-condição:** o resultado é apresentado na tela.

### UC02 — Consultar recomendações

- **Ator:** usuário que concluiu o questionário.
- **Fluxo principal:**
  1. O sistema apresenta o nível geral, quando disponível.
  2. Exibe resultados por assunto.
  3. Apresenta até três áreas recomendadas.
  4. Mostra tecnologias relacionadas e um plano inicial de estudos.
  5. Disponibiliza referências de aprendizagem.
- **Pós-condição:** o usuário identifica possibilidades de atuação e próximos passos de aprendizagem.

### UC03 — Refazer o questionário

- **Ator:** usuário que já visualizou o resultado.
- **Fluxo principal:**
  1. O usuário seleciona a opção de reiniciar.
  2. O sistema descarta as respostas da tentativa atual.
  3. O questionário retorna à etapa inicial.
- **Pós-condição:** uma nova tentativa é iniciada sem as respostas anteriores.

### UC04 — Acessar informações sobre o projeto e as áreas

- **Ator:** usuário interessado em conhecer possibilidades profissionais.
- **Fluxo principal:**
  1. O usuário acessa a página inicial.
  2. Navega pelas seções informativas disponíveis.
  3. Consulta as possibilidades de aprendizagem apresentadas.
- **Pós-condição:** o usuário obtém informações introdutórias sobre o projeto e as áreas de TI.

---

## 6. Arquitetura e modelo de dados

### 6.1 Organização modular

A aplicação utiliza uma arquitetura modular no front-end, separando interface, dados e regras de recomendação.

| Arquivo | Responsabilidade |
|---|---|
| `client/index.html` | Página inicial. |
| `client/assistente.html` | Página do assistente virtual. |
| `src/js/main.js` | Inicialização dos recursos da página inicial. |
| `src/js/assistente.js` | Inicialização do assistente e importação dos estilos. |
| `src/js/ui/chatbot.js` | Estado da conversa, navegação e renderização da interface. |
| `src/js/data/questions.js` | Perguntas de perfil e testes introdutórios. |
| `src/js/data/catalog.js` | Áreas, plataformas e materiais de aprendizagem. |
| `src/js/engine/recommend.js` | Avaliação, classificação, recomendações e plano de estudos. |
| `src/styles/` | Estilos globais, componentes e páginas. |

### 6.2 Modelo de dados

| Entidade | Campos principais |
|---|---|
| Área | id, nome, descrição, tecnologias e categorias relacionadas. |
| Pergunta | id, categoria, texto, opções e identificador da resposta. |
| Opção | id, texto e informações utilizadas na avaliação. |
| Teste | assunto, perguntas, alternativas e respostas esperadas. |
| Resposta | identificador da pergunta e valor selecionado. |
| Curso/Material | título, plataforma, modalidade, nível, áreas relacionadas e endereço eletrônico. |
| Recomendação | área indicada, conhecimentos avaliados e informações utilizadas. |
| Plano de estudos | área, tópicos sugeridos e sequência de aprendizagem. |

### 6.3 Áreas previstas

O escopo considera as seguintes possibilidades de recomendação:

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

Na versão atual, o questionário recomenda entre sete trilhas: Desenvolvimento, Dados & Analytics, Cibersegurança, Redes & Infraestrutura, Gestão & Governança, Produto & Experiência e Cloud & DevOps.

### 6.4 Tecnologias e arquitetura

**Front-end:**
- HTML5.
- CSS3 modular.
- JavaScript moderno (ES Modules).
- Vite para desenvolvimento e build.

**Dados e lógica:**
- Estruturas locais em módulos JavaScript.
- Algoritmo local de avaliação e recomendação.
- Dados e regras carregados localmente, sem API ou back-end.

A versão atual não depende de banco de dados ou servidor próprio para executar o questionário.

---

## 7. Cronograma e entregáveis

| Sprint | Período | Foco |
|---|---|---|
| 1 | 17/09 a 26/09 | Tecnologias, requisitos, protótipos, perguntas e lógica das trilhas. |
| 2 | 27/09 a 17/10 | Front-end, questionário e algoritmo de recomendação. |
| 3 | 18/10 a 31/10 | Finalização, testes com usuários, correções e publicação. |
| 4 | 01/11 a 06/11 | Documentação, organização do GitHub e relatório de estágio. |

### Entregáveis

| Entregável | Situação |
|---|---|
| Documento de requisitos | Atualizado — versão 1.5 |
| Arquitetura e tecnologias | Documentadas |
| Instruções para execução local (`README.md`) | Concluído |
| Organização modular do código | Implementada |
| Repositório GitHub com commits semânticos | Em andamento |
| Testes e validações com usuários | Em andamento |
| Site publicado com link público | Pendente de confirmação |

---

## 8. Aditivo — Orientador conversacional

### 8.1 Fluxo implementado

A versão atual conduz o usuário por seis perguntas de perfil. O fluxo:

- pergunta o nível de conhecimento que a própria pessoa informa;
- coleta interesses, preferências de trabalho e de atividade, relação com matemática e lógica, e tempo disponível;
- permite voltar uma pergunta, reiniciar e informar o nome opcionalmente;
- apresenta as três trilhas mais bem classificadas e um plano para a primeira.

Não há testes técnicos, revisão de respostas nem resultados de proficiência por assunto na versão atual.

### 8.2 Avaliação e classificação

O módulo `recommend.js` soma os pesos associados às respostas e ordena as sete trilhas. O nível autodeclarado define a etapa inicial sugerida no plano; não é validado por prova. A quantidade de horas semanais é exibida como informação, mas não altera a pontuação.

Testes técnicos, classificação por assunto e combinação de autodeclaração com desempenho são requisitos futuros. Os critérios de pontuação deverão ser definidos antes de implementar essa avaliação.

### 8.3 Catálogo de aprendizagem

O catálogo atual reúne links para documentação, cursos e plataformas como MDN Web Docs, freeCodeCamp, Khan Academy, Cisco Networking Academy, Linux Journey, OWASP, Figma e AWS Skill Builder. Alguns links levam à página inicial ou a um catálogo, não a um curso específico.

### 8.4 Limitações conhecidas

- Os testes técnicos previstos são introdutórios e não devem ser tratados como certificação de proficiência.
- O algoritmo é baseado em regras, não em IA generativa.
- As recomendações dependem das perguntas, dos pesos e das informações cadastradas.
- O plano de estudos é uma orientação inicial.
- Os materiais são externos e podem sofrer alterações.
- As respostas permanecem na sessão atual e não são armazenadas em servidor.
- A aplicação não possui autenticação, cadastro ou histórico de avaliações na versão atual.

---

## 9. Evoluções futuras

- Ampliar o banco de perguntas e testes.
- Aprimorar a avaliação de competências comportamentais.
- Revisar os critérios e pesos de recomendação.
- Detalhar trilhas com pré-requisitos e materiais específicos.
- Integrar API ou back-end caso haja necessidade de persistência.
- Implementar histórico de avaliações com proteção adequada dos dados.
- Realizar testes de usabilidade e acessibilidade.
- Publicar a aplicação em plataforma de hospedagem com acesso público.

---

**Este documento reúne requisitos planejados e o status conhecido da versão 1.5 do TI.Ajudo.**
