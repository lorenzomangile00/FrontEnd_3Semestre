import './App.css'
import Paragrafo from './components/paragrafo/paragrafo';
import Title from './components/title/title';

function App() {
  return (
    <>
      <Title nome="Lorenzo" sobrenome="Mangile" texto="Bem Vindo, sou Título"/>
      <Title texto="Eu sou outro titulo"/>
      <Paragrafo textoParagrafo="Esse é o paragrafo"/>
    </>
  );
};

export default App
//criar um componente title