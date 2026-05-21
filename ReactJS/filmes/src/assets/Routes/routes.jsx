import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import Login from "../pages/login/login.jsx"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme.jsx"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero.jsx"

const Rotas = () => {
    return(
        <BrowserRouter>

            <Routes>
                <Route element={<Login/> } path="/"/>
                <Route element={<CadastroFilme/> } path="/filme"/>
                <Route element={<CadastroGenero/> } path="/genero"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;