
// 08) Crie um componente chamado Contato que receba:
// nome
// telefone
// email
// Depois:
// Crie uma lista com 5 contatos
// Exiba todos utilizando o componente

import "./contato.css";

const Contato = ({nome, email, telefone}) => {
    return (
        <>
            <h3>{nome}</h3>
            <p>Email: {email}</p>
            <p>Telefone: {telefone}</p>
        </>
    )
}
export default Contato;