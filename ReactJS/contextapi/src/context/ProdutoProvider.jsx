import { useContext, useState } from "react";
import { ProdutoContext } from "./ProdutoContext";
import Header from "../components/header/Header";

export const ProdutoProvider = ({children}) => {
    const [listaProdutos, setListaProdutos] = useState([])
    console.log("Produto cadastrado com sucesso!");

    return(
        
        <ProdutoContext.Provider
        value={{
            listaProdutos, setListaProdutos
        }}
        >
            {children}
        </ProdutoContext.Provider>
    )

}