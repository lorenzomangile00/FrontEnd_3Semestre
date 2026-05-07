import Cardperfil from "../cardperfil/cardperfil";
import "./menu.css"


function Menu() {
    return(
        <nav class="menu">
        <a href="#"class="menu_item">Home</a>
        <a href="#"class="menu_item">Quem Somos</a>
        <a href="#"class="menu_item">Contato</a>
        <a href="#"class="menu_item menu_item--success">Entrar</a>
        <a href="#"class="menu_item menu_item--button-default">Cadastrar</a>

        <Cardperfil/>
    </nav>
    );
    
}

export default Menu;