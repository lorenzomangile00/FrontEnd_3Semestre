import "./App.css"
import MyComponent from "./components/children/mycomponent";
import Saudacao from "./components/exercicio01/saudacao"
import Produto from "./components/exercicio02/produto";
import Perfil from "./components/exercicio03/perfil";
import Botao from "./components/exercicio04/botao";
import Filme from "./components/exercicio05/filme";
import Aluno from "./components/exercicio06/aluno";
import { Card } from "./components/exercicio07/Card";
import Contato from "./components/exercicio08/contato";
import Jogo from "./components/exercicio09/jogo";
import ItemLoja from "./components/exercicio10/itemLoja";


const App = () => {
  const pessoas = [
    {
      id: 1,
      nome: "Lorenzo", 
      idade: 17,
      profissao: "Software Developer"
    },
    {
      id: 2,
      nome: "Prefs", 
      idade: 17,
      profissao: "CS Go Player"
    }
  ]
  return (

   
     /* <MyComponent>
      <Saudacao nome="Lorenzo"/>
      <Produto nomeProduto="Sabonete" preco={3.49} descricao="Sabonete detox"/>
    </MyComponent>  */

      // EXERCICIO 01
     <>
     <Saudacao nome="Lorenzo"/>
     <Saudacao nome="Prefeito"/>
     <Saudacao nome="Negueba"/>
     </> 


  //  EXERCICIO 02
  //  <>
  //  <Produto nomeProduto="Sabonete" preco={3.49} descricao="Sabonete detox"/>
  //  <Produto nomeProduto="Shampoo" preco={16.99} descricao="Shampoo CR7"/>
  //  <Produto nomeProduto="Condicionador" preco={11.40} descricao="Condicionador anti-queda"/>
  //  </> 

    //  EXERCICIO 03  
//     <>
//     {pessoas.map((p) => (
//     <Perfil
//     key={p.id}
//     nome={p.nome}
//     idade={p.idade}
//     profissao={p.profissao}
//   />
// ))}
  
//     <Perfil nome="Lorenzo" idade={17} profissao="Desenvolvedor de Software"/>
//      </>
    

    // EXERCICIO  04 
    // <>
    //   <Botao texto="Texto do botao" cor="green" />
    //   <Botao texto="Texto do botao" cor="red" />
    // </>

    //EXERCICIO 05
    // <>
    // <Filme titulo="Homem Aranha: Longe de Casa" ano={2019} genero="Ação/Ficção científica" nota={10}/>
    // <Filme titulo="Fale Comigo" ano={2022} genero="Terror" nota={9}/>
    // <Filme titulo="Jurassic World: O Mundo dos Dinossauros" ano={2015} genero="Ação/Ficção científica" nota={8}/>
    // </>

    //EXERCICIO 06
    // <>
    //  <Aluno nome="Lorenzo" curso="Engenharia de Software" imagem="./src/assets/react.svg" />
    //  <Aluno nome="Marcao Dev" curso="Desenvolvimento de Sistemas" imagem="./src/assets/react.svg" />
    //  <Aluno nome="Kauany" curso="Engenharia de pesca" imagem="./src/assets/react.svg" /> 
    // </>

    //EXERCICIO 07
    
    
    // <Card>
    //    <Botao texto="Texto do botao" cor="green" />
    //    <Botao texto="Texto do botao" cor="red" />
    // </Card>

    //EXERCICIO 08
  //     <Card>
  //   <Contato nome="Lorenzo" email="lorenzo@email.com" telefone="(11) 99999-9999" />
  //   <Contato nome="Joao" email="joao@email.com" telefone="(11) 99999-9999" />

  //   <Contato nome="Laura" email="laura@email.com" telefone="(11) 99999-9999" />
  //   <Contato nome="Marcao Dev" email="marcaodev@email.com" telefone="(11) 99999-9999" />
  //   <Contato nome="Negueba" email="negueba@email.com" telefone="(11) 99999-9999" />
  //  </Card> 
    
  //EXERCICIO 09

  // <>
  // <Jogo nome="Fortinite" plataforma="PC" preco={299.99} imagem="./src/assets/react.svg" />
  // <Jogo nome="GTA VI" plataforma="PlayStation 4" preco={199.99} imagem="./src/assets/react.svg" /></>

  // EXERCICIO 10
  // <>
  // <ItemLoja nome="Camiseta" preco={129.99} categoria="Roupas" estoque={100} />
  //  <ItemLoja nome="Calça" preco={189.99} categoria="Roupas" estoque={26} />
  // </>

  
  )
}

export default App;