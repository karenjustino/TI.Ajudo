# Documento de Requisitos — TI.Ajudo

**Versão:** 1.4 
**Data:** 02/11/2026

**Desenvolvedores:** Karen Gabrielle Justino, Gabriel Anastácio Pereira, Miguel Pereira

**Curso:** Ciência da Computação — Centro Universitário Braz Cubas

**Disciplina:** Estágio Supervisionado

---

## 1. Introdução

### 1.1 Objetivo

O TI.Ajudo é uma aplicação web de orientação vocacional e técnica em Tecnologia da Informação. Por meio de um questionário interativo e conversacional, o sistema identifica interesses, conhecimentos técnicos prévios, objetivos e preferências do usuário.

Com base nas respostas, apresenta recomendações de áreas profissionais, uma avaliação introdutória dos conhecimentos identificados e sugestões iniciais de aprendizagem. O público prioritário é formado por pessoas que estão começando em TI ou que desejam direcionar sua trajetória na área.

### 1.2 Escopo

A aplicação possui uma página inicial com informações sobre o projeto e acesso ao orientador, além de uma página dedicada ao assistente virtual.

O orientador conduz o usuário por perguntas de perfil e, conforme as respostas, pode selecionar testes introdutórios. Ao final, apresenta até três áreas recomendadas, resultados por assunto, tecnologias relacionadas e um plano inicial de estudos.

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

O público-alvo inclui estudantes, profissionais em transição de carreira e pessoas interessadas em conhecer a área de tecnologia.

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
| RF02 | O sistema deve identificar conhecimentos prévios e familiaridade com tecnologias e ferramentas. | Alta | Parcialmente implementado |
| RF03 | O sistema deve apresentar perguntas técnicas de múltipla escolha conforme os conhecimentos e interesses declarados. | Alta | Implementado |
| RF04 | O sistema deve considerar preferências comportamentais e formas de trabalho na análise do perfil. | Alta | Parcialmente implementado |
| RF05 | O sistema deve calcular e apresentar até três áreas compatíveis com o perfil do usuário. | Alta | Implementado |
| RF06 | O sistema deve montar um plano inicial de estudos considerando os conhecimentos identificados. | Alta | Implementado |
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

### 6.3 Áreas contempladas

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

### 6.4 Tecnologias e arquitetura

**Front-end:**
- HTML5.
- CSS3 modular.
- JavaScript moderno (ES Modules).
- Vite para desenvolvimento e build.

**Dados e lógica:**
- Estruturas locais em módulos JavaScript.
- Algoritmo local de avaliação e recomendação.
- Organização preparada para futuras integrações com API ou back-end.

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

A versão atual apresenta uma experiência conversacional, conduzindo o usuário por etapas de identificação de perfil e conhecimentos.

O fluxo contempla:

- Boas-vindas e apresentação do orientador.
- Perguntas sobre conhecimentos, interesses, objetivos e preferências.
- Respostas por opções clicáveis e múltipla seleção quando aplicável.
- Seleção condicional de testes introdutórios.
- Indicador de progresso.
- Possibilidade de retornar e alterar respostas.
- Revisão das informações antes da avaliação.
- Campo opcional para informar o nome.
- Apresentação de resultados por assunto.
- Recomendações de até três áreas.
- Sugestões de tecnologias e plano inicial de estudos.
- Opção de reiniciar o questionário.

Para usuários que estão começando do zero, o fluxo prioriza a identificação do perfil e não exige testes técnicos.

### 8.2 Avaliação e classificação

A avaliação utiliza regras previamente definidas para combinar informações declaradas pelo usuário e resultados dos testes disponíveis.

A regra documentada para assuntos com teste combina até 35% de participação da autodeclaração e 65% de participação do desempenho no teste.

| Pontuação | Classificação |
|---|---|
| Abaixo de 45 | Básico |
| De 45 a 79 | Intermediário |
| A partir de 80 | Avançado |

A classificação avançada depende de evidência obtida por teste. Sem teste disponível, o sistema não deve afirmar que o usuário possui nível avançado naquele assunto.

A média geral considera somente os assuntos efetivamente avaliados. Os resultados individuais por assunto devem ser considerados na interpretação do perfil.

Os pesos e limiares devem permanecer centralizados no módulo `recommend.js`. Alterações no algoritmo devem ser refletidas neste documento e no documento de arquitetura.

### 8.3 Catálogo de aprendizagem

O catálogo possui referências para plataformas com opções gratuitas, como Curso em Vídeo, Fundação Bradesco, Recode, Santander Open Academy e Eu Capacito, além de plataformas com opções pagas, como Udemy e Alura.

Os links direcionam para as plataformas ou seus catálogos de conteúdo, não necessariamente para um curso individual. Disponibilidade, preços e condições podem mudar.

### 8.4 Limitações conhecidas

- Os testes são introdutórios e não certificam proficiência.
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

**Documento atualizado para representar os requisitos, funcionalidades e limitações conhecidas da versão 1.5 do TI.Ajudo.**