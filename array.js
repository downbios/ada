const valor = 10;

const valor2 = 5;

const valor3 = 3;

// EXEMPLO DE ARRAY DOS DADOS DAS VARIAVEIS ACIMA//

const arr = [10, 5, 3];

// EXEMPLO DE ARRAY COM VÁRIOS TIPOS DE DADOS //

const pessoa = ["ian", 30, 1.77, true];

// EXTRAINDO DADOS DE DIFERENTES ARRAYS //
console.log(arr);
console.log(pessoa);

// EXTRAINDO UM UNICO TIPO DE DADO //
console.log(pessoa[0]);


pessoa[3] = false //modificando boleando do array mesmo em const //

console.clear();

console.log(pessoa.length); // descobrindo tamanho do meu array //

// FATIAMENTO DE ARRAY //

const numeros = [10, 23, 4, 6, 9, 70];

numeros.slice(0, 3); // PEGA OS INDICES DEFINIDOS

console.log(numeros);

// ADICIONANDO ELEMENTO NO ARRAY //

numeros.push(0); // adiciona no final

numeros.unshift(-1); // adiciona no começo

//REMOVENDO ELEMENTOS DO ARRAY

numeros.pop(); // remove o ultimo elemento do array

numeros.shift(); // remove o primeiro elemento do array

console.clear();


// BUSCAR ELEMENTOS EM UM ARRAY //

console.log(numeros.includes(10)); // VERIFICA SE O NUMERO 10 ESTA EM MEU ARRAY // 

if (numeros.includes(10)) {
    console.log("existe");
} else {
    console.log('nao existe');
}


const existeOnumero20 = numeros.includes(20);

// BUSCAR O INDICE DE UM ELEMENTO DENTRO DE ARRAY //

// indexOf e lastIndexOf

const indicedoElementoX = numeros.indexOf(10); // se existe o elemento retornar o indice dele, senao retorna -1

elementoY = [10, 20, 30, 20, 40];

const indicedoElementoY = numeros.lastIndexOf(10); // busca o indice do ultimo elemento quando existe elemento de igual valor dentro da array

// PERCORRER UMA ARRAY COM FOR


const arr1 = [45, 50, 60, 65, 35, 50];


for (let i = 0; i < arr1.length; i++) {
    console.log(i, arr[i]);   // PEGA O INDICE E O ELEMENTO // 
}


// for-of e for-in

for ( elemento of aar1) {
    console.log(elemento); // for-of percorre os elementos de um array
}

for ( elemento1 in arr1) {
    console.log(elemento1); // for-in percorre os indices dos elementos de um array
}

// ter atenção pois for-in retorna o indice, portanto o typeof dele será sempre uma string.