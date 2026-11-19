# TI.Ajudo

Aplicação web de orientação para quem está começando em tecnologia. Um questionário de perfil sugere uma trilha de estudos entre sete opções.

## Executar localmente

Requer Node.js e npm. Na raiz do projeto:

```bash
npm install
npm run dev
```

Abra o endereço informado pelo Vite. As páginas disponíveis são:

- `client/index.html` — apresentação do projeto e trilhas.
- `client/assistente.html` — questionário, resultado e importação de conteúdos em planilha.
- `client/roadmap.html?trilha=dev` — roadmap da trilha selecionada. Os slugs disponíveis são `dev`, `dados`, `ciber`, `redes`, `gestao`, `ux` e `cloud`.

Para gerar a versão de produção:

```bash
npm run build
```

## Como funciona

O questionário considera interesses, preferências de trabalho, relação com matemática e lógica, nível informado e tempo disponível para estudo. Regras de pontuação ordenam as trilhas e mostram as três mais próximas das respostas. O plano exibido corresponde à trilha mais bem classificada.

As recomendações são heurísticas locais. A versão atual não aplica testes técnicos nem usa IA generativa. O progresso dos roadmaps é salvo no armazenamento local do navegador; as respostas do questionário não são enviadas a um servidor.

Na página do assistente, é possível baixar um modelo de planilha e importar conteúdos para substituir as etapas das trilhas durante a sessão.

## Estrutura

- `client/*.html`: páginas da aplicação.
- `client/src/js/data/`: perguntas e catálogos.
- `client/src/js/engine/`: pontuação e progresso dos roadmaps.
- `client/src/js/ui/`: questionário, resultados, planilhas e roadmaps.
- `client/src/styles/`: estilos globais, componentes e páginas.
- `docs/`: requisitos e arquitetura.

## Equipe

Projeto desenvolvido por estudantes de Ciência da Computação do Centro Universitário Braz Cubas:

- Gabriel Anastácio Pereira
- Karen Gabrielle Justino
- Miguel Pereira

## Licença

Licenciado sob a MIT License. Consulte [LICENSE](LICENSE).
