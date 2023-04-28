console.log('CONVERSOR DE STRING\nPrimeira letra maiúscula de cada palavra\n\n')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`Qual Sentença deseja converter `, name => {

    const palavras = name.toLocaleLowerCase().split(" ")
    for (let i = 0; i < palavras.length; i++) {
        palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substring(1)
    }
    console.log(palavras.join(" "))
    readline.close()
  })

