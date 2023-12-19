const numeros = [30, 20, 10, 40, 50, 60];

const positivo = numeros.every((elemento) => elemento > 30);

console.log(positivo);

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
    idade: 18,
    altura: 30,
  },
];

const maior = pessoa.every((pessoa) => pessoa.idade >= 18);

console.log(maior);

const menor = pessoa.some((pessoa) => pessoa.idade <= 18);

console.log(menor);
