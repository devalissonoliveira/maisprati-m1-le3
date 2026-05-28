/*
    1. Crie um objeto representando um produto com as propriedades: nome, preço,
    categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
    propriedades e seus valores. Em seguida, adicione uma nova propriedade
    desconto ao objeto e exiba o preço final calculado.
*/

let produto = {
    nome: "Jeep Compass",
    preço: 150000,
    categoria: "SUV",
    qtdEstoque: 7
}

for(let props in produto){
    console.log(`${props}: ${produto[props]}`);
}

produto.desconto = 30000;

console.log(`Preço Final: R$ ${produto.preço - produto.desconto}`);
