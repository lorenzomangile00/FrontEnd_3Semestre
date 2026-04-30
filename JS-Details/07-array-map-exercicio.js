const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    800,
    500,
    9876,
    99,
    134

];

console.log(`Array original: ${numeros}`);


//rodar o map gerando um novo array com o dobro dos numeros do original
const dobro = numeros.map((num) => {
    return num * 2;
});


console.log(`Array Modificado:`);
console.log();//pula linha


//apos, exiba o valores do array dobro no console ultilizando o foreach
let textoResultado = "";
dobro.forEach((num) => {
    textoResultado += `${num} | `
    console.log(num);
});



// document.getElementById("demo").innerHTML += str.substring(0,str.length - 1);

// texto = textoResultado.slice(0, -3);

// console.log(texto);
textoResultado = textoResultado.substring(0, textoResultado.length -2);
console.log(textoResultado);
