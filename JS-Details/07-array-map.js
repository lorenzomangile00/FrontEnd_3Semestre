const hobbies = [
    "Correr",
    "Nadar",
    "Jogar bola",
    "Viajar",
    "Lutar",
    "Conversar Muito",
    "Ler livro",
    "Academia",
    "Maratonar serie",
    "Dormir",
    "Jogar basquete"
];

//utilizado para iterar arrays e retornar um novo array, compondo um novo resultado para cada indice do array antigo, veja:

const novosHobbies = hobbies.map((hob) => {
    return `<p>${hob}</p>`;
});

console.log(novosHobbies);
