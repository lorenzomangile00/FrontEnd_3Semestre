import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Cadastro from "../../../components/cadastro/Cadastro";
import { useEffect, useState } from "react";
import { Alerta } from "../../../components/alerta/Alerta";
import Lista from "../../../components/lista/Lista";
import api from "../../../services/services";
import Swal from "sweetalert2";


const CadastroFilme = () => {

    //states
    const [valor, setValor] = useState("");
    const [genero, setGenero] = useState("");
    const [imagem, setImagem] = useState("");
    const [idEditar, setIdEditar] = useState(0);
    const [editar, setEditar] = useState(false);
    const [listaGeneros, setListaGeneros] = useState([])
    const [listaFilmes, setListaFilmes] = useState([])

    const cadastrarFilme = async (e) => {
        e.preventDefault();
            

        if (valor.trim().length == 0) {
            Alerta({
                title: "Cadastro de Filme",
                text: "Filme deve ser preenchido antes de cadastrar!",
                icon: "warning",
                confirmButtonText: "Ok"
            })
            return false;
        }

        
        try {

            const formData = new FormData();

        formData.append("titulo", valor);
        formData.append("idGenero", genero);


            const retornoAPI = await api.post("/Filme", formData)

            if (retornoAPI.status == 201) {
                Alerta({
                    title: "Cadstro de filme",
                    text: "Filme cadastrado com sucesso",
                    icon: "success"
                })

                limparFormulario()

                getFilmes()
            } else {
                Alerta({
                    title: "Cadastro de filme",
                    text: "Erro ao cadastar o filme",
                    icon: "error"
                })
            }

        } catch (error) {
            Alerta({
                title: "Cadastro de filme",
                text: "Erro na chamada da API",
                icon: "error"
            })

            console.log(error);

        }

        return false;
    }

    useEffect(() => {
        getFilmes(),
            getGeneros()
    }, [])

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
        setIdEditar(item.idFilme);
        setValor(item.titulo);
        setEditar(true);
        console.log(item);
    }

    const editarFilme = async (e) => {
        e.preventDefault();


    }

    const excluirFilme = async (item) => {
        const result = await Swal.fire({
            title: "Cadastro de filme",
            text: `Deseja realmente apagar o filme (${item.titulo})`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })

        if (!result.isConfirmed) {
            return
        }

        try {
            await api.delete(`/Filme/${item.idFilme}`)

            setListaFilmes(novaLista)

            Alerta({})
        } catch (error) {

        }
    }

    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero")
            const dados = retornoAPI.data
            setListaGeneros(...listaGeneros, dados)
        } catch (error) {
            console.log(error);

        }
    }

    const getFilmes = async () => {
        try {
            const retornoAPI = await api.get("/Filme")
            const dados = retornoAPI.data
            setListaFilmes(...listaFilmes, dados)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filme"

                    placeholder="filme"
                    valor={valor}

                    setValor={setValor}
                    genero={genero}
                    setGenero={setGenero}
                    setImagem={setImagem}
                    funcCadastro={editar ? editarFilme : cadastrarFilme}
                    btnEditar={editar}

                    listaGeneros={listaGeneros}
                />

                <Lista
                    tituloLista="Lista de Filmes"
                    lista={listaFilmes}
                    tipoLista="filme"
                    funcExcluir={excluirFilme}
                    funcEditar={preEditar}

                />

                <p> <strong>{valor}</strong></p>
            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme;