import "./cadastroGenero.css"
import Header from "../../../components/header/Header"
import Footer from "../../../components/footer/Footer"
import Cadastro from "../../../components/cadastro/Cadastro"
import Lista from "../../../components/lista/Lista"
import { useEffect, useState } from "react"
import api from "../../../services/services"
import Swal from "sweetalert2"
import { Alerta } from "../../../components/alerta/Alerta"

const CadastroGenero = () => {

    //states e variaveis
    const [valor, setValor] = useState("");
    const [idEditar, setIdEditar] = useState(0);
    const [editar, setEditar] = useState(false);
    const [listaGeneros, setListaGeneros] = useState([ ])
    // ciclo de vida e funções

    const cadastrarGenero = async(e) => {
        e.preventDefault(); 
       
        
        //validando os dados preenchidos
        if (valor.trim().length == 0) {
             Alerta({
                title: "Cadastro de Gênero",
                text: "Gênero deve ser preenchido antes de cadastrar!",
                icon: "warning",
                confirmButtonText: "Ok"
            })
                //  Swal.fire({
                //         title: "Cadastro de gênero",
                //         text: `Preencha todos os campos!`,
                //         icon: "warning",
                //     })
                // alert("Genero deve ser preenchido antes de cadastrar!")
                return false;
            }

            const objCadastro = {
                nome : valor
            }

            

            try {
                const retornoAPI = await api.post("/Genero", objCadastro)
                if (retornoAPI.status == 201) {
                   

                    Alerta({
                        title: "Cadastro de gênero",
                        text: `Genero (${objCadastro.nome})cadastrado com sucesso`,
                        icon: "success",
                        confirmButtonText: "Ok"
                    })
                    
                    limparFormulario();

                    getGeneros()
                } else {
                     Alerta({
                        title: "Cadastro de gênero",
                        text: "Houve um problema na API",
                        icon: "error",
                        confirmButtonText: "Ok"
                    })
                }
            } catch (error) {
                Alerta({
                        title: "Cadastro de gênero",
                        text: "Erro ao cadastrar na API",
                        icon: "error",
                        confirmButtonText: "Ok"
                    })
                console.log(error);
            }

        
    }

     const limparFormulario = () => {
        setValor("");
        setEditar(false)
        setIdEditar(0)
     }

     const cancelarEdicao = () => {
        limparFormulario()
        setEditar(false)
     }
     

     const preEditar = (item) => {
        setIdEditar(item.idGenero);
        setValor(item.nome);
        setEditar(true);
        console.log(item);
     }

     const editarGenero = async (e) => {
        
        
        // alert(`Agora sim: Gênero: ${valor} | Id: ${idEditar}`);


            const objEditar = {
                nome : valor,
                idGenero : idEditar
            }

            

            try {
                const retornoAPI = await api.put (`/Genero/${idEditar}`, objEditar)
                if (retornoAPI.status == 204) {
                    Alerta({
                        title: "Cadastro de gênero",
                        text: `Genero (${objEditar.nome}) editado com sucesso`,
                        icon: "success",
                        confirmButtonText: "Ok"
                    })
                    limparFormulario();
                    getGeneros()
                } else {
                    Alerta({
                        title: "Cadastro de gênero",
                        text: "Houve um problema na API",
                        icon: "error",
                        confirmButtonText: "Ok"
                    })
                }
            } catch (error) {
                Alerta({
                        title: "Cadastro de gênero",
                        text: "Erro ao editar na API",
                        icon: "error",
                        confirmButtonText: "Ok"
                    })
                console.log(error);
            }

     }

    const excluirGenero = async (item) => {
        const result = await Swal.fire({
            title: "Cadastro de genero",
            text: `Deseja realmente apagar o gênero (${item.nome})`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })

        if (!result.isConfirmed) {
            return false
        }
  
        try {
            const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)
            
            if (retornoAPI.status == 204 || retornoAPI.status == 200) {
                console.log(retornoAPI);
                Alerta({
                        title: "Cadastro de gênero",
                        text: `Genero apagado com sucesso`,
                        icon: "success",
                        confirmButtonText: "Ok"
                    })
                getGeneros();
            }

            getGeneros()
        } catch (error) {
            Alerta({
                        title: "Cadastro de gênero",
                        text: "Erro ao apagar na API",
                        icon: "error",
                        confirmButtonText: "Ok"
                    })
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
            const generosOrdenados = dados.sort((a, b) => a.nome.localeCompare(b.nome))
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
                cancelarEdicao={cancelarEdicao}
                setValor={setValor}
                funcCadastro={editar ? editarGenero : cadastrarGenero}
                btnEditar={editar}
               
            />

            <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"
                    funcExcluir = {excluirGenero}
                    funcEditar = {preEditar}
            />

            <p><strong>{valor}</strong></p>
        </main>
        <Footer/>
        </>
    )
}

export default CadastroGenero