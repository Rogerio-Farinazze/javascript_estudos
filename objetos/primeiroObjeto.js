class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome} | Idade: ${this.idade} | Ano de nascimento: ${this.anoDeNascimento}`)
    }
}

function compararPessoas(p1,p2) {
    if (p1.idade > p2.idade){
        console.log(`A idade de ${p1.nome} é maior que a idade de ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`A idade de ${p2.nome} é maior que a idade de ${p1.nome}`);
    } else {
        console.log(`A idade de ${p1.nome} é igual a idade de ${p2.nome}`);
    }
}

const pessoa1 = new Pessoa('Rogério', 35);
const pessoa2 = new Pessoa('Aparecido', 30);

compararPessoas(pessoa1,pessoa2);