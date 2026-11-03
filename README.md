# TI.Ajudo

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="Licença MIT">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow" alt="JavaScript">
  <img src="https://img.shields.io/badge/Vite-Development-646CFF" alt="Vite">
  <img src="https://img.shields.io/badge/Status-Em%20desenvolvimento-blue" alt="Status do projeto">
</p>

<p align="center">
  <strong>Uma orientação inteligente para descobrir caminhos na Tecnologia da Informação.</strong>
</p>

## Sobre o projeto

O **TI.Ajudo** é uma aplicação web desenvolvida para auxiliar pessoas interessadas em ingressar ou evoluir profissionalmente na área de Tecnologia da Informação.

Por meio de um chatbot interativo, o sistema coleta informações sobre interesses, conhecimentos e objetivos do usuário. A partir das respostas, realiza uma avaliação de perfil e apresenta recomendações de áreas de atuação, sugestões de estudo e indicações de cursos.

O projeto busca tornar a orientação profissional em TI mais acessível, ajudando cada pessoa a identificar possibilidades de desenvolvimento e aprendizagem.

## Funcionalidades

- Questionário interativo para identificação do perfil do usuário.
- Avaliação de conhecimentos por meio de perguntas técnicas.
- Identificação de níveis de conhecimento.
- Recomendação de áreas profissionais em Tecnologia da Informação.
- Sugestão de planos de estudo.
- Indicação de cursos e plataformas de aprendizagem.
- Apresentação dos resultados de acordo com as respostas fornecidas.

## Tecnologias utilizadas

| Tecnologia | Descrição |
|---|---|
| HTML5 | Estrutura das páginas. |
| CSS3 | Estilização e responsividade. |
| JavaScript | Lógica e interatividade da aplicação. |
| Node.js | Ambiente de execução utilizado nas ferramentas de desenvolvimento. |
| npm | Gerenciamento de pacotes e dependências. |
| Vite | Servidor de desenvolvimento e ferramenta de build. |

## Ferramentas necessárias

Para executar o projeto localmente, você precisará de:

- [Visual Studio Code](https://code.visualstudio.com/) — editor de código.
- [Node.js](https://nodejs.org/) — ambiente necessário para executar o Vite.
- npm — gerenciador de pacotes instalado junto com o Node.js.
- [Git](https://git-scm.com/) — controle de versão.
- [GitHub](https://github.com/) — hospedagem do repositório.

## Como executar o projeto

**1. Clone o repositório**

```bash
git clone https://github.com/SEU-USUARIO/TI.Ajudo.git
```

**2. Acesse a pasta do projeto**

```bash
cd TI.Ajudo
```

**3. Instale as dependências**

```bash
npm install
```

Esse comando instala as dependências definidas no `package.json` e cria a pasta `node_modules`, onde ficam armazenados os pacotes necessários ao projeto.

**4. Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

**5. Acesse a aplicação**

Abra no navegador o endereço apresentado pelo Vite, normalmente:

```text
http://localhost:5173
```

Para acessar diretamente o assistente:

```text
http://localhost:5173/assistente.html
```

## Estrutura do projeto

```text
TI.Ajudo/
│
├── client/
│   ├── index.html
│   ├── assistente.html
│   │
│   └── src/
│       ├── js/
│       │   ├── data/
│       │   ├── engine/
│       │   ├── ui/
│       │   ├── assistente.js
│       │   └── main.js
│       │
│       └── styles/
│           ├── components/
│           ├── pages/
│           ├── base.css
│           ├── layout.css
│           ├── main.css
│           └── tokens.css
│
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
└── vite.config.js
```

**Organização dos diretórios:**

- `data`: perguntas, informações e catálogo de cursos.
- `engine`: lógica de avaliação e recomendação.
- `ui`: interface e componentes do chatbot.
- `styles`: arquivos de estilização da aplicação.

## Dependências

As dependências do projeto são gerenciadas pelo npm e registradas nos arquivos `package.json` e `package-lock.json`.

A pasta `node_modules` é criada automaticamente durante a instalação e não precisa ser enviada ao repositório. O mesmo vale para a pasta `dist`, gerada durante o processo de build.

## Equipe

Desenvolvido por estudantes do curso de **Ciência da Computação** do Centro Universitário Braz Cubas.

- Gabriel Anastácio Pereira
- Karen Gabrielle Justino
- Miguel Pereira

## Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

---

<p align="center">
  Desenvolvido com dedicação para ajudar pessoas a descobrirem seu caminho na Tecnologia da Informação.
</p>