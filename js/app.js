const container = document.getElementById("cards-container");

cards.forEach((card, index) => {

    const col = document.createElement("div");
    col.className = "col-xl-3 col-md-4 col-sm-12";

    const coverCard = document.createElement("div");
    coverCard.className = "cover-card";

    const carouselId = `carousel-${index}`;

    coverCard.innerHTML = `
        
        <div id="${carouselId}" class="carousel slide">

            <div class="carousel-inner">

                ${card.imagens.map((imagem, slideIndex) => `
                    
                    <div class="carousel-item ${slideIndex === 0 ? "active" : ""}">
                        <img src="${imagem}" class="d-block w-100" alt="${card.titulo}">
                    </div>

                `).join("")}

            </div>


            <button class="carousel-control-prev"
                    type="button"
                    data-bs-target="#${carouselId}"
                    data-bs-slide="prev">

                <i class="bi bi-chevron-left"></i>

            </button>


            <button class="carousel-control-next"
                    type="button"
                    data-bs-target="#${carouselId}"
                    data-bs-slide="next">

                <i class="bi bi-chevron-right"></i>

            </button>


            <div class="carousel-indicators">

                ${card.card.slides.map((slide, slideIndex) => `
                    <div class="carousel-item ${slideIndex === 0 ? "active" : ""}">

                        <img src="${slide.imagem}"
                            class="d-block w-100"
                            alt="${card.titulo}">

                        <p>${slide.texto}</p>

                    </div>
                `).join("")}

            </div>

        </div>
    `;

    col.appendChild(coverCard);

    container.appendChild(col);
});