import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {
    //contexts - descructuring
    const { usuario, setUsuario } = useContext(UsuarioContext)//state global

    //states e variaveis
    const [novoUsuario, setNovoUsuario] = useState()//state local

    //ciclo de vida e funcoes
    //guarda o usuario no localStorage no formato JSON
    const login = () => {
        localStorage.setItem("usuario", JSON.stringify(novoUsuario))//pega o dado e coloca no storage
        setUsuario(novoUsuario)
        setNovoUsuario("")
    }

    //jsx
    return (
        <div>
            <h2>Pagina de Perfil ({usuario})</h2>

            <input 
            type="text"
            placeholder="Digite um novo usuario"
            value={novoUsuario}
            onChange={(e) => {
                setNovoUsuario(e.target.value)
            }}
            />

            <button onClick={() => {
                login()
            }}
            >Entrar</button>
            <p>Novo Usuário: <strong>{novoUsuario}</strong></p>
        </div>
    )
}

export default Perfil