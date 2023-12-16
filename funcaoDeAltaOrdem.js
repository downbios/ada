// que retorna outra função como parâmentro (Cloujure)

const welcome = (courseName) => {
  return (studentName) => {
    console.log(`Olá ${studentName}, bem-vindo! ao curso de ${courseName}`);
  };
};

const displayWelcome = welcome("JScourse");

displayWelcome("ian adson pinto");

// que recebe outra função como parâmentro

const somar = (num1, num2) => num1 + num2;

const diminuir = (num3, num4) => num3 - num4;

const multiplicar = (num5, num6) => num5 * num6;

const dividir = (num7, num8) => num7 / num8;

const calculo = (num1, num2, operacao) => operacao(num1, num2);

const execute = calculo(10, 30, multiplicar);

console.log(execute);

const result = calculo(10, 5, (num1, num2) => num1 * num2 + 2 * num1 * num2);

console.log(result);

const fullresult = calculo(execute, result, multiplicar);

console.log(fullresult);

// funções de alta ordem de array

/*array.forEach(element => {
    
});*/

const numero = [10, 20, 30, 40, 50];

numero.forEach((elemento, indice, array) => {
  console.log(elemento, indice, array);
});

/* find() */

const encontrado = numero.find((elemento) => {
  return elemento < 60 && elemento >= 30;
});

console.log(encontrado);

const pessoa = [
  {
    nome: "ian",
    idade: 30,
    altura: 1.77,
  },
  {
    nome: "tamires",
    idade: 28,
    altura: 1.57,
  },
  {
    nome: "macy",
    idade: 50,
    altura: 1.6,
  },
  {
    nome: "emanuel",
    idade: 1,
    altura: 30,
  },
];

const encontrePessoa = pessoa.find((pessoa) => pessoa.idade >= 40);

console.log(encontrePessoa);

/*findIndex()*/

const indiceEncontrePessoa = pessoa.findIndex((pessoa) => pessoa.idade >= 40);

console.log(indiceEncontrePessoa);
