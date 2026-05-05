import './App.css';

function App(){
  return(
    

    <nav class="mae">
      <a class="menu__item">Home</a>
        <a class="menu__item">Quem somos</a>
        <a class="menu__item">Contato</a>
        <a class="menu__item menu__item--success">Entrar</a>
        <a class="menu__item menu__item--button-default">Cadastrar</a>

         {/* // --componente/bloco-- */}
    <div class="card-perfil">
        {/* //--elemento/element-- */}
        <img class="card-perfil__image"
        src="./images/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671134.avif"
        alt="foto de perfil do usuario"/>
    </div>
    </nav>

  );
}

export default App;