import "./cadastroGenero.css"
import Header from "../../../components/header/Header"
import Footer from "../../../components/footer/Footer"
import Cadastro from "../../../components/cadastro/Cadastro"
import Lista from "../../../components/lista/Lista"
import { useEffect, useState } from "react"
import api from "../../../services/services"

const CadastroGenero = () => {

    //states e variaveis
    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([ ])
    // ciclo de vida e funções

    const cadastrarGenero = async () => {
        
        //validando os dados preenchidos
        if (valor.trim().length == 0) {
            {
                alert("Genero deve ser preenchido antes de cadastrar!")
                return false;
            }
            
             }

            const objCadastro = {
                nome : valor
            }

            

            try {
                const retornoAPI = await api.post("/Genero", objCadastro)
                if (retornoAPI.status == 201) {
                    alert("Genero cadastrado com sucesso")
                    limparFormulario();
                } else {
                    alert("Houve algum problema ao cadastrar!")
                }
            } catch (error) {
                alert("Erro na chamada da API")
                console.log(error);
            }

       

       
       
        

        return false;

        
    }

     const limparFormulario = () => {
        setValor("");
     }

     const editarGenero = () => {
        alert("O genero foi editado");
     }

    const excluirGenero = async (item) => {
        try {
            const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)
            console.log(retornoAPI);

            getGeneros()
        } catch (error) {
            
        }
    }

    useEffect( () => {
        //chamar os dados da API
        getGeneros()
    }, [])

    const getGeneros = async () => {
        

        try {
            const retornoAPI = await api.get("/Genero")
            const dados = retornoAPI.data
            setListaGeneros(dados)
        } catch (error) {
            alert("Erro ao retornar os dados")
        }
    }

    //O jsx
    return(
        <>
        <Header/>
         <main>
            <Cadastro
                tituloCadastro="Cadastro de Gêneros"
                visibilidade="none"
                placeholder="gênero"
                valor={valor}
                // função que muda o state
                setValor={setValor}
                funcCadastro={cadastrarGenero}
             
               
            />

             <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"
                    funcExcluir = {excluirGenero}
                    funcEditar = {editarGenero}
                />

            <p>Gênero que vamos cadastrar <strong>{valor}</strong></p>
        </main>
        <Footer/>
        </>
    )
}

export default CadastroGenero