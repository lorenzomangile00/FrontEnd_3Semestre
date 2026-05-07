// 02) Crie um componente chamado Produto que receba as seguintes props:
// nome
// preco
// descricao
// O componente deve exibir:

//    Nome do Produto
//    Preço: R$
//    Descrição do produto

// Crie pelo menos 3 produtos diferentes utilizando o componente.



const Produto = ({nomeProduto, preco, descricao}) => {
    return (
        <p>Produto: {nomeProduto}, 
         Preço: {preco.toFixed(2)}, 
          Descrição: {descricao}
          </p>
    )
}

export default Produto