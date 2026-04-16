async function CadastrarContato(objetoContato){
    console.log(objetoContato);

    const resposta = fetch("http://localhost:3000/contatos", {
        method : "POST",
        body: JSON.stringify(objetoContato),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }

    });
    return await resposta;
}



async function buscarEndereco(cep){

    // quando o cep nao vier preenchido
    if (cep.trim().length < 8) {
        alert("O CEP deve ter 8 números");
         return false;
     }

    // buscar o cep la na viaCEP

    try {
        aguardarCampos();

        let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let dados = await retorno.json();


        
        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.estado;

    } catch (error) {
        console.log(error);
    }

}

function aguardarCampos() {
    document.getElementById("rua").value = "aguarde ...";
    document.getElementById("bairro").value = "aguarde ...";
    document.getElementById("cidade").value = "aguarde ...";
    document.getElementById("estado").value = "aguarde ...";
}









function validarFormulario() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
     let email = document.getElementById("email").value;
     let number_pais = document.getElementById("number_pais").value;
     let number_estado = document.getElementById("number_estado").value;
     let number_tel = document.getElementById("number_tel").value;
     let cep = document.getElementById("cep").value;
     let rua = document.getElementById("rua").value;
     let number_casa = document.getElementById("number_casa").value;
     let bloco = document.getElementById("bloco").value;
     let bairro = document.getElementById("bairro").value;
     let cidade = document.getElementById("cidade").value;
     let estado = document.getElementById("estado").value;
     let anotacoes = document.getElementById("anotacoes").value;

    let quantidadeErros = 0;

    if(nome.trim().length == 0){
        formError("nome");
        quantidadeErros++;
        alert("O campo nome é obrigatório!");
    }else{
        reiniciaBorda("nome");
    }

    if(sobrenome.trim().length == 0){
        formError("sobrenome");
        quantidadeErros++;
    }else{
        reiniciaBorda("sobrenome");
    }


     if(email.trim().length == 0){
        formError("email");
        quantidadeErros++;
     }else{
        reiniciaBorda("email");
     }

     if(number_pais.trim().length == 0){
         formError("number_pais");
         quantidadeErros++;
     }else{
         reiniciaBorda("number_pais");
     }

     if(number_estado.trim().length == 0){
        formError("number_estado");
         quantidadeErros++;
     }else{
         reiniciaBorda("number_estado");
     }

     if(number_tel.trim().length == 0){
        formError("number_tel");
         quantidadeErros++;
     }else{
         reiniciaBorda("number_tel");
     }

     if(cep.trim().length == 0){
         formError("cep");
         quantidadeErros++;
     }else{
         reiniciaBorda("cep");
     }

     if(rua.trim().length == 0){
         formError("rua");
         quantidadeErros++;
     }else{
         reiniciaBorda("rua");
     }

     if(rua.trim().length == 0){
         formError("rua");
         quantidadeErros++;
     }else{
         reiniciaBorda("rua");
     }

     if(number_casa.trim().length == 0){
         formError("number_casa");
         quantidadeErros++;
     }else{
         reiniciaBorda("number_casa");
     }

     if(bloco.trim().length == 0){
         formError("bloco");
         quantidadeErros++;
     }else{
         reiniciaBorda("bloco");
     }

     if(bairro.trim().length == 0){
         formError("bairro");
         quantidadeErros++;
     }else{
         reiniciaBorda("bairro");
     }

     if(cidade.trim().length == 0){
         formError("cidade");
         quantidadeErros++;
     }else{
         reiniciaBorda("cidade");
     }

     if(estado.trim().length == 0){
         formError("estado");
         quantidadeErros++;
     }else{
         reiniciaBorda("estado");
     }

     if(anotacoes.trim().length == 0){
         formError("anotacoes");
         quantidadeErros++;
     }else{
         reiniciaBorda("anotacoes");
     }





    //hora cadastrar
    if (quantidadeErros > 0) {
        alert("Preencha todos os campos!")
        quantidadeErros = 0;
        
    }else{
        let objetoContato = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            number_pais: number_pais,
            number_estado: number_estado,
            number_tel: number_tel,
            cep: cep,
            rua: rua,
            number_casa: number_casa,
            bloco: bloco,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            anotacoes: anotacoes
        }

        let cadastrado = CadastrarContato(objetoContato);
        reiniciaTodasAsBordas();
    }
}

function formError(idCampo){
    document.getElementById(idCampo).style.border = "2px solid red";
}

function ReiniciaBordas(idCampo){
    document.getElementById(idCampo).style.border = "2px solid green";
}

function reiniciaBorda(idCampo){
    document.getElementById(idCampo).style.border = "transparent";
}

function reiniciaTodasAsBordas(){
    let campos = document.querySelectorAll("input, textarea");

    campos.forEach(function(campo){
        campo.style.border = "";
    });

}

function limparFormulario(){
    document.getElementById("formulario").reset();
    reiniciaTodasAsBordas();
}