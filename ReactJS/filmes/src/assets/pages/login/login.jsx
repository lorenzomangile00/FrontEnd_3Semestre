import Logo from "../../img/logo.svg";
import "./Login.css";
import Botao from "../../../components/botao/Botao";
import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../../../context/UsuarioContext.jsx";
import { useNavigate } from "react-router-dom";
import api from "../../../services/services.js";
import { Alerta } from "../../../components/alerta/Alerta.jsx";
import { jwtDecode } from "jwt-decode";

const Login = () => {


    const { usuario, setUsuario } = useContext(UsuarioContext)

    const [novoUsuario, setNovoUsuario] = useState()

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const realizarLogin = async (e) => {
        e.preventDefault();

        // const usuario = {
        //     nome: "Lorenzo",
        //     email: email
        // };

        const dadosLogin = {
            email: email,
            senha: senha
        }

        try {
            const retornoAPI = await api.post(
                "/Login", dadosLogin
            )

            const token = retornoAPI.data.token;

            localStorage.setItem("token", token)

            const decoded = jwtDecode(token);

            setUsuario(decoded)

            localStorage.setItem(
                "usuario",
                JSON.stringify(decoded)
            );

            navigate("/filmes")

        } catch (error) {
            Alerta({
                title: "Login",
                text: "Email ou senha invalidos",
                icon: "error",
                confirmButtonText: "OK",
            })
        }

        // localStorage.setItem(
        //     "usuario", JSON.stringify(usuario)
        // );

        // localStorage.setItem(
        //     "dadosLogin", JSON.stringify(dadosLogin)
        // );

        // setUsuario(usuario)

        // navigate("/filmes")
    }

    const login = async () => {
        if (email.trim().length == 0 || senha.trim().length == 0) {
            Alerta({
                title: "Login",
                text: "Preencher todos os campos",
                icon: "warning",
                confirmButtonText: "OK",
            });
            return false;
        }
        localStorage.setItem("usuario", JSON.stringify(novoUsuario))
        setUsuario(novoUsuario)
        setNovoUsuario("")

        const dadosLogin = {
            email: email,
            senha: senha
        }

        try {
            const retornoAPI = await api.post("/Login", dadosLogin)
            const token = await retornoAPI.data.token
            const usuarioDecoded = jwtDecode(token)
            setUsuario(usuarioDecoded)
            localStorage.setItem("usuario", JSON.stringify(usuarioDecoded))
            setEmail("")
            setSenha("")

            
            
        } catch (error) {
            Alerta({
                title: "Login",
                text: "Usuario nao encontrado",
                icon: "error",
                confirmButtonText: "Ok"
            })
        }
    }

    const verificaLogin = () => {
        const logado = JSON.parse(localStorage.getItem("usuario"))

        if (logado != undefined || logado == null) {
            setUsuario(logado)
            navigate("/filmes")
        }
    }

    useEffect(() => {
        verificaLogin()
        setUsuario(usuario)
    },[usuario])
    
    return(
        <main className= "main_login">
          <div className="banner"></div>
          <section className="section_login">
            <img src={Logo} alt="Logo do Filmoteca"/>
            <form action="" className="form_login" onSubmit={realizarLogin}>
                <h1>Login</h1>
                <div className="campos_login">
                    <div className="campo_input">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder="Digite seu e-mail" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                    </div>
                    <div className="campo_input">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
                    </div>
                </div>
                <Botao onClick={()=>{login()}} nomeDoBotao="Entrar"/>
            </form>
          </section>
        </main>
    )
}

export default Login;