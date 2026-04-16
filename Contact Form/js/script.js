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






    if (quantidadeErros > 0) {
        alert("Existem " + quantidadeErros + " erros no formulário!")
        quantidadeErros = 0;
        ;
    }else{
        alert("Formulário enviado com sucesso!");
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