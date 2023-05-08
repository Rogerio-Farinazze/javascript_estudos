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
const distancia = 100;
const gasto = novoCarro.calcularGasto(distancia, 5); 
console.log('O Carro ' + novoCarro.marca + ' da cor ' + novoCarro.cor + ' gasta o total de R$ ' + gasto + ' em um trajeto de ' + distancia + 'KM');