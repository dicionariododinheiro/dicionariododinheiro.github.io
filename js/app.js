console.log("APP.JS CARREGOU");
console.log(cards);

const container = document.getElementById("cards-container");

container.innerHTML = `
    <h2>${cards[0].titulo}</h2>
    <p>${cards[0].slides[0].texto}</p>
`;