import "./Lista.css";

import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = (props) => {
    return (
        <section className="layout_grid">
            <div className="listagem">

                <h1>{props.tituloLista}</h1>

                <hr />

                <div className="tabela">

                    <table>

                        <thead>
                            <tr className="table_cabecalho">
                                <th>Nome</th>
                                <th style={{ display: props.visibilidade }}>
                                    Gênero
                                </th>
                                <th style={{ display: props.visibilidade }}>
                                    Imagem
                                </th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>

                        <tbody>

                            {props.lista && props.lista.length > 0 ? (

                                props.lista.map((item) => (

                                    <tr
                                        className="item_lista"
                                        key={props.tipoLista === "filme"
                                            ? item.idFilme
                                            : item.idGenero}
                                    >

                                        <td data-cell="Nome">
                                            {props.tipoLista === "genero"
                                                ? item.nome
                                                : item.titulo}
                                        </td>

                                        <td
                                            data-cell="Gênero"
                                            style={{ display: props.visibilidade }}
                                        >

                                            {props.tipoLista === "filme"
                                                ? (item.idGeneroNavigation?.nome || "-")
                                                : "-"}


                                        </td>
                                        <td
                                            data-cell="Imagem"
                                            style={{ display: props.visibilidade }}
                                        >
                                            {item.imagem ? (
                                                <img
                                                    className="cartaz"
                                                    src={`https://localhost:7081/imagens/${item.imagem}`}
                                                    alt={item.titulo}
                                                    width="80"
                                                />
                                            ) : (
                                                "-"
                                            )}
                                        </td>

                                        <td data-cell="Editar">
                                            <button
                                                className="icon"
                                                onClick={() => props.funcEditar(item)}
                                            >
                                                <img
                                                    src={Editar}
                                                    alt="Caneta"
                                                />
                                            </button>
                                        </td>

                                        <td data-cell="Excluir">
                                            <button
                                                className="icon"
                                                onClick={() => props.funcExcluir(item)}
                                            >
                                                <img
                                                    src={Excluir}
                                                    alt="Lixeira"
                                                />
                                            </button>
                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>
                                    <td>Nenhum registro encontrado.</td>
                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>
            </div>
        </section>
    );
};

export default Lista;