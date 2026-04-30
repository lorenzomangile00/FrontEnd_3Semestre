//Utilizado para filtrar um elemento dentro de um array. Retorno apenas o encontrado, veja:
const numeros = [5, 10, 14, 5, 10, 12, 10, 7];

const numeroEncontrado = numeros.filter((n)=>{
    return n == 10;
});

const nomes = ["Walyson", "Davi", "Loras", "Joao", "Hugo", "Matheus", "Paulo", "Gusta", "Marcos", "Luis", "Gabriel", "Negueba", "Gords", "Nat"];

//nomes com ate 3 letras ou exatamente 6 letras
// pessoasLegais = nomes.filter((nome)=>{
//     return nome.length <= 3 || nome.length == 6;
// });

//  console.log(pessoasLegais);

pessoasLetraN = nomes.filter((nome)=>{
    const primeiraLetra = nome.substring(0,1);//comeca no caracter zero e tras somente 1 caracter
    return primeiraLetra == "N" || primeiraLetra == "L";
});

 console.log(pessoasLetraN);
