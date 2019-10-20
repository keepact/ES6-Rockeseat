const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// Map

const map = usuarios.map(item => item.idade);

console.log(map);

// Filter

const filter = usuarios.filter(function(item) {
    return item.idade >= 18 && item.empresa === 'Rocketseat';
});

console.log(filter);

// Find

const find = usuarios.find(item => item.empresa === 'Google');

console.log(find);


// Idade * 2 + filter < 50


const newUserIdades = usuarios.map(item => ({
    ...item,
    idade: item.idade * 2
}))

.filter(item => item.idade < 50);

console.log(newUserIdades);

