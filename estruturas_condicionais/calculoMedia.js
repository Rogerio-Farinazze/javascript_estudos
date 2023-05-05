const n1 = 10;
const n2 = 6;
const n3 = 8;

const media = ( n1 + n2 + n3 ) / 3;

console.log('Média é: ' + media)

if(media >= 7){
    console.log('Situação: Aprovado')
} else if(media <7 && media >=5) {
    console.log('Situação: Recuperação')
} else {
    console.log('Situação: Reprovado')
}