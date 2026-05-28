/*
    3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de 
    experiência. Use for...in para listar todos os dados. Com base nos anos de 
    experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5 anos = 10%, acima de 5 anos = 15%.
*/

const funcionario = {
    nome: "Alisson Oliveira",
    cargo: "Analista de Projetos e Processos",
    salario: 3000,
    anosExp: 13
}

for(let props in funcionario){
    console.log(`${props}: ${funcionario[props]}`);    
}

let bonus = 0;

if(funcionario.anosExp > 0 && funcionario.anosExp <= 2){
    bonus = funcionario.salario * (5 / 100)
    console.log(`Bonus Anual: ${bonus}`);   
}else if(funcionario.anosExp >= 3 && funcionario.anosExp <= 5){
    bonus = funcionario.salario * (10 / 100)
    console.log(`Bonus Anual: ${bonus}`);   
}else {
    bonus = funcionario.salario * (15 / 100)
    console.log(`Bônus Anual: R$ ${bonus}`);    
}