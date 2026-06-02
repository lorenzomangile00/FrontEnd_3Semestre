import { useContext, useState } from "react"
import { ProdutoContext } from "../../context/ProdutoContext"
import Header from "../header/Header"

const CadastrarProduto = () => {
    const { listaProdutos, setListaProdutos } = useContext(ProdutoContext);

    const [novoProduto, setNovoProduto] = useState("");
    return (
        <div>
            <h2>Cadastro de Produtos</h2>
            <input type="text"
            placeholder="Digite o produto"
                onChange={(e) => {
                    setNovoProduto(e.target.value)
                }}
            />
            <button onClick={() => { setListaProdutos([...listaProdutos, novoProduto])
            
             }}>Cadastrar</button>
            <p>Produto que sera cadastrado: {novoProduto}</p>

            

        </div>
    

    )
}

export default CadastrarProduto