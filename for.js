const prompt = require ("readyline-sync")

let i;

for(i = 0; i < 5; i++) {
    console.log(i);
}


// exp1 = inicialização da variavel de controle
// exp2 = condição de permanência do for
// exp3 = condição de incremento da variavel de controle

/*for (exp 1; exp 2; exp 3) {
    //escopo de for
}*/

// limpa o console
console.clear();

//EXEMPLO DE FOR

let maiorNumero = 0;

let numeroInformado;

for (let i = 0; i < 5; i++){
    numeroInformado = Number(prompt.question('informe um numero positivo'));

    if (numeroInformado > maiorNumero) {
        maiorNumero = numeroInformado;
    }
}

console.log("Maior numero é: ", maiorNumero);


//COMO PERCOORRER UMA STRING//

const nome = "ian adson"

console.log(nome.length);

for (let i = 0; i < nome.length; i++) {
    console.log(i);

    if (i === 4) {
        break
    };
}