const precoGasolina = 5.79;
const precoEthanol = 4.09;
const kmDistancia = 100;
const mediaGasolina = 14;
const mediaEthanol = 10;
const veiculoGasolina = true;

if(veiculoGasolina === false){
    const resultado = (precoGasolina * (kmDistancia/mediaGasolina))
    console.log('Gasto com Gasolina é de R$ ' + resultado.toFixed(2))
}else{
    const resultado = (precoEthanol * (kmDistancia/mediaEthanol))
    console.log('Gasto com Ethanol é de R$ ' + resultado.toFixed(2))
}