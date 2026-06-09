import { useContext } from "react"
import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext"
import Home from "../home/Home"
import Perfil from "../perfil/Perfil"
import Produto from "../produtos/Produto"
import { ProdutoContext } from "../../context/ProdutoContext"
import CadastrarProduto from "../cadastrarProduto/CadastrarProduto"
import ListarProduto from "../listar/ListarProduto"

const Header = () => {
    const {usuario,  setUsuario} = useContext(UsuarioContext)
    const logout = () => {
        setUsuario(null)
    }
    const {produtoCon} = useContext(ProdutoContext)
    return(
        <header>
            <nav>
                <Link to={"/"}>Home</Link> {""}
                <Link to={"/perfil"}>Perfil</Link> {""}
                <Link to={"/produto"}>Produto</Link> {""}
                <Link to={"/cadastrarProduto"}>Cadastrar Produto</Link> {""}
                <Link to={"/listarProduto"}>Listar Produto</Link>
            </nav>
            <h2>Bem vindo, {usuario ? usuario : "Visitante"}</h2>
            <button onClick={()=>{logout()}}>Sair</button>
        </header>
        
    )
}

export default Header