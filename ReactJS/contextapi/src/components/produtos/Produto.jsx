import { ProdutoContext } from "../../context/ProdutoContext"
import { UsuarioContext } from "../../context/UsuarioContext"
import { useContext, useState } from "react"

const Produto = () => {
    const {usuario, setUsuario} = useContext(UsuarioContext)

    const [novoProduto, setNovoProduto] = useState()
    
    return(
        <div> 
            <h2>Pagina de Produto</h2>

            {/* <input 
            type="text"
            placeholder="Digite um novo produto"
            onChange={(e) => {
                setNovoProduto(e.target.value)
            }}
            />

            <button onClick={() => {
                setProduto(novoProduto)
            }}
            >Cadastrar Produto</button>
            <p>Novo Produto: <strong>{novoProduto}</strong></p>
        </div>
    
        <p>Produto: {produtoCon}</p>
        </> */}
        </div>
    )
}

export default Produto