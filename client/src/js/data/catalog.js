/* data/catalog.js — trilhas e conteúdos de estudo.
   Só dados: sem lógica. A planilha importada (ui/spreadsheet.js) pode substituir os passos de uma trilha. */

export const TRAILS = [
  {
    name: "Desenvolvimento",
    description: "Crie sistemas, sites e aplicações.",
    steps: [
      {
        title: "Lógica de programação",
        links: [
          { label: "Curso em Vídeo", url: "https://www.cursoemvideo.com" },
          { label: "freeCodeCamp", url: "https://www.freecodecamp.org" }
        ]
      },
      {
        title: "HTML, CSS e JavaScript",
        links: [
          { label: "MDN Web Docs", url: "https://developer.mozilla.org/pt-BR/" }
        ]
      },
      {
        title: "Git e GitHub",
        links: [
          { label: "GitHub Skills", url: "https://skills.github.com" }
        ]
      },
      {
        title: "Projeto prático e framework",
        links: [
          { label: "roadmap.sh", url: "https://roadmap.sh" }
        ]
      }
    ]
  },
  {
    name: "Dados & Analytics",
    description: "Transforme dados em informações úteis.",
    steps: [
      {
        title: "Planilhas e estatística básica",
        links: [
          { label: "Khan Academy", url: "https://pt.khanacademy.org" }
        ]
      },
      {
        title: "SQL",
        links: [
          { label: "SQLBolt", url: "https://sqlbolt.com" }
        ]
      },
      {
        title: "Python para dados",
        links: [
          { label: "Kaggle Learn", url: "https://www.kaggle.com/learn" }
        ]
      },
      {
        title: "Visualização de dados",
        links: [
          { label: "Microsoft Learn", url: "https://learn.microsoft.com/pt-br/training/" }
        ]
      }
    ]
  },
  {
    name: "Cibersegurança",
    description: "Proteja sistemas, redes e dados.",
    steps: [
      {
        title: "Fundamentos de redes",
        links: [
          { label: "Cisco Networking Academy", url: "https://www.netacad.com" }
        ]
      },
      {
        title: "Linux básico",
        links: [
          { label: "Linux Journey", url: "https://linuxjourney.com" }
        ]
      },
      {
        title: "Prática guiada",
        links: [
          { label: "TryHackMe", url: "https://tryhackme.com" }
        ]
      },
      {
        title: "Boas práticas de segurança",
        links: [
          { label: "OWASP", url: "https://owasp.org" }
        ]
      }
    ]
  },
  {
    name: "Redes & Infraestrutura",
    description: "Conecte e mantenha ambientes tecnológicos.",
    steps: [
      {
        title: "Modelo OSI e TCP/IP",
        links: [
          { label: "Cisco Networking Academy", url: "https://www.netacad.com" }
        ]
      },
      {
        title: "Endereçamento e roteamento",
        links: [
          { label: "Cisco Networking Academy", url: "https://www.netacad.com" }
        ]
      },
      {
        title: "Servidores Windows e Linux",
        links: [
          { label: "Microsoft Learn", url: "https://learn.microsoft.com/pt-br/training/" },
          { label: "Linux Journey", url: "https://linuxjourney.com" }
        ]
      },
      {
        title: "Monitoramento e suporte",
        links: [
          { label: "roadmap.sh", url: "https://roadmap.sh" }
        ]
      }
    ]
  },
  {
    name: "Gestão & Governança",
    description: "Organize tecnologia, riscos e processos.",
    steps: [
      {
        title: "Fundamentos de TI e negócios",
        links: [
          { label: "Coursera", url: "https://www.coursera.org" }
        ]
      },
      {
        title: "Métodos ágeis",
        links: [
          { label: "Guia do Scrum", url: "https://scrumguides.org" }
        ]
      },
      {
        title: "Gestão de projetos",
        links: [
          { label: "PMI", url: "https://www.pmi.org" }
        ]
      },
      {
        title: "Privacidade e LGPD",
        links: [
          { label: "ANPD", url: "https://www.gov.br/anpd" }
        ]
      }
    ]
  },
  {
    name: "Produto & Experiência",
    description: "Crie soluções pensando nas pessoas.",
    steps: [
      {
        title: "Fundamentos de UX",
        links: [
          { label: "Google UX Design", url: "https://www.coursera.org" }
        ]
      },
      {
        title: "Pesquisa com usuários",
        links: [
          { label: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/" }
        ]
      },
      {
        title: "Prototipação no Figma",
        links: [
          { label: "Figma", url: "https://www.figma.com/resource-library/" }
        ]
      },
      {
        title: "Portfólio",
        links: [
          { label: "Behance", url: "https://www.behance.net" }
        ]
      }
    ]
  },
  {
    name: "Cloud & DevOps",
    description: "Escale e automatize.",
    steps: [
      {
        title: "Linux e redes",
        links: [
          { label: "Linux Journey", url: "https://linuxjourney.com" }
        ]
      },
      {
        title: "Conceitos de nuvem",
        links: [
          { label: "AWS Skill Builder", url: "https://skillbuilder.aws" }
        ]
      },
      {
        title: "Containers com Docker",
        links: [
          { label: "Docker Docs", url: "https://docs.docker.com/get-started/" }
        ]
      },
      {
        title: "Automação e CI/CD",
        links: [
          { label: "GitHub Actions", url: "https://docs.github.com/pt/actions" }
        ]
      }
    ]
  }
];