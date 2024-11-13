//criar uma função para exibir uma lista de alunos
// function listaAlunos(aluno1, aluno2, aluno3, aluno4) {
//   console.log("sejam bem vindos todos os alunos!");
//   console.log(aluno1);
//   console.log(aluno2);
//   console.log(aluno3);
//   console.log(aluno4);
// }

//na função não temos como saber de antemão quantos parâmetros serão passados
//ai entra em ação o Rest Operator que irá transformar os parâmetros em um array

//vamos reescrever a função utilizando o rest operator
function listaAlunos(...alunos) {
  console.log("sejam bem vindos todos os alunos!");
  console.log(alunos);
  console.log(alunos[0]);
  console.log(alunos[3]);
}

listaAlunos("Adamastor", "Benevides", "Conegundes", "Demerval", "Emergada");

//outro exemplo: sorteador de números primos menores que 20

function sorteadorPrimo(...numeros) {
  console.log(numeros);
  //const numeroSorteado = Math.random() * numeros.length;

  const numeroSorteado = Math.floor(Math.random() * numeros.length);
  console.log(`posição ${numeroSorteado}`);
  console.log(`Numero primo:  ${numeros[numeroSorteado]}`);
}

sorteadorPrimo(2, 3, 5, 7, 11, 13, 17, 19);

function sorteadorNomes(...nome) {
  console.log(nome);

  const nomeSorteado = Math.floor(Math.random() * nome.length);
  console.log(`posição ${nomeSorteado}`);
  console.log(`Nome do Aluno:  ${nome[nomeSorteado]}`);
}

sorteadorNomes(
  "ALINE ",
  "ANA CLARA ",
  "ANA LUIZA ",
  "ANDRE ",
  "BERNARDO ",
  "DANIEL ",
  "DEIVID ",
  "ENRIQUE ",
  "FERNANDA ",
  "GABRIEL ",
  "GABRIEL ",
  "IZADORA ",
  "JEFTE ",
  "JOAO MATHEUS ",
  "JOAO MAURICIO ",
  "JOSE ",
  "JULIA ",
  "KAMILA ",
  "KARINA ",
  "KEVIN ",
  "LEONARDO FREITAS ",
  "LEONARDO GASPARETO ",
  "LORENZO ",
  "LUCAS ",
  "MATHEUS ",
  "NICOLAS PERICO ",
  "NYCOLAS MARQUES ",
  "PEDRO RODACINSKI ",
  "PEDRO PORTELA ",
  "RAFAELA ",
  "RAPHAEL ",
  "RAYRA",
  "VALENTINA",
  "VINICIUS",
  "VITOR GARRETT",
  "VITOR SCHUSKI"
);
