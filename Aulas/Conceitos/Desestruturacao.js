const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio de Sul',
        estado: 'SC',
    },
};

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade

// console.log(nome);

// const { nome, idade, endereco: { cidade } } = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);

// function mostraNome(usuario) {
//    console.log(usuario.nome);
// }

// mostraNome(usuario);

function mostraNome({ nome, idade }) {
   console.log(nome, idade);
}

mostraNome(usuario);