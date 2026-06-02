import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {
    //contexts - descructuring
    const { usuario, setUsuario } = useContext(UsuarioContext)//state global

    //states e variaveis
    const [novoUsuario, setNovoUsuario] = useState()//state local

    //ciclo de vida e funcoes

    //jsx
    return (
        <div>
            <h2>Pagina de Perfil ({usuario})</h2>

            <input 
            type="text"
            placeholder="Digite um novo usuario"
            onChange={(e) => {
                setNovoUsuario(e.target.value)
            }}
            />

            <button onClick={() => {
                setUsuario(novoUsuario)
            }}
            >Trocar Usuário</button>
            <p>Novo Usuário: <strong>{novoUsuario}</strong></p>
        </div>
    )
}

export default Perfil