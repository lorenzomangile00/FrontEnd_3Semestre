import { useState } from "react";
import Contador from "./assets/components/contador/contador";
import CadFruta from "./assets/components/cadFruta/cadfruta";
import CicloDeVida from "./assets/components/ciclodevida/ciclodevida";

  function App  (){
    const [mostrar, setMostrar] = useState(true)//controla se o componente sera mostrado na tela
    //obj privado
    const [nome, setNome] = useState("Google")

    function trocarTexto(){
      setNome("Mircosoft")
    }

    function fuiAbandonado (){
      setNome("input foi abandoando")
    }

    return (
      <>
        {/* <h1>{nome} pages</h1>
        <button onClick={trocarTexto}>Mudar texto</button>
        <button onClick={() =>{
          return setNome("Yahoo")
        }}>Mudar texto</button>

        <br />
        {/* evento - quem disparou o evento change */}
        {/* target - quem disparou p evento change */}
        {/* value - valor do input que disparou o evento change */}
        {/* <input type="text" onBlur={fuiAbandonado} onChange={(evento) => setNome(evento.target.value)}/>

        <Contador /> */ }
        {/* <CadFruta/> */}
        <button onClick={() => {
          setMostrar(!mostrar);
        }}>Mostrar / Ocultar</button>
        {mostrar && <CicloDeVida/>}
        </>

      
        
    )
  }

  export default App;
