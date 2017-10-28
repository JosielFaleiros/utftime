# Software das Atividades Complementares dos Cursos de Graduação da UTFPR.

# Desenvolvimento:

## API
A documentação da api para comunicação com o Back-End foi feita através do Swagger, ela é importante para que os desenvolvedores do Front-End consigam compreender bem como a API funciona. Ela pode ser encontra neste link:
[https://app.swaggerhub.com/apis/utftime/utftime/1.0.0](https://app.swaggerhub.com/apis/utftime/utftime/1.0.0)

## Divisão do projeto:

O projeto está dividido em duas partes devido as tecnologias utilizadas em cada uma permitir esta separação de responsabilidades, o front-end e o back-end, onde o front-end constitui da parte do projeto que interage com o usuário final através de interfaces visuais, e o back-end são partes de aplicação que fazem o seu  trabalho apenas no servidor.

## Back-End
Deve ser desenvolvido no branch backend[backend](https://github.com/JosielFaleiros/utftime/tree/backend), que por ser independente do front-end, NÃO deve ser feito merge deste com o branch gh-pages.
    (Este branch desenvolvido separadamente nos permite realizar seu deploy de forma independente do front-end)

# Para começar o projeto no back-end:

Estes comandos vão clonar, e executar o app.js com o node. (Node já deve estar instalado, mysql iniciado)
```
git clone https://github.com/JosielFaleiros/utftime.git
cd utftime

npm i -g sequelize-cli

sequelize db:drop
sequelize db:create
sequelize db:migrate


npm run nodemon
```
## Usando:
* [Node.js](https://nodejs.org/en/about/) 8.5.0 - Node.js® é uma máquina de execução JavaScript do lado do servidor
* [Vue.js](https://vuejs.org/v2/guide/) 2 - Vue (pronunciado como view) é um framework progressivo para desenvolver interfaces de usuário.
* [npm](https://www.npmjs.com/) - NPM O gerenciador de dependências usado.

## Versionamento
* [Git](https://git-scm.com/) -  Sistema de Controle de Versões Distribuído

### Fluxo de trabalho front-end:
Encontra-se no branch frontend agora.

### Fluxo de trabalho back-end:
-> Começa a trabalhar puxando o estado atual do repositório:
```
git pull origin backend

cd backend // se não estiver na pasta backend
npm install

sequelize db:migrate
```
-> trabalhar nas funcionalidades do sistema :D
-> Adicionar todas as alterações para o commit:
```
git add .
```
-> Realizar um commit, dando uma nome que descreva as alterações brevemente.
```
git commit -m "tal alteração/adição de funcionalidade foi realizada ;)"
git push origin backend
```


Comandos do git que utilizamos e mais alguns, em um workflow que pode ser adaptado e adotado:
![git workflow](http://csci221.artifice.cc/images/simple_git_daily_workflow.png)
