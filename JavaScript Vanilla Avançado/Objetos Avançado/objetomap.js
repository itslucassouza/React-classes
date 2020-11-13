const pessoas = [
    {id: 3, nome: 'luiz'},
    {id: 2, nome: 'maria'},
    {id: 1, nome: 'helena'}
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = {...pessoa}
// }

const novasPessoas	= new Map();
for (const pessoa of pessoas) {
    const { id } = pessoas;
    novasPessoas.set(id,{ ...pessoa });
}


console.log(novasPessoas)