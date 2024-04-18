# Pokedex React

O Pokedéx React é uma plataforma onde você pode procurar por pokemons, visualizar os elementos e as evoluções e também salvar seus pokemons preferidos.

A consulta é através da api https://pokeapi.co.

Foi elaborado junto ao projeto [Pokedex Server](https://github.com/thiag-o/pokedex-server) que gerencia a parte de cadastro e favoritos do usuário.

<img src=".github/pokedex-react.png" alt="pokedex react"/>

Para visualizar os pokemons clique aqui: [Pokedex React](https://pokedex-react-tau.vercel.app/)

<h6>** O projeto publicado está sem as funcionalidades de usuário e cadastro, pois a API não está publicada **</h6>

### Features

- [x] Listagem e filtro de pokemons
- [x] Criação de conta de usuário
- [x] Salvar e remover pokemons dos favoritos (precisa estar logado)

### Pokedex API

A Api do projeto está disponível no repositório https://github.com/thiag-o/pokedex-server

## Instalação

<table>
    <tr>
        <th>Dependência</th>
        <th>Versão</th>
    </tr>
    <tr>
        <td>Node</td>
        <td>14.17.0</td>
    </tr>
    <tr>
        <td>Yarn</td>
        <td><a href="https://classic.yarnpkg.com/lang/en/docs/install" target="_blank">Yarn</a></td>
    </tr>
</table>

1. Faça um clone do projeto em sua máquina: `git clone https://github.com/thiag-o/paraiso-aframe.git`
2. Abra o diretório raíz do projeto `cd pokedex-react`
3. Crie um arquivo `.env` na raíz e adicione o valor para a variável que irá linkar a API conforme o exemplo: `API_URL=http://localhost:3333`
4. Rode o comando `yarn` para instalar as dependências
5. Rode o comando `yarn build` para efetuar a build
6. Agora para iniciar o projeto é só rodar `yarn preview` e clicar aqui: [http://localhost:4173](http://localhost:4173)

## Tecnologias

[![My Skills](https://skillicons.dev/icons?i=html,css,ts)](https://skillicons.dev)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
