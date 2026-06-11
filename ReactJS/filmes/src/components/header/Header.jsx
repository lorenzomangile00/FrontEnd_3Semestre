import "./Header.css";
import Logo from "../../assets/img/logo.svg"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const Header = () => {

    const { usuario, setUsuario } = useContext(UsuarioContext)

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("usuario")
        localStorage.removeItem("dadosLogin")

        setUsuario(null)

        navigate("/")
    }

    return (
        <header>
            <div className="layout_grid cabecalho">
                {/* Ao clicar no link, redireciona para a tela login */}
                <Link to="/">
                    <img src={Logo} alt="Logo do Filmoteca" />
                </Link>

                <nav className="nav_header">
                    <Link className="link_header" to="/filmes">Filme</Link>
                    <Link className="link_header" to="/Genero">Gênero</Link>
                    
                </nav>

                <h2 className="boas_vindas">Bem vindo a Filmoteca, {usuario ? usuario.nome : "Visitante"}
                </h2>

                <button
                type="button" className="btn_logout" onClick={logout}>Sair</button>
            </div>
        </header>
    )
}

export default Header;