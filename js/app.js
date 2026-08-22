const container = document.getElementById("cards-container");

cards.forEach((card, cardIndex) => {

    const col = document.createElement("div");
    col.className = "";

    const coverCard = document.createElement("div");
    coverCard.className = "cover-card";

    const carouselId = `carousel-${cardIndex}`;

    coverCard.innerHTML = `

        <div class="navigation-card">
                    <!-- SLIDES -->

            <div class="carousel-inner">

                ${card.slides.map((slide, slideIndex) => {

                    let conteudoSlide = "";

                    if (slide.tipo === "capa") {

                        conteudoSlide = `

                            <div class="slide-content slide-capa">

                                <!-- CABEÇALHO -->

                                <div class="carousel-header">

                                    <span class="carousel-title">
                                        ${card.titulo}
                                    </span>

                                </div>

                                <img
                                    src="${slide.imagem}"
                                    alt="${slide.titulo}"
                                >

                                <div class="slide-text">
                                    <span class="slide-subtitulo">
                                        ${slide.subtitulo}
                                    </span>
                                    <h2>${slide.titulo}</h2>

                                </div>

                            </div>

                        `;

                    } else if (slide.tipo === "texto") {

                        conteudoSlide = `

                            <div class="slide-content slide-texto">

                                <p>
                                    ${slide.texto}
                                </p>

                            </div>

                        `;

                    }

                    return `

                        <div class="carousel-item ${slideIndex === 0 ? "active" : ""}">

                            ${conteudoSlide}

                        </div>

                    `;

                }).join("")}

            </div>


            <!-- SETA ESQUERDA -->

            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#${carouselId}"
                data-bs-slide="prev">

                <i class="bi bi-chevron-left"></i>

            </button>

            <span class="carousel-counter">
            1/${card.slides.length}
            </span>


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

        <div id="${carouselId}" class="carousel slide">
        </div>
    `;


    container.appendChild(col);

    col.appendChild(coverCard);


    // CONTADOR 1/5 → 2/5 → 3/5

    const carousel = document.getElementById(carouselId);

    carousel.addEventListener("slide.bs.carousel", event => {

        const counter = carousel.querySelector(".carousel-counter");

        counter.textContent =
            `${event.to + 1}/${card.slides.length}`;

    });

});