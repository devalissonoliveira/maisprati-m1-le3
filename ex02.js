/*
    2. Crie dois objetos representando personagens de um jogo, cada um com as 
    propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de 
    cada personagem lado a lado e determine qual deles tem maior poder total (soma de vida + ataque + defesa).
*/

const tanker = {
    nome: "Wave",
    vida: 300000,
    ataque: 100,
    defesa: 999
}

const mago = {
    nome: "KMG",
    vida: 150000,
    ataque: 1000,
    defesa: 200
}

for(let props in tanker){
    console.log(`${props}: ${tanker[props]} | ${mago[props]}`);        
}

const poderTanker = tanker.ataque + tanker.defesa + tanker.vida;
const poderMago = mago.ataque + mago.defesa + mago.vida;

poderTanker > poderMago
    ? console.log(`${tanker.nome} possui maior poder total`)
    : console.log(`${mago.nome} possui maior poder total`)