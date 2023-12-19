// .map cria um novo array com base no array original com a mesma quantidade de elementos,
// porém com valores diferentes a depender da iteração

const numeros = [10, 20, 30, 40];

const novoArray = numeros.map((elemento) => {
  return elemento + 1;
});

console.log(novoArray);

const valor = [15, 25, 35, 45];

const valores = valor.map((elemento) => elemento ** 2);

console.log(valores);

const produtos = [
  { produto: "arroz", preco: 5.99, quantidade: 2 },
  { produto: "pão", preco: 2.99, quantidade: 2 },
  { produto: "açucar", preco: 6.99, quantidade: 2 },
  { produto: "sal", preco: 8.99, quantidade: 2 },
];

const carrinho = produtos.map((item) => {
  return {
    ...item,
    total: item.preco * item.quantidade,
  };
});

console.log(carrinho);

// no exemplo acima usamos spread
// o spread desconstroi um array selecionado e cria um novo array com todos os elementos do anterior
// permitindo adicionar elementos ao mesmo.

/* array = [
    {a, b, y},
];
return {
    ...objetoDoarray
    novoElemento: x,
}

retorno = {a, b, y, x};*/

// FILTER

const filtro = carrinho.filter((valor) => valor.total >= 6);

console.log(filtro);

const filtro2 = carrinho.filter((item) => {
  return item.produto !== "arroz" && item.preco === 2.99;
});

console.log(filtro2);

// REDUCE
const subtotal = carrinho.reduce((acumulador, item) => {
  return item.preco * item.quantidade + acumulador;
}, 0);

console.log(subtotal);

const numero = [10, 20, 30, 40, 45, 5, 7];

const soam = numero.reduce((acumulador, elemento, index, arrayCompleto) => {
  console.log(acumulador);
  return elemento + acumulador;
});

console.log(soam);

const numero1 = [10, 20, 30, 40, 45, 5, 7];

const somaDosImpares = numero1.reduce((acumulador, numero1) => {
  if (numero1 % 3 === 0) {
    return numero1 + acumulador;
  } else {
    return acumulador;
  }
}, 0);

console.log(somaDosImpares);
