async function calcular() {
    //pehgar os valores dos campos

    const nome = document.getElementById("nome").value.trim();
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    //verificar se tem campo sem preencher

    if (nome.length == 0 || isNaN(altura) || isNaN(peso)) {
        alert("Preencha todos os campos!");
        return false;
    }

    //calcular o imc
    const IMC = calcularIMC(peso, altura);

    //gerar o texto da stiuação
    const situacao = gerarSituacao(IMC);



    //gerar um objeto JS com os dados
    const objIMC = {
        nome: nome,
        altura: altura,
        peso: peso,
        IMC: IMC,
        situacao: situacao
    }
    //cadastrar na API
    const dadosGravados = await cadastrarNaAPI(objIMC);
    console.log(dadosGravados);

    if ("error" in dadosGravados) {
        alert(dadosGravados.error)
    } else {
        mostrarNaTela(dadosGravados);
    }

    //mostrar no html(INSERIR A LINHA DA TABELA)
    
}

async function carregarCadastros(){
     try {
        const retorno = await fetch("http://localhost:3000/imc");
        const dados = await retorno.json();

        
         dados.sort( (a, b) => 
          a.nome.localeCompare(b.nome)
        );

        const tabela = document.getElementById("cadastro");
        tabela.innerHTML = ""; 

        dados.forEach(pessoa => {
            mostrarNaTela(pessoa);
        });

    } catch (error) {
        console.log(error);
    alert("Carregando os dados...");
    }
}

async function cadastrarNaAPI(objCadastro) {
    try {
        const retorno = await fetch("http://localhost:3000/imc", {
            method: "POST",
            body: JSON.stringify(objCadastro),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        const dadosGravados = await retorno.json();
        return await dadosGravados;

    } catch (error) {
        console.log(error);
        return {
            error: "Problemas para gravar na API"
        }
            
    }
}


function mostrarNaTela(objCadastro) {

    document.getElementById("cadastro").innerHTML +=
        `<tr>
                     <th>${objCadastro.nome}</th>
                    <th>${objCadastro.altura}</th>
                     <th>${objCadastro.peso}</th>
                     <th>${objCadastro.IMC.toFixed(2)}</th>
                    <th>${objCadastro.situacao}</th>
      </tr>`;
}







function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Menor que 16 – Magreza grave;
// 16 a menor que 17 – Magreza moderada;
// 17 a menor que 18,5 – Magreza leve;
// 18,5 a menor que 25 – Saudável;
// 25 a menor que 30 – Sobrepeso;
// 30 a menor que 35 – Obesidade Grau I;
// 35 a menor que 40 – Obesidade Grau II (considerada severa);
// Maior que 40 – Obesidade Grau III (considerada mórbida).

//a funcao devera retornar o texto da stiuacao baseada no IMC
function gerarSituacao(IMC) {
    if (IMC < 16) {
        return "Magreza grave";
    }
    else if (IMC < 17) {
        return "Magreza moderada";
    }
    else if (IMC < 18.5) {
        return "Magreza leve";
    }
    else if (IMC < 25) {
        return "Saudável";
    }
    else if (IMC < 30) {
        return "Sobrepeso";
    }
    else if (IMC < 35) {
        return "Obesidade Grau I";
    }
    else if (IMC < 40) {
        return "Obesidade Grau II (considerada severa)";
    }
    else {
        return "Obesidade Grau III (considerada mórbida)";
    }
}