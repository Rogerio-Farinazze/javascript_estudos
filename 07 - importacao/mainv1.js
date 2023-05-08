const { gets,print } = require('./funcoes_auxiliares.js');

const quantidadeAlunos = gets();
let maiorValorSorteado = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
    const numeroSorteado = gets();  
    if(numeroSorteado > maiorValorSorteado){
        maiorValorSorteado = numeroSorteado;
    }
}

print(maiorValorSorteado);
console.log(quantidadeAlunos);