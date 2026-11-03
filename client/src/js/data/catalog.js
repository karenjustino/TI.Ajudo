export const areas = [
 {id:'frontend',name:'Desenvolvimento Front-end',group:'Desenvolvimento',desc:'Interfaces e experiências que as pessoas utilizam.',tags:['web','programming','design'],tech:['HTML','CSS','JavaScript','React'],learn:['Lógica de programação','HTML semântico','CSS responsivo','JavaScript','Git e GitHub','React e projetos de interface']},
 {id:'backend',name:'Desenvolvimento Back-end',group:'Desenvolvimento',desc:'Regras, APIs, integrações e processamento de aplicações.',tags:['programming','database'],tech:['Python','JavaScript','SQL','APIs'],learn:['Lógica de programação','Uma linguagem (Python ou JavaScript)','HTTP e APIs','SQL','Autenticação e segurança','Projeto de API']},
 {id:'fullstack',name:'Desenvolvimento Full Stack',group:'Desenvolvimento',desc:'Construção de aplicações do front-end ao back-end.',tags:['web','programming','database'],tech:['HTML','CSS','JavaScript','Node.js','SQL'],learn:['HTML e CSS','JavaScript','Front-end','Back-end e APIs','Banco de dados','Projeto full stack']},
 {id:'mobile',name:'Desenvolvimento Mobile',group:'Desenvolvimento',desc:'Aplicativos para celulares e dispositivos móveis.',tags:['programming'],tech:['JavaScript','React Native','Kotlin','Swift'],learn:['Lógica','Fundamentos de programação','JavaScript ou Kotlin','Interfaces mobile','Consumo de APIs','Publicação de aplicativo']},
 {id:'ai',name:'Inteligência Artificial',group:'Dados e IA',desc:'Soluções que executam tarefas associadas à inteligência humana.',tags:['programming','data'],tech:['Python','Estatística','IA'],learn:['Lógica de programação','Python','Matemática e estatística','Fundamentos de IA','Uso responsável de modelos','Projeto aplicado']},
 {id:'ml',name:'Machine Learning',group:'Dados e IA',desc:'Modelos que aprendem padrões a partir de dados.',tags:['programming','data'],tech:['Python','Pandas','Scikit-learn'],learn:['Python','Estatística','Álgebra linear básica','Preparação de dados','Modelos supervisionados','Avaliação de modelos']},
 {id:'data',name:'Ciência de Dados',group:'Dados e IA',desc:'Investigação de dados com estatística e programação.',tags:['data','database','programming'],tech:['Python','SQL','Pandas','Estatística'],learn:['Planilhas e dados','SQL','Python','Estatística','Visualização','Projeto de análise']},
 {id:'analytics',name:'Análise de Dados',group:'Dados e IA',desc:'Transforme dados em indicadores e decisões.',tags:['data','database'],tech:['Excel','SQL','Power BI'],learn:['Excel ou planilhas','Estatística básica','SQL','Power BI','Storytelling com dados','Dashboard de portfólio']},
 {id:'engineering-data',name:'Engenharia de Dados',group:'Dados e IA',desc:'Construa fluxos e plataformas para dados confiáveis.',tags:['data','database','programming'],tech:['SQL','Python','ETL','Cloud'],learn:['SQL','Python','Modelagem de dados','ETL e pipelines','Data warehouse','Projeto de pipeline']},
 {id:'cyber',name:'Cibersegurança',group:'Segurança',desc:'Reduza riscos e proteja sistemas e informações.',tags:['security','networks','tools'],tech:['Redes','Linux','Segurança'],learn:['Fundamentos de redes','Linux e terminal','Sistemas operacionais','Fundamentos de segurança','Laboratórios éticos','Monitoramento e resposta']},
 {id:'networks',name:'Redes de Computadores',group:'Infraestrutura',desc:'Conectividade, protocolos e comunicação entre dispositivos.',tags:['networks','tools'],tech:['TCP/IP','DNS','Roteamento','Linux'],learn:['Fundamentos de hardware','Modelos OSI e TCP/IP','Endereçamento IP','DNS e DHCP','Roteamento e switching','Laboratório de redes']},
 {id:'support',name:'Suporte Técnico',group:'Infraestrutura',desc:'Diagnóstico e resolução de problemas de tecnologia.',tags:['networks','tools'],tech:['Windows','Linux','Hardware','ITIL'],learn:['Hardware e periféricos','Windows e Linux','Redes básicas','Diagnóstico de incidentes','Atendimento e documentação','Laboratório de suporte']},
 {id:'infrastructure',name:'Infraestrutura de TI',group:'Infraestrutura',desc:'Mantenha ambientes, sistemas e serviços disponíveis.',tags:['networks','tools'],tech:['Linux','Windows Server','Virtualização'],learn:['Sistemas operacionais','Redes','Servidores','Virtualização','Monitoramento','Projeto de laboratório']},
 {id:'cloud',name:'Cloud Computing',group:'Cloud e Operações',desc:'Infraestrutura e serviços sob demanda na nuvem.',tags:['tools','networks','programming'],tech:['AWS','Azure','Linux','Redes'],learn:['Redes e sistemas','Linux','Conceitos de cloud','IAM e segurança','Serviços básicos AWS/Azure','Deploy de aplicação']},
 {id:'devops',name:'DevOps',group:'Cloud e Operações',desc:'Automatize entrega, infraestrutura e operação de software.',tags:['programming','tools','networks'],tech:['Git','Docker','CI/CD','Cloud'],learn:['Linux e terminal','Git','Scripts','Docker','CI/CD','Deploy automatizado']},
 {id:'platform',name:'Engenharia de Plataforma',group:'Cloud e Operações',desc:'Crie plataformas internas para acelerar times de desenvolvimento.',tags:['programming','tools','networks'],tech:['Cloud','Docker','Kubernetes','CI/CD'],learn:['Linux','Redes','Containers','CI/CD','Cloud','Kubernetes e observabilidade']},
 {id:'ux',name:'UX/UI Design',group:'Produto e Experiência',desc:'Projete interfaces úteis, acessíveis e agradáveis.',tags:['design'],tech:['Figma','Prototipação','Acessibilidade'],learn:['Princípios de design','Pesquisa com usuários','Arquitetura da informação','Wireframes','Figma e protótipos','Teste de usabilidade']},
 {id:'management',name:'Gestão de Projetos de TI',group:'Produto e Gestão',desc:'Organize entregas, pessoas, riscos e prioridades.',tags:['management'],tech:['Scrum','Kanban','Comunicação'],learn:['Fundamentos de projetos','Comunicação','Scrum e Kanban','Gestão de riscos','Ferramentas de planejamento','Projeto prático']},
 {id:'qa',name:'Qualidade e Testes de Software',group:'Desenvolvimento',desc:'Valide sistemas, encontre falhas e melhore a qualidade.',tags:['qa','programming'],tech:['Testes','Lógica','Automação'],learn:['Fundamentos de qualidade','Tipos de teste','Casos e cenários de teste','Relato de defeitos','Testes de API','Automação básica']}
];

