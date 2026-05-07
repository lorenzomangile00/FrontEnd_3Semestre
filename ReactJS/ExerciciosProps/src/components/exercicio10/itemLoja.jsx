// 10 ) Crie um componente chamado ItemLoja que receba:
// nome
// preco
// categoria
// estoque
// Regras:
// Se o estoque for maior que 0, mostrar: Produto disponível
// Caso contrário: Produto indisponível

import "./itemLoja.css";

const ItemLoja = ({nome, preco, categoria, estoque}) => {
    return (
        <>
        <div className="ItemLoja">
            <h2>{nome}</h2>
            <p>Preço: R$ {preco.toFixed(2)}</p>
            <p>Categoria: {categoria}</p>
            <p>Estoque: {estoque}</p>
            {estoque === 0 && <p>Produto indisponivel</p>}
            {estoque > 0 && <p>Produto disponivel</p>}
        </div>
        </>
    )
}

export default ItemLoja;