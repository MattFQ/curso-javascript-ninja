/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
//
var qualquer = [1, 2, 3, 4, 5];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function retorneArray(x) {
  return x;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
retorneArray(qualquer[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function doisParam(x, y) {
  return x[y];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var recebeArray = ["teste", 2, false, null, undefined];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
doisParam(recebeArray, 0);
doisParam(recebeArray, 1);
doisParam(recebeArray, 2);
doisParam(recebeArray, 3);
doisParam(recebeArray, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book(bookName) {
  var todosLivros = {
    "Livro Um": {
      quantidadePaginas: 32,
      autor: "Jose",
      editora: "joseedit"
    },
    "Livro Dois": {
      quantidadePaginas: 333,
      autor: "autoral",
      editora: "autoraledit"
    },
    "Livro Tres": {
      quantidadePaginas: 32232,
      autor: "realmente",
      editora: "realmenteedit"
    }
  };
  if (!bookName) {
    return todosLivros;
  }
  return todosLivros[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var bookName = "Livro Um";
console.log(
  "O livro " +
    bookName +
    " tem " +
    book("Livro Um").quantidadePaginas +
    " páginas!"
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O autor do " + bookName + " é " + book("Livro Um").autor + "!");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  "a editora do " + bookName + " é " + book("Livro Um").editora + "!"
);
