/* src/js/data/catalog.js — Base central de dados do TI.Ajudo
   Alimenta: Home, Trilha Dinâmica, Meu Plano, Biblioteca, Glossário e FAQ. */

export const CATALOG = {
  trilhas: {
    dev: {
      id: "dev",
      name: "Desenvolvimento",
      icon: "</>",
      difficulty: 3,
      difficultyText: "Moderada",
      description: "Crie sistemas, sites e aplicações.",
      diaNaVida: "Escreve e testa códigos para novas funcionalidades, corrige bugs reportados, cria interfaces visuais e integra APIs com bancos de dados.",
      habilidades: ["Lógica de programação", "HTML, CSS e JavaScript", "Git & GitHub", "Resolução de problemas"],
      comoComecar: "Foque em entender primeiro como uma página web é estruturada (HTML) e estilizada (CSS) antes de passar para a lógica com JavaScript.",
      ferramentas: ["VS Code", "Git", "GitHub", "DevTools do Navegador"],
      steps: [
        {
          id: "dev-step-1",
          title: "Lógica de programação",
          description: "Entenda conceitos fundamentais como variáveis, condicionais e laços de repetição.",
          links: [
            { id: "dev-link-1", label: "Curso em Vídeo: Lógica de Programação", url: "https://www.cursoemvideo.com", type: "Curso" },
            { id: "dev-link-2", label: "Buscar o livro Entendendo Algoritmos", url: "https://www.amazon.com.br/s?k=Entendendo+Algoritmos+Aditya+Bhargava", type: "Livro" },
            { id: "dev-link-3", label: "freeCodeCamp — Algoritmos em JavaScript", url: "https://www.freecodecamp.org", type: "Prática" }
          ]
        },
        {
          id: "dev-step-2",
          title: "HTML, CSS e JavaScript",
          description: "Construa a estrutura, a estética e a interatividade de páginas web.",
          links: [
            { id: "dev-link-4", label: "MDN Web Docs (Guia de HTML e CSS)", url: "https://developer.mozilla.org/pt-BR/", type: "Documentação" },
            { id: "dev-link-5", label: "Buscar curso de JavaScript para iniciantes", url: "https://www.youtube.com/results?search_query=curso+de+javascript+para+iniciantes", type: "Vídeo" }
          ]
        },
        {
          id: "dev-step-3",
          title: "Git e GitHub",
          description: "Aprenda a versionar seu código e salvar seus projetos em repositórios remotos.",
          links: [
            { id: "dev-link-6", label: "GitHub Skills — Primeiros Passos", url: "https://skills.github.com", type: "Tutorial" },
            { id: "dev-link-7", label: "Livro/Guia: Pro Git (Scott Chacon)", url: "https://git-scm.com/book/pt-br/v2", type: "Livro" }
          ]
        },
        {
          id: "dev-step-4",
          title: "Projeto prático e frameworks",
          description: "Crie um projeto real e explore ferramentas avançadas do mercado.",
          links: [
            { id: "dev-link-8", label: "roadmap.sh — Frontend & Backend", url: "https://roadmap.sh", type: "Guia" }
          ]
        }
      ]
    },

    dados: {
      id: "dados",
      name: "Dados & Analytics",
      icon: "SQL",
      difficulty: 2,
      difficultyText: "Acessível",
      description: "Transforme dados em informações úteis.",
      diaNaVida: "Extrai dados de tabelas com SQL, limpa planilhas organizando colunas, cria painéis gráficos interativos e responde a dúvidas de negócios com números.",
      habilidades: ["Raciocínio analítico", "Planilhas eletrônicas", "Consultas SQL", "Visualização de dados"],
      comoComecar: "Comece dominando a organização de dados em planilhas e aprenda a fazer perguntas simples a bancos de dados com SQL.",
      ferramentas: ["Excel / Google Sheets", "SQL", "Power BI", "Metabase"],
      steps: [
        {
          id: "dados-step-1",
          title: "Planilhas e estatística básica",
          description: "Aprenda a manipular tabelas, fórmulas e conceitos estatísticos fundamentais.",
          links: [
            { id: "dados-link-1", label: "Khan Academy — Estatística e Probabilidade", url: "https://pt.khanacademy.org", type: "Curso" },
            { id: "dados-link-2", label: "Buscar curso de Excel para iniciantes", url: "https://www.youtube.com/results?search_query=curso+de+excel+para+iniciantes", type: "Vídeo" }
          ]
        },
        {
          id: "dados-step-2",
          title: "SQL",
          description: "Domine a linguagem padrão para buscar e filtrar informações em bancos de dados.",
          links: [
            { id: "dados-link-3", label: "SQLBolt — Aprenda SQL interativamente", url: "https://sqlbolt.com", type: "Prática" }
          ]
        },
        {
          id: "dados-step-3",
          title: "Python para dados",
          description: "Automatize análises e processe grandes volumes de dados usando bibliotecas especializadas.",
          links: [
            { id: "dados-link-4", label: "Kaggle Learn — Introdução ao Python", url: "https://www.kaggle.com/learn", type: "Curso" }
          ]
        },
        {
          id: "dados-step-4",
          title: "Visualização de dados",
          description: "Transforme tabelas em gráficos e dashboards compreensíveis para tomada de decisão.",
          links: [
            { id: "dados-link-5", label: "Microsoft Learn — Power BI Fundamentals", url: "https://learn.microsoft.com/pt-br/training/", type: "Tutorial" }
          ]
        }
      ]
    },

    ciber: {
      id: "ciber",
      name: "Cibersegurança",
      icon: "{ }",
      difficulty: 4,
      difficultyText: "Exigente",
      description: "Proteja sistemas, redes e dados.",
      diaNaVida: "Monitora alertas de segurança, analisa registros de acesso em busca de comportamentos suspeitos, avalia brechas em sistemas e orienta boas práticas.",
      habilidades: ["Investigação e diagnóstico", "Fundamentos de redes", "Sistemas Linux", "Mentalidade preventiva"],
      comoComecar: "Antes de tentar entender invasões ou defesas complexas, entenda a fundo como computadores trocam dados em uma rede.",
      ferramentas: ["Linux Terminal", "Wireshark", "Nmap", "Burp Suite"],
      steps: [
        {
          id: "ciber-step-1",
          title: "Fundamentos de redes",
          description: "Compreenda como os dados trafegam pela internet e entre computadores.",
          links: [
            { id: "ciber-link-1", label: "Cisco Networking Academy — Introduction to Networks", url: "https://www.netacad.com", type: "Curso" }
          ]
        },
        {
          id: "ciber-step-2",
          title: "Linux básico",
          description: "Domine o sistema operacional padrão utilizado em servidores e ferramentas de segurança.",
          links: [
            { id: "ciber-link-2", label: "Linux Journey — Guia interativo", url: "https://linuxjourney.com", type: "Tutorial" }
          ]
        },
        {
          id: "ciber-step-3",
          title: "Prática guiada",
          description: "Resolva desafios práticos em ambientes simulados e seguros.",
          links: [
            { id: "ciber-link-3", label: "TryHackMe — Introdução à Cibersegurança", url: "https://tryhackme.com", type: "Prática" }
          ]
        },
        {
          id: "ciber-step-4",
          title: "Boas práticas de segurança",
          description: "Conheça os padrões globais de segurança e as principais vulnerabilidades web.",
          links: [
            { id: "ciber-link-4", label: "OWASP Top 10 — Documentação Oficial", url: "https://owasp.org", type: "Documentação" }
          ]
        }
      ]
    },

    redes: {
      id: "redes",
      name: "Redes & Infraestrutura",
      icon: "IP",
      difficulty: 3,
      difficultyText: "Moderada",
      description: "Conecte e mantenha ambientes tecnológicos.",
      diaNaVida: "Configura roteadores e switches, garante a estabilidade de conexões físicas e sem fio, gerencia permissões de usuários e resolve problemas de acesso.",
      habilidades: ["Modelos de rede (OSI e TCP/IP)", "Sistemas operacionais de servidor", "Hardware e cabeamento", "Resolução de incidentes"],
      comoComecar: "Estude o funcionamento de endereços IP, sub-redes e como os pacotes de dados chegam de um ponto a outro.",
      ferramentas: ["Terminal de comando", "Packet Tracer", "PuTTY", "Wireshark"],
      steps: [
        {
          id: "redes-step-1",
          title: "Modelo OSI e TCP/IP",
          description: "Entenda a arquitetura em camadas que faz a internet funcionar.",
          links: [
            { id: "redes-link-1", label: "Cisco NetAcad — Fundamentos de Redes", url: "https://www.netacad.com", type: "Curso" }
          ]
        },
        {
          id: "redes-step-2",
          title: "Endereçamento e roteamento",
          description: "Aprenda como endereços IP são atribuídos e como os roteadores direcionam o tráfego.",
          links: [
            { id: "redes-link-2", label: "Buscar explicação prática sobre sub-redes e IP", url: "https://www.youtube.com/results?search_query=sub-redes+e+enderecamento+IP+explicacao", type: "Vídeo" }
          ]
        },
        {
          id: "redes-step-3",
          title: "Servidores Windows e Linux",
          description: "Configure e gerencie sistemas operacionais voltados para ambientes corporativos.",
          links: [
            { id: "redes-link-3", label: "Microsoft Learn — Administração Windows Server", url: "https://learn.microsoft.com/pt-br/training/", type: "Tutorial" }
          ]
        },
        {
          id: "redes-step-4",
          title: "Monitoramento e suporte",
          description: "Acompanhe a saúde dos ativos de rede e previna quedas de serviço.",
          links: [
            { id: "redes-link-4", label: "roadmap.sh — DevOps & SysAdmin", url: "https://roadmap.sh", type: "Guia" }
          ]
        }
      ]
    },

    gestao: {
      id: "gestao",
      name: "Gestão & Governança",
      icon: "GP",
      difficulty: 2,
      difficultyText: "Acessível",
      description: "Organize tecnologia, riscos e processos.",
      diaNaVida: "Mapeia processos, facilita reuniões da equipe, acompanha prazos e metas e organiza tarefas. Em algumas funções, também apoia o acompanhamento de requisitos de privacidade, como a LGPD.",
      habilidades: ["Comunicação clara", "Metodologias Ágeis", "Organização e planejamento", "Noções de compliance e privacidade"],
      comoComecar: "Estude o Manifesto Ágil e entenda como métodos como Scrum e Kanban dividem grandes projetos em entregas menores.",
      ferramentas: ["Trello", "Jira", "Notion", "Miro"],
      steps: [
        {
          id: "gestao-step-1",
          title: "Fundamentos de TI e negócios",
          description: "Compreenda como a tecnologia apoia os objetivos operacionais de uma empresa.",
          links: [
            { id: "gestao-link-1", label: "Coursera — Introdução à Gestão de Projetos de TI", url: "https://www.coursera.org", type: "Curso" }
          ]
        },
        {
          id: "gestao-step-2",
          title: "Métodos ágeis",
          description: "Aprenda a organizar o trabalho em ciclos curtos e colaborativos com Scrum e Kanban.",
          links: [
            { id: "gestao-link-2", label: "Guia Oficial do Scrum (Scrum Guide)", url: "https://scrumguides.org", type: "Documentação" }
          ]
        },
        {
          id: "gestao-step-3",
          title: "Gestão de projetos",
          description: "Conheça boas práticas de cronograma, custos, riscos e gestão de partes interessadas.",
          links: [
            { id: "gestao-link-3", label: "Buscar o livro Gestão de Projetos, de Rui Torcato", url: "https://www.amazon.com.br/s?k=Gest%C3%A3o+de+Projetos+Rui+Torcato", type: "Livro" }
          ]
        },
        {
          id: "gestao-step-4",
          title: "Privacidade e LGPD",
          description: "Entenda os princípios de proteção de dados pessoais exigidos por lei.",
          links: [
            { id: "gestao-link-4", label: "ANPD — Guia Orientativo da LGPD", url: "https://www.gov.br/anpd", type: "Documentação" }
          ]
        }
      ]
    },

    ux: {
      id: "ux",
      name: "Produto & Experiência",
      icon: "UX",
      difficulty: 2,
      difficultyText: "Acessível",
      description: "Crie soluções pensando nas pessoas.",
      diaNaVida: "Entrevista usuários reais para entender dificuldades, desenha rascunhos de telas no computador, testa protótipos e alinha requisitos com os desenvolvedores.",
      habilidades: ["Empatia", "Design de interfaces (UI)", "Arquitetura de informação", "Pesquisa com usuários"],
      comoComecar: "Entenda a diferença entre o que o produto faz (usabilidade) e como ele se parece (estética), treinando o olhar crítico em sites do dia a dia.",
      ferramentas: ["Figma", "FigJam", "Balsamiq", "Paper & Pencil"],
      steps: [
        {
          id: "ux-step-1",
          title: "Fundamentos de UX",
          description: "Aprenda os princípios básicos sobre como tornar produtos digitais simples e intuitivos.",
          links: [
            { id: "ux-link-1", label: "Google UX Design Professional Certificate", url: "https://www.coursera.org", type: "Curso" },
            { id: "ux-link-2", label: "Buscar o livro O Design do Dia a Dia", url: "https://www.amazon.com.br/s?k=O+Design+do+Dia+a+Dia+Don+Norman", type: "Livro" }
          ]
        },
        {
          id: "ux-step-2",
          title: "Pesquisa com usuários",
          description: "Descubra técnicas para ouvir pessoas e mapear problemas reais antes de desenhar telas.",
          links: [
            { id: "ux-link-3", label: "Nielsen Norman Group — Artigos de Usabilidade", url: "https://www.nngroup.com/articles/", type: "Artigo" }
          ]
        },
        {
          id: "ux-step-3",
          title: "Prototipação no Figma",
          description: "Crie modelos interativos das telas para testar o fluxo de navegação.",
          links: [
            { id: "ux-link-4", label: "Figma Resource Library — Tutoriais", url: "https://www.figma.com/resource-library/", type: "Tutorial" }
          ]
        },
        {
          id: "ux-step-4",
          title: "Portfólio",
          description: "Documente seus estudos e processos de design para apresentar no mercado.",
          links: [
            { id: "ux-link-5", label: "Behance — Inspiração de Portfólios de UX", url: "https://www.behance.net", type: "Plataforma" }
          ]
        }
      ]
    },

    cloud: {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: "☁",
      difficulty: 4,
      difficultyText: "Exigente",
      description: "Escale e automatize.",
      diaNaVida: "Automatiza a publicação de novos códigos em produção, monitora servidores em nuvem, previne quedas do sistema e garante atualizações sem interrupção.",
      habilidades: ["Sistemas Linux", "Serviços em nuvem (AWS/Azure)", "Containers (Docker)", "Automação e scripts"],
      comoComecar: "Domine o uso do terminal de comando Linux e entenda a diferença entre servidores físicos e máquinas virtuais na nuvem.",
      ferramentas: ["Docker", "AWS / Azure", "GitHub Actions", "Terminal Linux"],
      steps: [
        {
          id: "cloud-step-1",
          title: "Linux e redes",
          description: "Construa a base necessária em sistemas operacionais e protocolos de comunicação.",
          links: [
            { id: "cloud-link-1", label: "Linux Journey — Guia de Comandos", url: "https://linuxjourney.com", type: "Tutorial" }
          ]
        },
        {
          id: "cloud-step-2",
          title: "Conceitos de nuvem",
          description: "Compreenda serviços sob demanda, máquinas virtuais e armazenamento remoto.",
          links: [
            { id: "cloud-link-2", label: "AWS Skill Builder — Cloud Practitioner", url: "https://skillbuilder.aws", type: "Curso" }
          ]
        },
        {
          id: "cloud-step-3",
          title: "Containers com Docker",
          description: "Pacoteie aplicações e suas dependências para rodar em qualquer ambiente.",
          links: [
            { id: "cloud-link-3", label: "Docker Docs — Primeiros Passos", url: "https://docs.docker.com/get-started/", type: "Documentação" }
          ]
        },
        {
          id: "cloud-step-4",
          title: "Automação e CI/CD",
          description: "Crie fluxos automáticos de testes e implantação de software.",
          links: [
            { id: "cloud-link-4", label: "GitHub Actions — Documentação Oficial", url: "https://docs.github.com/pt/actions", type: "Documentação" }
          ]
        }
      ]
    }
  },

  glossario: [
    { termo: "API", definicao: "Pontes de comunicação que permitem que dois sistemas ou softwares conversem entre si." },
    { termo: "Banco de Dados", definicao: "Sistema responsável por guardar, organizar e permitir consultas a informações digitais de forma segura." },
    { termo: "Nuvem (Cloud)", definicao: "Servidores acessados via internet para guardar dados ou rodar sistemas sem precisar de equipamentos físicos locais." },
    { termo: "Frontend", definicao: "A parte visual e interativa de um site ou aplicativo com a qual a pessoa usuária mexe diretamente." },
    { termo: "Backend", definicao: "A estrutura interna (bastidores) que processa regras de negócio, segurança e salvamento de dados." },
    { termo: "Git", definicao: "Ferramenta que registra o histórico de alterações no código para evitar perdas e facilitar o trabalho em equipe." },
    { termo: "SQL", definicao: "Linguagem padrão para fazer pesquisas, filtros e relatórios em bancos de dados relacionais." },
    { termo: "UX / UI", definicao: "UX trata da experiência e facilidade de uso de um produto; UI cuida da parte visual (cores, botões e layout)." },
    { termo: "Container (Docker)", definicao: "Ambiente isolado e padronizado que empacota um sistema com tudo o que ele precisa para rodar em qualquer computador." },
    { termo: "Scrum / Kanban", definicao: "Métodos de trabalho ágeis usados por equipes de TI para organizar entregas em tarefas menores e frequentes." }
  ],

  faq: [
    {
      pergunta: "Preciso saber inglês para começar?",
      resposta: "Não. É possível começar com materiais em português. Com o tempo, aprender termos técnicos em inglês ajuda a consultar documentações e ampliar as opções de estudo."
    },
    {
      pergunta: "Preciso ser muito bom em matemática?",
      resposta: "Depende da área. Desenvolvimento web e gestão costumam exigir matemática básica; análise de dados e algumas especialidades podem exigir mais. Raciocínio lógico também é útil."
    },
    {
      pergunta: "Sou velho demais para mudar de área?",
      resposta: "Não há uma idade limite para estudar TI. Experiências anteriores podem ser aproveitadas, mas a transição também exige tempo de estudo e prática."
    },
    {
      pergunta: "Preciso de um computador avançado?",
      resposta: "Não. Para estudar os fundamentos de qualquer uma das 7 trilhas, um computador simples capaz de rodar um navegador moderno e ter acesso à internet é suficiente."
    },
    {
      pergunta: "Vale a pena fazer faculdade ou é melhor estudar por conta própria?",
      resposta: "Depende dos seus objetivos e condições. A faculdade oferece formação estruturada e pode facilitar o acesso a estágios; estudar por conta própria permite montar um percurso flexível. Também é possível combinar os dois."
    },
    {
      pergunta: "Qual a diferença entre Bacharelado e Tecnólogo em TI?",
      resposta: "O Bacharelado (4 a 5 anos) aprofunda conceitos teóricos e algoritmos complexos. O Tecnólogo (2 a 3 anos) é mais curto e focado nas demandas práticas imediatas do mercado."
    },
    {
      pergunta: "Consigo estágio estudando EAD ou presencial?",
      resposta: "Em geral, sim. Os requisitos variam conforme a vaga e a instituição de ensino; confira as regras do estágio e os critérios definidos pela empresa."
    },
    {
      pergunta: "O mercado de TI está muito saturado para quem está começando?",
      resposta: "Há concorrência nas vagas de entrada, e os requisitos mudam conforme a área e a região. Projetos práticos ajudam a demonstrar o que você sabe fazer, mas não garantem contratação."
    },
    {
      pergunta: "Como comprovar conhecimento se ainda não tenho experiência profissional?",
      resposta: "Apresente projetos pessoais, voluntários ou acadêmicos. Um repositório, relatório ou protótipo pode mostrar como você aplicou o que estudou; descreva também suas decisões e contribuições."
    },
    {
      pergunta: "Por que a curva de aprendizado parece tão difícil no começo?",
      resposta: "É comum encontrar conceitos e ferramentas novos ao mesmo tempo. Divida o estudo em etapas, pratique com exercícios pequenos e retome os assuntos que ainda não ficaram claros."
    }
  ]
};

export const TRAILS = Object.values(CATALOG.trilhas);
