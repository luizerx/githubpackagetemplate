# githubpackagetemplate-test

Pacote npm mínimo para fins de teste. Não possui dependências externas e está
marcado como privado para evitar publicação acidental.

## Uso

```js
const { greet } = require("./index");

console.log(greet("mundo"));
```

## Testes

```sh
npm test
```
