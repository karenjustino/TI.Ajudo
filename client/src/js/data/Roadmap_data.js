/* data/roadmap_data.js — trilhas, níveis e checklists.
   Quando a API existir, troque ROADMAPS por um fetch com o mesmo formato. */

export const STAGES = ["Fundamentos", "Prática", "Especialização", "Carreira"];

export const ROADMAPS = [
  { slug: "dev", icon: "</>", title: "Desenvolvimento", desc: "Crie sistemas, sites e aplicações.", dots: 3, label: "Moderada", levels: [
    ["Lógica de programação", "Git e GitHub", "HTML e CSS básicos", "Uma linguagem (Python ou JavaScript)"],
    ["Consumir APIs REST", "Banco de dados com SQL", "Um framework (React, Django…)", "Primeiro projeto no portfólio"],
    ["Testes automatizados", "Arquitetura e padrões de projeto", "Autenticação e segurança web", "CI/CD básico"],
    ["Portfólio e GitHub caprichados", "Contribuir com open source", "Currículo e LinkedIn", "Simulação de entrevista técnica"]] },
  { slug: "dados", icon: "SQL", title: "Dados & Analytics", desc: "Transforme dados em informações úteis.", dots: 2, label: "Acessível", levels: [
    ["Excel e planilhas", "Estatística básica", "SQL: SELECT, JOIN e GROUP BY", "Python com pandas"],
    ["Limpeza e tratamento de dados", "Dashboard no Power BI", "Visualização de dados", "Projeto com dataset público"],
    ["Modelagem dimensional", "ETL e pipelines", "Machine learning básico", "Dados na nuvem"],
    ["Portfólio de análises", "Storytelling com dados", "Currículo e LinkedIn", "Entrevista de case"]] },
  { slug: "ciber", icon: "{ }", title: "Cibersegurança", desc: "Proteja sistemas, redes e dados.", dots: 4, label: "Exigente", levels: [
    ["Redes (TCP/IP, DNS, HTTP)", "Linux no terminal", "Tríade CIA", "Senhas, MFA e criptografia básica"],
    ["Laboratórios no TryHackMe", "Análise de logs", "OWASP Top 10", "Firewall e VPN"],
    ["Pentest básico", "SIEM e resposta a incidentes", "Forense digital", "Hardening de sistemas"],
    ["Certificação Security+", "Participar de CTFs", "LGPD e compliance", "Write-ups no portfólio"]] },
  { slug: "redes", icon: "IP", title: "Redes & Infraestrutura", desc: "Conecte e mantenha ambientes tecnológicos.", dots: 3, label: "Moderada", levels: [
    ["Modelo OSI e TCP/IP", "Endereçamento IP e sub-redes", "Hardware de rede", "Linux e Windows Server básico"],
    ["Laboratório no Packet Tracer", "Roteamento e VLANs", "DNS, DHCP e Wi-Fi", "Monitoramento (Zabbix)"],
    ["Virtualização (VMware, Proxmox)", "Automação com scripts", "Redes seguras", "Troubleshooting avançado"],
    ["Certificação CCNA", "Documentar projetos", "Vagas de suporte N2/N3", "Currículo e LinkedIn"]] },
  { slug: "gestao", icon: "GP", title: "Gestão & Governança", desc: "Organize tecnologia, riscos e processos.", dots: 2, label: "Acessível", levels: [
    ["Fundamentos de TI", "Introdução ao ITIL", "Scrum e métodos ágeis", "Comunicação e documentação"],
    ["Kanban e gestão de projetos", "Gestão de riscos", "Indicadores e métricas", "Jira ou Trello na prática"],
    ["Governança com COBIT", "LGPD para gestores", "Orçamento e contratos", "Liderança de equipes"],
    ["Certificação PSM ou PMP", "Mentorias", "Apresentar resultados", "Vagas de coordenação"]] },
  { slug: "ux", icon: "UX", title: "Produto & Experiência", desc: "Crie soluções pensando nas pessoas.", dots: 2, label: "Acessível", levels: [
    ["Princípios de UX", "Pesquisa com usuários", "Heurísticas de Nielsen", "Figma básico"],
    ["Wireframes e protótipos", "Testes de usabilidade", "Design system", "Acessibilidade (WCAG)"],
    ["UX Research aprofundada", "Métricas de produto", "Discovery contínuo", "Fundamentos de Product Management"],
    ["Portfólio com cases", "Pitch de projeto", "Networking", "Entrevista de design"]] },
  { slug: "cloud", icon: "☁", title: "Cloud & DevOps", desc: "Escale e automatize.", dots: 4, label: "Exigente", levels: [
    ["Linux e terminal", "Redes básicas", "Git", "Conceitos de nuvem"],
    ["Docker", "Conta free tier (AWS ou Azure)", "Scripts Bash", "Pipeline de CI"],
    ["Kubernetes", "Terraform (IaC)", "Observabilidade", "Segurança em nuvem"],
    ["Certificação cloud", "Projeto completo ponta a ponta", "Introdução a SRE", "Vagas e currículo"]] },
];