const container = document.getElementById("cards-container");

cards.forEach(card => {

    const col = document.createElement("div");

    col.className = "col-xl-3 col-md-4 col-sm-12";

    col.innerHTML = `
        <div class="cover-card">

            <h2>${card.titulo}</h2>

            <img src="${card.slides[0].imagem}" alt="${card.titulo}">

            <p>${card.slides[0].texto}</p>

        </div>
    `;

    container.appendChild(col);
});