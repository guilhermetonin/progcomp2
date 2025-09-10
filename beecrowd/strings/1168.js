    // input = "3\n115380\n2819311\n23456"
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    // tabela de cada dígito com a sua qtde de led 
    let leds = {
        '1': 2,
        '2': 5,
        '3': 5,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 3,
        '8': 7,
        '9': 6,
        '0': 6,
    }

    // quantidade de testes que vão ocorrer
    let qtdeTeste = parseInt(lines[0])

    for (let i = 1; i <= qtdeTeste; i++) { // para cada número

        // numero = ['115380'] string {vetor de caracteres?}
        let numero = lines[i]
        let soma = 0
        
        for (let k = 0; k < numero.length; k++) { // para cada letra do número
            soma += leds[numero[k]]
        }

        console.log(`${soma} leds`)
    }
