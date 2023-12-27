const fs = require("fs");

// * CALLBACK

console.log("antes de fs");

fs.readFile("./lendo.html", (error, conteudo) => {
  if (error) {
    console.log("houve um problema!", error);
  } else {
    console.log(String(conteudo));
  }
});

console.log("depois de fs");

// no exemplo acima vemos a execução do aantes e depois de fs, executando antes da função fs, pois ela é assinocra , leva um tempo para executar.

console.log("depois de settimeout");

setTimeout(() => {
  console.log("isso vai acontecer depois de 2 seg");
}, 2 * 1000);

console.log("depois de settimeout");

// * PROMISSE

const promessa = new Promise((resolve, reject) => {
  fs.readFile("./lendo.html", (error, conteudo) => {
    if (error) {
      reject("houve um problema!", error);
    } else {
      resolve(String(conteudo));
    }
  });
});
//FOCO AQUI APRENDER A LIDAR COM PROMISSE
promessa
  .then((retornoDoresolve) => {
    console.log("deu certo merda!", retornoDoresolve);
  })
  .catch((error) => {
    console.log("deu ruim", error);
  })
  .finally(() => {
    console.log("executa independente do sucesso ou fracasso");
  });

// * ASYNC AWAIT

function lerConteudoDaPromessa() {
  return new Promise((resolve, reject) => {
    fs.readFile("./lendo.txt", (error, conteudo) => {
      if (error) {
        reject("houve um problema!", error);
      } else {
        resolve(String(conteudo));
      }
    });
  });
}

async function leituraDeDados() {
  console.log("antes");
  const retornoDaPromessa = await lerConteudoDaPromessa();
  console.log(retornoDaPromessa);
  console.log("depois");
}

leituraDeDados();
