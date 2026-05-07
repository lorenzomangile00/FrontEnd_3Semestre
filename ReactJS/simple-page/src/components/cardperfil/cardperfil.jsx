import "./cardperfil.css"
import people from "../../assets/react.svg"

function Cardperfil(){
    return (

        <div className="card-perfi">
     <img 
        className="card-perfil__image" 
        src={people}
        alt="foto de perfil do usuário" /> 
    </div>

    );
}

export default Cardperfil;