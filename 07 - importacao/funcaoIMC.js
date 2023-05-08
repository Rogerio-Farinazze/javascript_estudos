function calcularIMC(peso,altura){
    return peso / (altura * altura)
}

function classificarIMC(imc){
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

module.exports = { calcularIMC, classificarIMC }