// Links de demonstração intencionais: substituir por cursos verificados antes da publicação.

export const courses = [
  {
    name: 'Lógica de Programação',
    platform: 'Curso em Vídeo',
    level: 'Básico',
    category: 'Programação',
    mode: 'Gratuito',
    areas: ['frontend', 'backend', 'fullstack', 'mobile', 'ai', 'ml', 'data', 'engineering-data', 'qa'],
    url: 'https://www.cursoemvideo.com/cursos/',
    note: 'Fundamentos de algoritmos e raciocínio lógico.'
  },
  {
    name: 'Python Básico',
    platform: 'Fundação Bradesco',
    level: 'Básico',
    category: 'Programação',
    mode: 'Gratuito',
    areas: ['backend', 'ai', 'ml', 'data', 'analytics', 'engineering-data'],
    url: 'https://www.ev.org.br/cursos',
    note: 'Introdução à programação com Python.'
  },
  {
    name: 'Desenvolvimento Web',
    platform: 'Recode',
    level: 'Básico',
    category: 'Desenvolvimento',
    mode: 'Gratuito',
    areas: ['frontend', 'fullstack'],
    url: 'https://recode.org.br/',
    note: 'Conteúdos de HTML, CSS, JavaScript e desenvolvimento web.'
  },
  {
    name: 'Cursos de Tecnologia',
    platform: 'Santander Open Academy',
    level: 'Básico a avançado',
    category: 'Tecnologia',
    mode: 'Gratuito',
    areas: ['backend', 'ai', 'ml', 'data', 'analytics', 'cloud'],
    url: 'https://www.santanderopenacademy.com/pt_br/sites/courses/tech.html',
    note: 'Catálogo de cursos de tecnologia e dados.'
  },
  {
    name: 'Cursos de Tecnologia e Informática',
    platform: 'Fundação Bradesco',
    level: 'Básico a avançado',
    category: 'Tecnologia',
    mode: 'Gratuito',
    areas: ['support', 'networks', 'infrastructure', 'cyber', 'backend', 'data'],
    url: 'https://www.ev.org.br/cursos',
    note: 'Catálogo de cursos gratuitos de tecnologia e informática.'
  },
  {
    name: 'Cursos de Tecnologia',
    platform: 'Eu Capacito',
    level: 'Básico a avançado',
    category: 'Tecnologia',
    mode: 'Gratuito',
    areas: ['frontend', 'backend', 'ai', 'data', 'cyber', 'cloud', 'qa'],
    url: 'https://www.eucapacito.com.br/conteudos/',
    note: 'Conteúdos de capacitação profissional em tecnologia.'
  },
  {
    name: 'Cursos de Tecnologia',
    platform: 'Udemy',
    level: 'Básico a avançado',
    category: 'Tecnologia',
    mode: 'Pago',
    areas: ['frontend', 'backend', 'fullstack', 'mobile', 'ai', 'ml', 'data', 'analytics', 'engineering-data', 'cyber', 'networks', 'support', 'infrastructure', 'cloud', 'devops', 'platform', 'ux', 'management', 'qa'],
    url: 'https://www.udemy.com/',
    note: 'Marketplace com cursos de diferentes especialidades.'
  },
  {
    name: 'Formações em Tecnologia',
    platform: 'Alura',
    level: 'Básico a avançado',
    category: 'Tecnologia',
    mode: 'Pago',
    areas: ['frontend', 'backend', 'fullstack', 'mobile', 'ai', 'ml', 'data', 'analytics', 'engineering-data', 'cyber', 'networks', 'support', 'infrastructure', 'cloud', 'devops', 'platform', 'ux', 'management', 'qa'],
    url: 'https://www.alura.com.br/',
    note: 'Formações e cursos organizados por carreira e especialidade.'
  }
];

