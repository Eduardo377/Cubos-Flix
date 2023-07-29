# Cubos Flix ![Cubo Flix Logo](./public/assets/logo.svg)

<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>

## 💻 Sobre o projeto

Cubos Flix é uma aplicação web para visualização de filmes e séries, onde os usuários podem encontrar informações sobre diversos títulos, buscar por filmes específicos e conhecer o destaque do dia.

 <!-- Além disso, a aplicação possui suporte para tema claro e escuro, proporcionando uma experiência personalizada ao usuário. -->

## 🎯 Tabela de conteúdo

   * [Sobre o projeto](#-sobre-o-projeto)
   * [Demonstração](#-demonstração)
   * [Recursos](#-recursos)
   * [Implantação futuras](#-implantação-futuras)
   * [Pré-requisitos](#-pré-requisitos)
   * [Instalação](#-instalação)
   * [Executando](#-executando)
   * [Estrutura de Pastas](#-estrutura-de-pastas)
   * [Desenvolvedor](#-desenvolvedor)
   * [Linguagem](#-linguagem)
   * [Tecnologias](#-tecnologias)
   * [Ferramentas](#-ferramentas)
   * [Licença](#-licença)

## 🚀 Demonstração

Para uma demonstração ao vivo do Cubos Flix, acesse o seguinte link: [Cubos Flix - Demo](https://cubos.netlify.app/)

## 🕋 Recursos

- Visualização de filmes e séries: O usuário pode navegar pelos títulos disponíveis e visualizar informações como título, descrição e gêneros.
- Destaque do dia: O Cubos Flix destaca um filme ou série diferente a cada dia na página inicial, permitindo que os usuários descubram novos conteúdos diariamente.
- Busca por títulos específicos: Os usuários podem pesquisar filmes e séries específicos usando a barra de busca, facilitando a localização de conteúdos desejados.

## 🤞 Implantação futuras

- Modal com detalhes dos filmes: Ao clicar em um cartão de filme ou série na página inicial, um modal é aberto exibindo detalhes completos do título, incluindo sinopse, elenco e outras informações relevantes.
- Tema claro/escuro: A aplicação oferece suporte a um tema claro e escuro para atender às preferências do usuário, proporcionando uma experiência de uso agradável.

## 🤓 Pré-requisitos

Antes de começar, verifique se você tem os seguintes requisitos instalados em seu sistema:

- [Node.js](https://nodejs.org/en) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🧠 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/cubos-flix.git
cd cubos-flix
```

2. Instale as dependências do projeto:

```bash
npm install
# ou
yarn install
```

## 🙌 Executando

Para executar a aplicação localmente, utilize o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

Acesse a aplicação no seu navegador através do endereço: [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura de pastas

```
cubos-flix/
  ├── public/
  │   │
  │   └── assets/
  │       ├── close.svg
  │       ├── codepen.svg
  │       ├── dcodewars.svg
  │       ├── dark-mode.svg
  │       ├── discord.svg
  │       ├── email.svg
  │       ├── estrela.svg
  │       ├── favicon.ico
  │       ├── github.svg
  │       ├── gitlab.svg
  │       ├── light-mode.svg
  │       ├── linkedin.svg
  │       ├── logo.svg
  │       ├── play.svg
  │       ├── seta-direita-branca.svg
  │       ├── seta-direita-preta.svg
  │       ├── seta-esquerda-branca.svg
  │       ├── seta-esquerda-preta.svg
  │       ├── stackoverflow.svg
  │       └── whatsapp.svg
  ├── src/
      ├── components/
  │   │   ├── Footer.jsx
  │   │   ├── Header.jsx
  │   │   ├── HighlightMovie.jsx
  │   │   ├── Modal.jsx
  │   │   ├── MovieItem.jsx
  │   │   ├── MovieList.jsx
  │   │   ├── SearchBar.jsx
  │   │   └── ToggleTheme.svg
  │   ├── pages/
  │   │   ├── _app.jsx
  │   │   └── index.jsx
  │   ├── styles/
  │   │   ├── global.scss
  │   │   └── variables.scss
  ├── .eslintrc.json
  ├── .gitignore
  ├── LICENSA.txt
  ├── netlify.toml
  ├── next-env.d.ts
  ├── next.config.js
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.js
  ├── README.md
  ├── tailwind.config.js
  └── tsconfig.json
```
## 👨‍💻 Desenvolvedor

⚙️ **Eduardo Gomes** - [GitHub](https://github.com/Eduardo377) | [Linkedin](https://www.linkedin.com/in/eduardogomes377/)

☎️ **Contatos:**
- WhatsApp: [+55 21 9 8264-6297](https://api.whatsapp.com/send?phone=5521982646297)
- Discord: edu_gomes#8875 (https://discord.com/channels/#8875/)
- E-mail: eduardogomes377@gmail.com

📟 **Redes Sociais:**
- Perfil no GitLab: [@eduardo377](https://gitlab.com/eduardo377)
- Perfil no CodePen: [eduardo377](https://codepen.io/eduardo377)
- Perfil no Stack Overflow: [/users/259231/eduardo377](https://pt.stackoverflow.com/users/259231/eduardo377)
- Perfil no CodeWars: [/users/eduardo377](https://www.codewars.com/users/eduardo377)

## 💻 Linguagem

- **JavaScript**: Linguagem de programação utilizada para desenvolver a aplicação web.
  - [JavaScript](https://www.ecma-international.org/)
## 💿 Tecnologias

- **React**: Biblioteca JavaScript para a construção de interfaces de usuário.
  - [React.js](https://reactjs.org/)

- **Next.js**: Framework React para renderização do lado do servidor (SSR) e geração de páginas estáticas.
  - [Next.js](https://nextjs.org/)

- **SCSS**: Linguagem de estilo utilizada para estilizar a aplicação.
  - [SASS](https://sass-lang.com/)

- **Axios**: Biblioteca JavaScript para realizar requisições HTTP.
  - [Axios](https://axios-http.com/)

## 🛠 Ferramentas

- **VS Code**: Editor de código altamente configurável e repleto de recursos.
  - [VS Code](https://code.visualstudio.com/)

- **Git**: Sistema de controle de versões distribuído para rastrear alterações no código fonte.
  - [Git](https://git-scm.com/)

- **NPM**:
  - [npm](https://www.npmjs.com/)

## 🧾 Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---