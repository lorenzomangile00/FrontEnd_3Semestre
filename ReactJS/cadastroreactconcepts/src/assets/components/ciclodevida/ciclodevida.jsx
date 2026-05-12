import { useEffect, useState } from "react"
import "./ciclodevida.css"

export default function CicloDeVida() {
    const [contador, setContador] = useState(0);
    useEffect(() => {
        //quando o componente e montado
        console.log("Componente MONTADO");

        return () => {
            console.log("Componente de DESMONTADO");
        }
    }, [])

    useEffect(() => {
        console.log("Componente ATUALIZADO");
        console.log(`Valor do contador ${contador}`);

        
    })


    return (
        <>
        <h1>Contador: {contador}</h1>
        <button onClick={() => {
            setContador(contador + 1);
        }}>Contar</button>
        </>
    )
}