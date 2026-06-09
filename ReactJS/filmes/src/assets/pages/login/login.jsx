import Logo from "../../img/logo.svg";
import "./Login.css";
import Botao from "../../../components/botao/Botao";
import { useContext, useState } from "react";

const Login = () => {

    const { usuario, setUsuario} = useContext(UsuarioContext)

    const [novoUsuario, setNovoUsuario] = useState()

    const login = () => {
        localStorage.setItem("usuario", JSON.stringify(novoUsuario))
        setUsuario(novoUsuario)
        setNovoUsuario("")
    }
    
    return(
        <main className= "main_login">
          <div className="banner"></div>
          <section className="section_login">
            <img src={Logo} alt="Logo do Filmoteca"/>
            <form action="" className="form_login">
                <h1>Login</h1>
                <div className="campos_login">
                    <div className="campo_input">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder="Digite seu e-mail" value={novoUsuario} onChange={(e)=>{setNovoUsuario(e.target.value)}}/>
                    </div>
                    <div className="campo_input">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" placeholder="Digite sua senha"/>
                    </div>
                </div>
                <Botao onClick={()=>{login()}} nomeDoBotao="Entrar"/>
            </form>
          </section>
        </main>
    )
}

export default Login;