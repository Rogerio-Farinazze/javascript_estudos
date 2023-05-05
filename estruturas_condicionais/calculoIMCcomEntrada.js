const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`Qual a sua altura: `, altura => {
    readline.question(`Qual o seu peso: `, peso => {
        const imc = peso / Math.pow(altura,2);
        console.log('Seu IMC é de: ' + imc.toFixed(2))

        if (imc < 18.5) {
            console.log('Abaixo do peso')
        } else if (imc >= 18.5 && imc <= 25) {
            console.log('Peso normal')
        } else if (imc >25 && imc <=30) {
            console.log('Acima do peso')
        } else if (imc >30 && imc <=40) {
            console.log('Obeso')
        } else {
            console.log('Obesidade Grave')
        }
        readline.close()
    })
  })

 


