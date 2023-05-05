class Pessoa {
    nome;
    altura;
    peso;

    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularIMC() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarIMC() {
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 25) {
            return 'Peso normal';
        } else if (imc > 25 && imc <= 30) {
            return 'Acima do peso';
        } else if (imc > 30 && imc <= 40) {
            return 'Obeso';
        } else {
            return 'Obesidade';
        }
    }
}

const jose = new Pessoa('José', 1.70, 70);
console.log('\nPaciente: ' + jose.nome + '\nAltura: ' + jose.altura + '\nPeso: ' + jose.peso + '\nIMC: ' + jose.calcularIMC() + '\nCondição: ' + jose.classificarIMC());

const joao = new Pessoa('João', 1.80, 120);
console.log('\nPaciente: ' + joao.nome + '\nAltura: ' + joao.altura + '\nPeso: ' + joao.peso + '\nIMC: ' + joao.calcularIMC() + '\nCondição: ' + joao.classificarIMC());
