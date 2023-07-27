# Cubo Flix

![Cubo Flix Logo](./public/assets/logo.svg)

Cubo Flix é um projeto de aplicativo web de streaming de filmes desenvolvido com Next.js, React e Framer Motion. Ele oferece aos usuários a possibilidade de visualizar uma lista de filmes populares, pesquisar por filmes específicos, assistir a um destaque do dia e obter mais detalhes sobre cada filme selecionado. O projeto é uma demonstração de como criar um aplicativo de streaming de filmes usando tecnologias modernas de desenvolvimento web.

## Instruções de Instalação

Para executar o projeto localmente em sua máquina, siga as instruções abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina. Caso precise instalá-lo, você pode fazer o download do Node.js em [https://nodejs.org/](https://nodejs.org/) e seguir as instruções de instalação adequadas para o seu sistema operacional.

2. Clone o repositório do Cubo Flix para sua máquina local usando o seguinte comando Git:

```bash
git clone https://github.com/Eduardo377/cubo-flix.git
```

3. Navegue até o diretório do projeto:

```bash
cd cubo-flix
```

4. Instale as dependências do projeto executando o seguinte comando:

```bash
npm install
```

5. Após a conclusão da instalação das dependências, execute o servidor de desenvolvimento:

```bash
npm run dev
```

6. O servidor de desenvolvimento será iniciado e estará disponível em [http://localhost:3000](http://localhost:3000). Abra este link em seu navegador para visualizar o projeto Cubo Flix.

## Funcionalidades Principais

### Tema Claro/Escuro

O Cubo Flix oferece suporte a dois temas: claro e escuro. O tema padrão é o claro, mas os usuários podem alternar para o tema escuro clicando no botão de alternância de temas no cabeçalho.

### Pesquisa de Filmes

Os usuários podem pesquisar por filmes específicos utilizando a barra de pesquisa na página inicial. Ao digitar o nome do filme desejado e pressionar a tecla "Enter", a lista de filmes será filtrada de acordo com o termo de pesquisa.

### Lista de Filmes Populares

A página inicial exibe uma lista de filmes populares. Os filmes são organizados em uma lista horizontal com setas de navegação para rolar entre as páginas de filmes.

### Destaque do Dia

A seção "Destaque do Dia" na página inicial exibe um filme em destaque selecionado aleatoriamente. Os usuários podem clicar no botão de reprodução para assistir ao trailer do filme no YouTube.

### Detalhes do Filme

Ao clicar em um filme da lista de filmes populares ou do destaque do dia, uma janela modal é aberta com mais detalhes sobre o filme selecionado. O modal mostra o título, classificação, gêneros, data de lançamento e uma sinopse do filme.

## Estrutura do Projeto

A estrutura de pastas e arquivos do projeto Cubo Flix é organizada da seguinte forma:

```
cubo-flix/
  ├── .next/
  ├── node_modules/
  ├── public/
  │    ├── assets/
  │    │    ├── logo.svg
  │    │    ├── light-mode.svg
  │    │    ├── dark-mode.svg
  │    │    ├── seta-esquerda-preta.svg
  │    │    ├── seta-direita-preta.svg
  │    │    ├── seta-esquerda-branca.svg
  │    │    ├── seta-direita-branca.svg
  │    │    ├── estrela.svg
  │    │    ├── close.svg
  │    │    ├── play.svg
  ├── components/
  │    ├── Modal.js
  ├── pages/
  │    ├── index.js
  │    └── _app.js
  ├── styles/
  │    └── globals.css
  ├── package.json
  └── README.md
```

## Tecnologias Utilizadas

- Next.js: Framework de React para renderização do lado do servidor (SSR) e construção de aplicativos web modernos.
- React: Biblioteca JavaScript para construção de interfaces de usuário interativas e reativas.
- Framer Motion: Biblioteca para animações e transições suaves em elementos React.
- CSS: Estilos globais e estilização dos componentes usando CSS.

## Contribuição

Se você deseja contribuir com o projeto Cubo Flix, fique à vontade para enviar um pull request. Sua contribuição é bem-vinda!

## Licença

O projeto Cubo Flix é licenciado sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para obter mais detalhes.

## Contato

Se você

 tiver alguma dúvida ou quiser entrar em contato, sinta-se à vontade para enviar um e-mail para [eduardogomes377@gmail.com](mailto:eduardogomes377@gmail.com) ou visite o meu perfil no GitHub em [https://github.com/Eduardo377](https://github.com/Eduardo377).

---
