"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Garagem_1 = require("./Garagem");
var rl = require('readline-sync');
var garagem1 = new Garagem_1.Garagem();
var carro1 = new Carro_1.Carro('marca', 100, 13);
carro1.setCarro();
console.log(carro1.getCarro());
console.log(carro1.projecaoKm(rl.questionInt('Digite os litros para descobrir quantos km eles rendem: ')));
carro1.andar();
console.log(carro1.obterGasolina());
carro1.abastecerGasolina();
console.log(carro1.obterGasolina());
garagem1.adicionarCarro(carro1);
garagem1.adicionarCarro(new Carro_1.Carro('Fiat', 50, 13.1));
garagem1.adicionarCarro(new Carro_1.Carro('Fiat', 60, 10.23));
garagem1.adicionarCarro(new Carro_1.Carro('Fiat', 70, 9));
garagem1.adicionarCarro(new Carro_1.Carro('volkswagen', 50, 13.1));
garagem1.adicionarCarro(new Carro_1.Carro('Fiat', 50, 13.1));
garagem1.adicionarCarro(new Carro_1.Carro('Fiat', 50, 13.1));
garagem1.adicionarCarro(new Carro_1.Carro('Fiat', 50, 13.1));
garagem1.adicionarCarro(new Carro_1.Carro('Fiat', 50, 13.1));
garagem1.adicionarCarro(new Carro_1.Carro('Fiat', 50, 13.1));
garagem1.adicionarCarro(new Carro_1.Carro('Fiat', 50, 13.1));
