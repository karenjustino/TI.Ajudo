# Documento de Requisitos — TI.Ajudo

**Versão:** 1.3 · **Data:** 11/10/2026
 
**Desenvolvedores:** Karen Gabrielle Justino, Gabriel Anastácio Pereira, Miguel Pereira
 
**Curso:** Ciência da Computação — Centro Universitário Braz Cubas
 
**Disciplina:** Estágio Supervisionado
 
---

## 1. Introdução

### 1.1 Objetivo
O TI.Ajudo atua como um Orientador Vocacional e Técnico em TI. Por meio de um questionário interativo e dinâmico, ele mapeia os interesses, os conhecimentos técnicos prévios e as competências comportamentais de quem está começando na área e, com base nas respostas, recomenda as áreas mais adequadas e uma trilha de estudos personalizada.

### 1.2 Escopo
O TI.Ajudo é uma aplicação web que orienta iniciantes em TI por meio de um questionário. Ao final, exibe as 3 áreas de estudo mais compatíveis com o perfil e uma trilha do básico ao intermediário que respeita o nível atual da pessoa. O site também apresenta a listagem das 7 áreas disponíveis na página inicial.

**Dentro do escopo**
- Questionário em 4 categorias, com lógica condicional.
- Algoritmo de recomendação (Top 3 áreas e trilha personalizada).
- Página inicial com a listagem das trilhas e seus detalhes.
- Suporte a arquitetura modular com opção de integração de serviços de back-end para processamento de dados ou persistência leve, conforme a evolução do projeto.

**Fora do escopo** (e como o projeto lida com isso)
- **Venda de cursos próprios:** o site indica materiais de terceiros, preferencialmente gratuitos.
- **Emissão de certificados oficiais:** o site orienta, não certifica.
- **Fórum de dúvidas:** cada trilha pode apontar para comunidades já existentes.

### 1.3 Público-alvo e personas
O público são iniciantes em TI: estudantes em busca de direcionamento, profissionais em transição de carreira e curiosos que querem começar do zero. O sistema não deve pressupor que a pessoa saiba o que é uma API, um banco de dados relacional ou um framework.

| Persona | Grupo | Perfil | Necessidade |
|---|---|---|---|
| **Ana, 18 anos** | Estudante | Saindo do ensino médio | Saber qual curso ou especialização escolher |
| **Rafael, 20 anos** | Estudante | Já cursa TI, mas ainda não escolheu o foco | Comparar áreas para decidir qual carreira seguir |
| **Carlos, 35 anos** | Transição de carreira | Profissional de outra área | Entrar em TI sem saber por onde começar |
| **Mariana, 24 anos** | Curiosa/entusiasta | Sem formação na área | Descobrir conteúdos acessíveis para estudar do zero e no próprio ritmo |

### 1.4 Glossário
| Termo | Significado |
|---|---|
| **Área** | Uma das 7 vertentes de TI avaliadas (Desenvolvimento, Dados & Analytics, Cibersegurança, Redes & Infraestrutura, Gestão & Governança, Produto & Experiência, Cloud & DevOps). |
| **Trilha** | Sequência ordenada de tópicos de estudo, do básico ao intermediário. |
| **Tópico** | Unidade de estudo da trilha (ex.: Básico de Windows, Excel básico, SQL). |
| **Fluência digital** | Domínio básico de computador, documentos e planilhas. |
| **Soft skills** | Competências comportamentais (comunicação, liderança, adaptabilidade, resolução de problemas). |

---

## 2. Requisitos funcionais (RF)

| ID | Requisito | Prioridade | Status |
|---|---|---|---|
| RF01 | O sistema deve apresentar perguntas de áreas de interesse (dados, design, infraestrutura, programação etc.). | Alta | Pendente |
| RF02 | O sistema deve apresentar perguntas de conhecimentos gerais em tecnologia para medir a fluência digital básica (uso do Windows, familiaridade com documentação, automação de planilhas com vibe coding). | Alta | Pendente |
| RF03 | O sistema deve apresentar perguntas de conhecimentos específicos de múltipla escolha, conforme a área de interesse escolhida (lógica condicional), sobre temas como lógica de programação, HTML, CSS, SQL e redes. | Alta | Pendente |
| RF04 | O sistema deve apresentar situações-problema para avaliar soft skills (resolução de problemas, comunicação, liderança, adaptabilidade). | Alta | Pendente |
| RF05 | O sistema deve calcular e exibir as 3 áreas mais adequadas ao perfil. | Alta | Pendente |
| RF06 | O sistema deve montar uma trilha de estudos do básico ao intermediário, respeitando o nível atual da pessoa. | Alta | Pendente |
| RF07 | O sistema deve permitir voltar a uma pergunta anterior e alterar a resposta. | Média | Pendente |
| RF08 | O sistema deve mostrar o progresso do questionário. | Média | Pendente |
| RF09 | O sistema deve permitir refazer o questionário. | Baixa | Pendente |
| RF10 | O sistema deve permitir explorar, na página inicial, a listagem das 7 trilhas e abrir o detalhamento de cada uma. | Média | Pendente |
| RF11 | A página inicial deve ter uma chamada para ação que inicia o questionário ("Começar"), além do acesso à listagem de trilhas. | Alta | Pendente |
| RF12 | O sistema deve estruturar os dados de perguntas e trilhas de forma desacoplada, permitindo consumo via front-end estático ou API de back-end. | Média | Pendente |

---

## 3. Requisitos não funcionais (RNF)

