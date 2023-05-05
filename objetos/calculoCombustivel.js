class Carro {
    marca;
    cor;
    consumoMedioPorKm;

    constructor(marca, cor, consumoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.consumoMedioPorKm = consumoMedioPorKm;
    }

    calcularGasto(distanciaEmKm, valorCombustivel){
        return valorCombustivel * distanciaEmKm * this.consumoMedioPorKm
    }
}

const novoCarro = new Carro('Fusca', 'Azul', 1/10);
console.log(novoCarro.calcularGasto(100, 5));