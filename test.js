const assert = require("node:assert/strict");
const { greet } = require("./index");

assert.equal(greet("Copilot"), "Olá, Copilot!");
assert.equal(greet(), "Olá, mundo!");

console.log("Testes passaram.");
