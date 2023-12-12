// EXEMPLO DE OBJETO USANDO CHAVES

const pessoa = {
  nome: "ian",
  idade: 30,
  altura: 1.74,
  H: true,
};
pessoa.profissao = "desenvolvedor";

pessoa.nome = "emanuel adson";

delete pessoa.H;
console.log(pessoa.nome); //IMPRIMINDO SOMENTE UMA CHAVE DO OBJETO
console.clear();

// SINTAXE

const idade = 30;
const altura = 1.75;

const objeto = {
  idade,
  altura,
};

console.log(objeto);
console.clear();

// desustruturando um objeto

const { nome, H, profissao } = pessoa;

console.log(nome);
console.log(altura);
