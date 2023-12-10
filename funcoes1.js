// função simples 

function saudacao() {
    console.log('Olá Mundo');
}

saudacao()
// função incluindo parametros e template string

function helloWorld(minhaPrimeiraFuncao) {
    console.log(`Olá, ${minhaPrimeiraFuncao}, !`);
}

helloWorld('ian adson');

//retornando e salvando os parametros de uma função em uma variável

function cursoJsAda(aluno, nomeDocurso) {
    return `Olá, ${aluno}, Você está no módulo ${nomeDocurso}`
}

const saudacaoCursoAda = cursoJsAda('ian adson', 'FrontJS');

console.log(saudacaoCursoAda);

//fixando aprendizado

function somar(numero1, numero2) { //atribui os parmetros a função somar
    return numero1 + numero2; //retorna estes parametros somando-os
}

const soma = somar(2 , 10); //cria uma variavel soma, que recebe a função acima , atribuindo os valores as variáveis

console.log(soma); // imprime a váriavel


function somar2(numero1, numero2) {
    const soma2 = numero1 + numero2; // atribuindo valor a variavel, soma2
    return `A soma de ${numero1} + ${numero2} é igual a ${soma2}`; //usando template string é nescessário primeiro atribuir o valor a variavel.
}

const resultadoSoma2 = somar2(10, 20); // novamente chamando a função , dentro de uma variavel

console.log(resultadoSoma2);

/* FUNÇÕES ANÔNIMAS */

const acrescentaDois = function (numero) {
    return numero + 2;
};

const maisDois = acrescentaDois(4);

console.log(maisDois);

/* ARROW FUNCTION */

const diminuiTres = (numero) => {
    if (numero <=0) {
    console.log('não é possivel mais diminuir');   
    } else {
        return numero - 3
    }
}

const menosTres = diminuiTres(4);

console.log(menosTres);

//pode ser usada sem declarar o return

const subtrai = (numero1, numero2) =>  numero1 - numero2;

const menoDois = subtrai(6, 4);
console.log(menoDois);

// pode ser usada sem parentese quando tem um unico parametro

const maisQuatro = numero => numero + 4;

const mais4 = maisQuatro(2);

console.log(mais4);