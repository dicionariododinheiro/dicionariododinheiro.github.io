const container = document.getElementById("cards-container");

cards.forEach((card, cardIndex) => {

    const col = document.createElement("div");
    col.className = "col-xl-3 col-md-4 col-sm-12";

    const coverCard = document.createElement("div");
    coverCard.className = "cover-card";

    const carouselId = `carousel-${cardIndex}`;

    coverCard.innerHTML = `

        <div id="${carouselId}" class="carousel slide">

            <!-- SLIDES -->

            <div class="carousel-inner">

                ${card.slides.map((slide, slideIndex) => `

                    <div class="carousel-item ${slideIndex === 0 ? "active" : ""}">

                        <img
                            src="${slide.imagem}"
                            class="d-block w-100"
                            alt="${card.titulo}"
                        >

                        <p>
                            ${slide.texto}
                        </p>

                    </div>

                `).join("")}

            </div>


            <!-- SETA ESQUERDA -->

            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#${carouselId}"
                data-bs-slide="prev">

                <i class="bi bi-chevron-left"></i>

            </button>


            <!-- SETA DIREITA -->

            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#${carouselId}"
                data-bs-slide="next">

                <i class="bi bi-chevron-right"></i>

            </button>


            <!-- BOLINHAS -->

            <div class="carousel-indicators">

                ${card.slides.map((_, slideIndex) => `

                    <button
                        type="button"
                        data-bs-target="#${carouselId}"
                        data-bs-slide-to="${slideIndex}"
                        class="${slideIndex === 0 ? "active" : ""}">
                    </button>

                `).join("")}

            </div>

        </div>
    `;

    col.appendChild(coverCard);

    container.appendChild(col);
});