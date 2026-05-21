import "./Botao.css"

const Botao = (props) => {
    return(

        <button className="botao" type="button" onClick={props.funcCadastro}>{props.nomeDoBotao}</button>

    )
}

export default Botao;