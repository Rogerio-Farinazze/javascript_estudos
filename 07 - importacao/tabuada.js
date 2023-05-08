const { gets,print } = require('./funcoes_auxiliares.js');

const tabuada = gets(2);

for (let i = 1; i < 10; i++) {
    const valor = i*tabuada;
    print(valor);
}

