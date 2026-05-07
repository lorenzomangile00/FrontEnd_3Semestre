// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.

import "./perfil.css"

const Perfil = ({nome, idade, profissao}) => {
    return (
        <article className="container">

        <p>Nome: {nome}, 
         Idade: {idade.toFixed()}, 
        Profissão: {profissao}
        </p>
        </article>
    )
}

export default Perfil