import "./Botao.css"

const Botao = (props) => {
    return(

        <button className="botao" 
        type={props.btnEditar ? "button" : "submit"}
        //type={props.btnEditar ? "button" : "submit"}
         onClick={()=> {
            if (props.btnEditar) {
                props.funcBotao()
                return false;
            }
         }}>
            
            {props.nomeDoBotao}
            </button>

    )
}

export default Botao;