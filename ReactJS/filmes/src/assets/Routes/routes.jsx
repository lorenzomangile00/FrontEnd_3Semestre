import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import Login from "../pages/login/login.jsx"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme.jsx"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero.jsx"
import PrivateRoute from "./PrivateRoute.jsx";

const Rotas = () => {
    return(
     

            <Routes>
                <Route element={<Login/> } path="/"/>
                <Route element={<PrivateRoute><CadastroFilme/></PrivateRoute> } path="/filmes"/>
                <Route element={<PrivateRoute><CadastroGenero/> </PrivateRoute>} path="/genero"/>
            </Routes>
       
    )
}

export default Rotas;