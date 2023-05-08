const { gets,print } = require('./funcoes_auxiliares.js');
const { calcularIMC,classificarIMC } = require('./funcaoIMC.js');

const nome = gets('Rogério Farinazze');
const idade = gets(35);
const altura = gets(1.79);
const peso = gets(125);
const imc = calcularIMC(peso,altura);
print(`Meu nome é ${nome} e tenho ${idade} anos`);
print(`Minha altura é ${altura} e peso ${peso} Kg`);
print(`Meu IMC é ${imc.toFixed(2)} e estou ${classificarIMC(imc)}`);
