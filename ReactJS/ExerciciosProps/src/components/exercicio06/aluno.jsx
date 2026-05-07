// 06) Crie um componente chamado Aluno que receba:
// nome
// curso
// imagem
// Exiba:
// A imagem do aluno
// O nome
// O curso

import "./aluno.css"

const Aluno = (props) => {
    return (
        <div className="card-aluno">

            <img src={props.imagem} alt={props.nome} />

            <h3>{props.nome}</h3>

            <p>{props.curso}</p>

        </div>
    )
}

export default Aluno