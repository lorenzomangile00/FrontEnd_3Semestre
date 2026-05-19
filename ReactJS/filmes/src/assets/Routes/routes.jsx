import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import Login from "../pages/login/login.jsx"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme.jsx"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero.jsx"

const Rotas = () => {
    return(
        <BrowserRouter>
            <nav>
                <Link to="/">Login</Link> {" "}
                <Link to="/filme">Filmes</Link> {" "}
                <Link to="/genero">Generos</Link> {" "}
            </nav>
            <Routes>
                <Route element={<Login/> } path="/"/>
                <Route element={<CadastroFilme/> } path="/filme"/>
                <Route element={<CadastroGenero/> } path="/genero"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;