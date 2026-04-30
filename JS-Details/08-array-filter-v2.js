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

//  const estoqueFeminino = estoque.filter((item)=>{
//     return item.perfil == "F";
// });

// console.log(estoqueFeminino);

let qtdPromocao = 0;
const promocaoCamisas = estoque.filter((item)=>{
    if (item.promocao == true) {
        qtdPromocao += item.quantidade;
    }
    return item.promocao == true;
});

console.log(`Quantidade de produtos em promocao: ${qtdPromocao}`);
console.log(promocaoCamisas);



// console.log(promocaoCamisas);
