import "./header.css"
import { Link } from "react-router-dom"

 function Header(){
    return(
        <header>
            <nav>
                <Link to="/">Home</Link> {" | "}
                <Link to="/quemsomos">Quem Somos</Link> {" | "}
                <Link to="/cadfrutas">Cadastro de Frutas</Link>

            </nav>
        </header>
    )
}

export default Header