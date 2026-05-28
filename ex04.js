/*
    4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade 
    no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para 
    listar o inventário completo. Permita que o usuário informe um item para usar: 
    reduza a quantidade em 1 ou exiba "item esgotado" se for zero.
*/

const prompt = require('prompt-sync')();

let inventario = {
    mangual: 2,
    porcaoHP: 10,
    porcaoSP: 3,
    escudo: 1
}

console.log("===== INVENTÁRIO =====");
for(let item in inventario){
    console.log(`${item}: ${inventario[item]}`);    
}

const itemEscolhido = prompt("Digite o nome do item que deseja usar: ")

if(inventario[itemEscolhido] !== undefined){
     if(inventario[itemEscolhido] > 0){
        inventario[itemEscolhido]--;
    } else {
        console.log("Item esgotado.");
    }
} else {
    console.log("Item não existe no inventário.");    
}
