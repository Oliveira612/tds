cardapio


const cardapio = [
    {nome: "X-Burguer", preco: 18.90, categoria:"lanches"},
    {nome: "Batata-frita", preco: 9.50, categoria:"acompanhamento"},
    {nome: "Suco de Laranja", preco: 7.00, categoria: "bebida"},
    {nome: "Milkshake", preco: 12.00, categoria: "sobremesa"}
];

console.log(cardapio);

const pedido = [];

console.log(cardapio[0].nome);
console.log(cardapio[1].preco); //preço de batata
console.log(cardapio[2].categoria); //categoria do suco de laranja

function exibirCardapio(lista) {
    console.log("===Cardápio===");
    console.log(`1. ${lista[0].nome} - R$ ${lista[0].preco}`)
    console.log(`2. ${lista[1].nome} - R$ ${lista[1].preco}`)
    console.log(`3. $ ${lista[2].nome} - R$ $ {lista[2]preco}`)
}

function calcularTotal (listaPedido) {
    let total= listaPedido[0].preco + listaPedido[1].preco;
    return total;
}