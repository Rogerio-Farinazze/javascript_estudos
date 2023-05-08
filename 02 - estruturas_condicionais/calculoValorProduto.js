const precoEtiqueta = 100.00;
const tipoPagamento = 4;

switch (tipoPagamento) {
    case 1:
        console.log('Pagamento com cartão de débito com 10% de desconto')
        console.log('Valor do pagamento R$ ' + (precoEtiqueta * 0.9).toFixed(2))
        break;
    case 2:
        console.log('Pagamento a vista ou pix com 15% de desconto')
        console.log('Valor do pagamento R$ ' + (precoEtiqueta * 0.85).toFixed(2))
        break;
    case 3:
        console.log('Pagamento em 2x sem desconto')
        console.log('Valor do pagamento R$ ' + (precoEtiqueta).toFixed(2))
        break;
    case 4:
        console.log('Pagamento acima de 2x com acréscimo de 10%')
        console.log('Valor do pagamento R$ ' + (precoEtiqueta * 1.1).toFixed(2))
        break;
}

