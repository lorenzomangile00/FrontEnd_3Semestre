// import "./produtospage.css"

// const titulo = document.getElementById("titulo").value();
// const descricao = document.getElementById("descricao").value();
// const preco = document.getElementById("preco").value();
// const imagem = document.getElementById("imagem").value();

// function mostrarNaTela(objCadastro){
//     document.getElementById("cadastro").innerHTML +=
//         `<tr>
//             <td>${objCadastro.titulo}</td> 
//             <td>${objCadastro.descricao}</td> 
//             <td>${objCadastro.preco}</td> 
//             <td>${objCadastro.imagem}</td> 
//         </tr>`       
        
// }

// async function CadastrarProduto(){
//        try {
//         const retorno = await fetch("http://localhost:5713/produtos");
//         const dados = await retorno.json();

        
//          dados.sort( (a, b) => 
//           a.titulo.localeCompare(b.titulo)
//         );

//         const tabela = document.getElementById("cadastro");
//         tabela.innerHTML = ""; 

//         dados.forEach(produto => {
//             // tabela.innerHTML += `
//             //     <tr>
//             //         <td>${pessoa.nome}</td>
//             //         <td>${pessoa.altura}</td>
//             //         <td>${pessoa.peso}</td>
//             //         <td>${pessoa.IMC}</td>
//             //         <td>${pessoa.situacao}</td>
//             //     </tr>
//             // `;
//             mostrarNaTela(produto);
//         });

//     } catch (error) {
//         console.log(error);
//     alert("Carregando os dados...");
//     }
// }