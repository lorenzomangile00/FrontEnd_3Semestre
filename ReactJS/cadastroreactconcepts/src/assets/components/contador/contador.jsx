import { useState } from "react";
import "./contador.css";

const Contador = () => {
    const [valor, setValor] = useState(0);

    function incremento (){
        setValor(valor + 1);
    }

    function decremento(){
        setValor(valor - 1);
    }

    return (
        <>
            <p>Contagem: {valor}</p>

            <button
                onClick={() => {
                    incremento();

                    if (valor == 10) {
                        setValor(0);
                    } else {
                        setValor(valor + 1);
                    }
                }}

                 
            >
                ++
            </button>

            <button
                onClick={() => {
                    decremento();

                   if (valor <= 0) {
                    setValor(0);
                   } else {
                    setValor(valor -1);
                   }
                }}
            >
                --
            </button>
        </>
    );
};

export default Contador;