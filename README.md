# Dinnerdash

## Passo a passo

O setup inicial é todo descrito na aba de [instalação](https://docs.adonisjs.com/guides/installation) no site do Adonis.

Depois dele, percebi que não havia testes. Mas encontrei um [artigo](https://docs.adonisjs.com/cookbooks/testing-adonisjs-apps#document) no site mostrando como configurar os testes. Ele desencoraja o uso do [Jest](https://jestjs.io), pois ele tem muitas funcionalidades inúteis para testes de backend. Então vamos usar o [Japa](https://www.npmjs.com/package/japa).

## Scripts

Explicando cada script do package.json

- `dev`: roda o ambiente de desenvolvimento reagindo a cada modificação
- `build`: compila o projeto pra pasta `output` pronto pro deploy
- `start`: roda o projeto a partir da pasta `output` do script anterior
- `lint`: roda o eslint no projeto
- `format`: roda o prettier no projeto
- `test`: executa os testes

## Variáveis de ambiente

O Adonis tem uma funcionalidade legal que é a validação de variáveis de ambiente. Se vc tentar iniciar sem as variáveis configuradas, ele gera erros personalizados pra avisar que algo está errado. Ele faz isso usando o arquivo `env.ts`. Por isso, acredito que a documentação delas deve permanecer no código do projeto mesmo.

## Contribuindo

Usar o [Gitmoji](https://gitmoji.dev) no seguinte formato: <emoji> <mensagem de commit>

Ex: ✨ Adds a new feature

## Referências

- Setup project: https://docs.adonisjs.com/guides/installation
- Setup tests: https://docs.adonisjs.com/cookbooks/testing-adonisjs-apps#document
