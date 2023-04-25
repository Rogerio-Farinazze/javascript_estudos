const valGasolina = 5.48;
const valEtanol = 3.27;
const kmLitroGasolina = 14;
const kmLitroEtanol = 10;
const distanciaKm = 148;

const gastoGasolina = (distanciaKm / kmLitroGasolina) * valGasolina;
const gastoEtanol = (distanciaKm / kmLitroEtanol) * valEtanol;
const diferenca = (valEtanol/valGasolina);

console.log('Valor gasto no trajeto com Gasolina: R$ ' + gastoGasolina.toFixed(2));
console.log('Valor gasto no trajeto com Etanol: R$ ' + gastoEtanol.toFixed(2));

if(diferenca < 0.7){
    console.log('Diferenca de ' + diferenca.toFixed(2) + ' Etanol esta mais vantajoso!');
} else {  
    console.log('Diferenca de ' + diferenca.toFixed(2) + ' Gasolina esta mais vantajosa!');
}