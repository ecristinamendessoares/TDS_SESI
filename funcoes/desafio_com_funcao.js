/*
Atalho comentario de varias linhas
alt + shift + A

Desafio:
 Criar uma funcao que receba preco e descpnto em %
e mostre o valor final com desconto.
Criar outra funcao que receba preco e quantidade
e mostre o valor total da compra.
*/



const produto1 = "Labubu Verde";
const preco1 = 12345678910;
const desconto1 = CalculadorDesconto(preco1, 0.15);
const quantidade = 6;
const valorTotal = calculadoraCompras(preco1, quantidade, desconto);
const desconto = 0.15

function CalculadorDesconto(preco1, desconto) {
    return preco1 - (preco * desconto);
}
console.log(`O preco do produto e ${produto1} com desconto e ${desconto}`);

function calculadoraCompras(preco, quantidade, desconto) {
    return quantiade * (preco - (preco * desconto));
}
console.log(`O valor total da compra do ${produto1} e de R$ ${valorTotal}`)