| ID | Categoria | Requisito |
|---|---|---|
| RNF01 | Usabilidade | Linguagem clara e didática, sem jargões técnicos sem explicação. |
| RNF02 | Usabilidade | Interface intuitiva e acolhedora para iniciantes. |
| RNF03 | Acessibilidade | Contraste mínimo de 4,5:1 em textos e navegação completa por teclado. |
| RNF04 | Responsividade | Funcionar em celulares, tablets e computadores. |
| RNF05 | Desempenho | Exibir o resultado em até 2 segundos após a última resposta. |
| RNF06 | Manutenibilidade | Perguntas, áreas, tópicos e pesos devem ser facilmente modificáveis, suportando persistência em arquivos estruturados (ex.: JSON) ou via camada de serviços de back-end. |
| RNF07 | Escalabilidade | Adicionar uma nova área, pergunta ou tópico não deve exigir reescrita estrutural do algoritmo de recomendação. |
| RNF08 | Disponibilidade | Site publicado e acessível por link público e funcional (Vercel, Netlify, Render ou plataformas equivalentes). |
| RNF09 | Compatibilidade | Funcionar nas versões atuais de Chrome, Firefox, Edge e Safari. |

---
## 4. Regras de negócio

| ID | Regra | Exemplo / observação | Relacionado a |
|---|---|---|---|
| **RN01** | A trilha nunca pode incluir um tópico sem antes incluir seus pré-requisitos. | SQL só aparece depois de Excel intermediário. | RF06 |
| **RN02** | Se a fluência digital básica beirar o nível baixo, a trilha deve **obrigatoriamente começar pelo básico de Windows/ferramentas** antes de introduzir programação, planilhas avançadas ou bancos de dados. | Interesse forte em Análise de Dados + erros na fluência digital → Básico de Windows → Excel básico e intermediário → Introdução a Bancos de Dados/SQL. | RF02, RF06 |
| **RN03** | O Top 3 deve ponderar as preferências de interesse declaradas, o desempenho nas questões de conhecimentos específicos e as soft skills. | Pesos iniciais: 0,45 interesse, 0,35 conhecimento específico, 0,20 soft skills. | RF05 |
| **RN04** | A trilha parte do nível atual da pessoa: tópicos que ela já domina (acertos nas questões) não são repetidos como básicos. | Quem acerta as perguntas de planilha não recebe "Excel básico". | RF06 |
| **RN05** | As perguntas específicas só aparecem para as áreas escolhidas na etapa de interesse. | Quem demonstra interesse em dados e redes responde perguntas dessas duas áreas, não de todas as sete. | RF01, RF03 |

---

## 5. Casos de uso resumidos

**UC01 — Responder ao questionário**
- **Ator:** usuário iniciante
- **Fluxo principal:** (1) abre o site; (2) clica em "Começar"; (3) responde às 4 categorias, com perguntas específicas apenas das áreas de interesse; (4) vê o resultado.
- **Fluxo alternativo:** volta a uma pergunta anterior e altera a resposta (RF07).
- **Pós-condição:** o resultado (Top 3 e trilha) é exibido.

**UC02 — Explorar trilhas de estudo**
- **Ator:** usuário interessado
- **Fluxo principal:** (1) clica em "Ver as trilhas" ou navega até a seção de trilhas; (2) visualiza os cards das 7 áreas; (3) seleciona uma trilha para ver detalhes.
- **Pós-condição:** o detalhamento dos passos da trilha é apresentado.

**UC03 — Refazer o questionário**
- **Ator:** usuário que já viu o resultado
- **Fluxo principal:** (1) na tela de resultados, escolhe "Refazer"; (2) as respostas anteriores são descartadas; (3) o questionário recomeça.
- **Pós-condição:** novo questionário em andamento, sem dados da tentativa anterior.

---

## 6. Arquitetura e Modelo de Dados

**Modelo de dados** (Suportado por arquitetura modular e/ou serviços de back-end):

| Entidade | Campos principais |
|---|---|
| Área | id, nome, descrição, cor |
| Pergunta | id, categoria (interesse, geral, específica, comportamental), texto, área (se específica), opções |
| Opção | id, texto, pontos por área, nível de fluência (quando aplicável) |
| Tópico | id, nome, nível (básico/intermediário), pré-requisitos, material sugerido |
| Trilha | área, lista ordenada de tópicos |

**Tecnologias e Arquitetura:** 
- **Front-end:** HTML5, CSS3 modular, JavaScript moderno, Vite.
- **Camada de Dados / Lógica (Back-end opcional/integrado):** Estruturação modularizada em diretórios de dados (JSON) ou adaptável para uma API serverless/Node.js caso haja necessidade futura de persistência remota ou processamento centralizado.
---

## 7. Cronograma e entregáveis

| Sprint | Período | Foco |
|---|---|---|
| 1 | 17/09 a 26/09 | Tecnologias, requisitos, protótipos, banco de perguntas e lógica das trilhas |
| 2 | 27/09 a 17/10 | Front-end, lógica do questionário e algoritmo de recomendação |
| 3 | 18/10 a 31/10 | Finalização, testes com usuários, correções e **deploy** |
| 4 | 01/11 a 06/11 | Documentação do software, GitHub e relatório de estágio |

| Entregável | Situação |
|---|---|
| Requisitos funcionais e não funcionais | Concluído (Versão 1.3) |
| Modelagem de dados, arquitetura e tecnologias | Concluído |
| Instruções para rodar localmente (`README.md`) | Concluído |
| Repositório no GitHub com commits semânticos | Em andamento |
| Site publicado com link público | Pendente |