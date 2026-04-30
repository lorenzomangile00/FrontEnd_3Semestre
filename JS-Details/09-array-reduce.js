const estoque = [
    {
        descricao: "Camisa Polo",
        cor: "Verde",
        preco: 29.99,
        perfil: "M",
        quantidade: 10,
        promocao: false
    },
    {
        descricao: "Camisa Dri-fit",
        cor: "Azul",
        preco: 29.99,
        perfil: "F",
        quantidade: 15,
        promocao: true
    },
    {
        descricao: "Camisa Polo",
        cor: "Preta",
        preco: 49.99,
        perfil: "F",
        quantidade: 5,
        promocao: true
    },
    {
        descricao: "Camisa Dri-fit",
        cor: "Cinza",
        preco: 49.99,
        perfil: "M",
        quantidade: 100,
        promocao: false
    }
];

//Reduz o array a um unico elemento. No caso um somatorio, por exemplo: 
let totalPreco = 0;
let totalEstoque = estoque.reduce((total, produto) => {
    totalPreco += produto.preco * produto.quantidade;
    return total + produto.quantidade;
}, 0);

console.clear();

console.log(`Voce tem um total de ${totalEstoque} produtosno estoque`);
console.log(`O valor total do seu estoque e: R$ ${totalPreco.toFixed(2)}`);



