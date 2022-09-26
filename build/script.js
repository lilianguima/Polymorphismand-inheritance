"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cachorro_1 = require("./Cachorro");
var Cavalo_1 = require("./Cavalo");
var Preguica_1 = require("./Preguica");
var cachorro = new Cachorro_1.Cachorro('Venus', 2, true);
var cavalo = new Cavalo_1.Cavalo('John', 5, true);
var preguica = new Preguica_1.Preguica('Pleg', 5, true);
function som(animal) {
    animal.EmiteSom();
}
som(cachorro);
som(cavalo);
som(preguica);
