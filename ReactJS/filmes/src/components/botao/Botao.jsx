import "./Botao.css"

const Botao = (props) => {
    return(

        <button className="botao" 
        //type={props.btnEditar ? "button" : "submit"}
         onClick={(e)=> {props.funcBotao(e)}}>
            
            {props.nomeDoBotao}
            </button>

    )
}

export default Botao;