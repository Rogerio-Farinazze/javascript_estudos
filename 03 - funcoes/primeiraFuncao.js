function incrementarJuros(valor, juros){
    return (valor * juros) / 100 + valor;
}
function decrementarJuros(valor, juros){
    return valor - ((valor * juros) / 100);
}
console.log(incrementarJuros(100, 10))
console.log(decrementarJuros(100, 10))