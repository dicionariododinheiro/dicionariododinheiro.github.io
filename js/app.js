const container = document.getElementById("cards-container");

cards.forEach((card, cardIndex) => {

  const carouselId = `carousel-card-${cardIndex}`;
  const totalSlides = card.slides.length + 1;

  const flashcard = document.createElement("div");

  flashcard.className = "flashcard";

  flashcard.innerHTML = `

    <!-- =========================
         CAROUSEL
    ========================== -->

    <div
      id="${carouselId}"
      class="carousel slide"
      data-bs-interval="false"
    >

      <div class="carousel-inner">

        <!-- =========================
             SLIDE 1 — CAPA
        ========================== -->

        <div class="carousel-item active slide-cover">

          <div class="slide-number">
            ${card.number}
          </div>

          <div class="cover-content">

            <div class="cover-image">
            </div>

            <div class="cover-question">

              <span>
                ${card.cover.smallText}
              </span>

              <strong>
                ${card.cover.title.join("<br>")}
              </strong>

            </div>

          </div>

        </div>


        <!-- =========================
             SLIDES DE CONTEÚDO
        ========================== -->

        ${card.slides.map((slide, slideIndex) => {

          return `

            <div class="carousel-item slide-content">

              <div class="content-title">
                ${slide.title}
              </div>

              <div class="content-text">
                ${slide.text}
              </div>

            </div>

          `;

        }).join("")}

      </div>

    </div>


    <!-- =========================
         NAVEGAÇÃO — FORA DO CAROUSEL
    ========================== -->

    <div class="slide-navigation">

      <!-- VOLTAR -->

      <button
        class="nav-button back-button"
        data-bs-target="#${carouselId}"
        data-bs-slide="prev"
        aria-label="Slide anterior"
      >
        ←
      </button>


      <!-- CONTADOR -->

      <span class="slide-counter">
        1 / ${totalSlides}
      </span>


      <!-- AVANÇAR -->

      <button
        class="nav-button next-button"
        data-bs-target="#${carouselId}"
        data-bs-slide="next"
        aria-label="Próximo slide"
      >
        →
      </button>

    </div>

  `;

  container.appendChild(flashcard);


  /* =====================================================
     ATUALIZAÇÃO DA NAVEGAÇÃO
  ===================================================== */

  const carouselElement = document.getElementById(carouselId);

  const backButton = flashcard.querySelector(".back-button");
  const nextButton = flashcard.querySelector(".next-button");
  const counter = flashcard.querySelector(".slide-counter");


  carouselElement.addEventListener("slid.bs.carousel", function (event) {

    const currentSlide = event.to + 1;

    counter.textContent = `${currentSlide} / ${totalSlides}`;


    /*
     * Primeiro slide:
     * esconde o voltar
     */

    if (currentSlide === 1) {

      backButton.style.opacity = "0";
      backButton.style.pointerEvents = "none";

    } else {

      backButton.style.opacity = "1";
      backButton.style.pointerEvents = "auto";

    }


    /*
     * Último slide:
     * esconde o avançar
     */

    if (currentSlide === totalSlides) {

      nextButton.style.opacity = "0";
      nextButton.style.pointerEvents = "none";

    } else {

      nextButton.style.opacity = "1";
      nextButton.style.pointerEvents = "auto";

    }

  });

});