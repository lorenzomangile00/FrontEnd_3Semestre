import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Cadastro from "../../../components/cadastro/Cadastro";
import { useEffect, useState } from "react";
import { Alerta } from "../../../components/alerta/Alerta";
import Lista from "../../../components/lista/Lista";
import api from "../../../services/services";
import Swal from "sweetalert2";

const CadastroFilme = () => {

    const [valor, setValor] = useState("");
    const [genero, setGenero] = useState("");
    const [imagem, setImagem] = useState("");
    const [idEditar, setIdEditar] = useState(0);
    const [editar, setEditar] = useState(false);
    const [listaGeneros, setListaGeneros] = useState([]);
    const [listaFilmes, setListaFilmes] = useState([]);

    const cadastrarFilme = async (e) => {
        e.preventDefault();

        if (valor.trim().length === 0) {
            Alerta({
                title: "Cadastro de Filme",
                text: "Filme deve ser preenchido antes de cadastrar!",
                icon: "warning",
                confirmButtonText: "Ok"
            });
            return false;
        }

        if (genero === "") {
            Alerta({
                title: "Cadastro de Filme",
                text: "Selecione um gênero",
                icon: "warning",
                confirmButtonText: "Ok"
            });
            return false;
        }

        try {

            const formData = new FormData();

            formData.append("Nome", valor);
            formData.append("IdGenero", genero);

            if (imagem) {
                formData.append("Imagem", imagem);
            }

            console.log("Nome:", valor);
            console.log("Gênero:", genero);

            const retornoAPI = await api.post("/Filme", formData);

            if (retornoAPI.status === 201) {
                Alerta({
                    title: "Cadastro de filme",
                    text: "Filme cadastrado com sucesso",
                    icon: "success"
                });

                limparFormulario();
                getFilmes();

            } else {
                Alerta({
                    title: "Cadastro de filme",
                    text: "Erro ao cadastrar o filme",
                    icon: "error"
                });
            }

        } catch (error) {

            Alerta({
                title: "Cadastro de filme",
                text: "Erro na chamada da API",
                icon: "error"
            });

            console.log(error);
        }

        return false;
    };

    useEffect(() => {
        getFilmes();
        getGeneros();
    }, []);

    const limparFormulario = () => {
        setValor("");
        setGenero("");
        setEditar(false);
        setIdEditar(0);
    };

    const cancelarEdicao = () => {
        limparFormulario();
    };

    const preEditar = (item) => {
        setIdEditar(item.idFilme);
        setValor(item.titulo);
        setGenero(item.idGenero || "");
        setEditar(true);

        console.log(item);
    };

    const editarFilme = async (e) => {
        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append("Nome", valor);
            formData.append("IdGenero", genero);

            if (imagem) {
                formData.append("Imagem", imagem);
            }

            const retornoAPI = await api.put(
                `/Filme/${idEditar}`,
                formData
            );

            if (retornoAPI.status === 204) {

                Alerta({
                    title: "Cadastro de filme",
                    text: "Filme atualizado com sucesso",
                    icon: "success"
                });

                limparFormulario();
                getFilmes();
            }

        } catch (error) {

            console.log(error);

            Alerta({
                title: "Cadastro de filme",
                text: "Erro ao atualizar filme",
                icon: "error"
            });
        }
    };

    const excluirFilme = async (item) => {

        const result = await Swal.fire({
            title: "Cadastro de filme",
            text: `Deseja realmente apagar o filme (${item.titulo})`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (!result.isConfirmed) {
            return;
        }

        try {

            await api.delete(`/Filme/${item.idFilme}`);

            getFilmes();

            Alerta({
                title: "Cadastro de filme",
                text: "Filme excluído com sucesso",
                icon: "success"
            });

        } catch (error) {
            console.log(error);
        }
    };

    const getGeneros = async () => {
        try {

            const retornoAPI = await api.get("/Genero");
            const dados = retornoAPI.data;

            setListaGeneros(dados);

        } catch (error) {
            console.log(error);
        }
    };

    const getFilmes = async () => {
        try {

            const retornoAPI = await api.get("/Filme");
            const dados = retornoAPI.data;
            console.log(dados);

            setListaFilmes(dados);

        } catch (error) {
            console.log(error);
        }
    };

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
                    cancelarEdicao={cancelarEdicao}
                    listaGeneros={listaGeneros}
                />

                <Lista
                    tituloLista="Lista de Filmes"
                    lista={listaFilmes}
                    tipoLista="filme"
                    funcExcluir={excluirFilme}
                    funcEditar={preEditar}
                />

                <p>
                    <strong>{valor}</strong>
                </p>

            </main>

            <Footer />
        </>
    );
};

export default CadastroFilme;