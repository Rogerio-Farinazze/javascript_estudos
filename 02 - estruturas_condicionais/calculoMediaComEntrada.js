const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
    readline.question(`Entre com a nota 1 `,  n1 => {
        readline.question(`Entre com a nota 2 `,  n2 => {
            readline.question(`Entre com a nota 3 `, n3 => {
                const media = (( parseFloat(n1) + parseFloat(n2) + parseFloat(n3) ) / 3)
                console.log('A média é: ' + media.toFixed(2))
                if(media >= 7){
                    console.log('Situação: Aprovado')
                } else if(media <7 && media >=5) {
                    console.log('Sitação: Recuperação')
                } else {
                    console.log('Situação: Reprovado')
                }
                readline.close()
            })   
        })
    })
    
        