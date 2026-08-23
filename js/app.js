const container = document.getElementById("cards-container");


cards.forEach((card, cardIndex) => {

  const carouselId = `carousel-card-${cardIndex}`;

  const totalSlides = card.slides.length + 1;


  /* =====================================================
     CRIA O CARD
  ===================================================== */

  const flashcard = document.createElement("div");

  flashcard.className = "flashcard";


  /* =====================================================
     CRIA O CAROUSEL
  ===================================================== */

  flashcard.innerHTML = `

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

            <img
              src="${card.cover.image}"
              alt=""
              class="cover-image"
            >


            <div class="cover-question">

              <span>
                ${card.cover.smallText}
              </span>

              <strong>
                ${card.cover.title.join("<br>")}
              </strong>

            </div>

          </div>


          <button
            class="nav-button next-button"
            data-bs-target="#${carouselId}"
            data-bs-slide="next"
            aria-label="Próximo slide"
          >
            →
          </button>

        </div>


        <!-- =========================
             SLIDES DE CONTEÚDO
        ========================== -->

        ${card.slides.map((slide, slideIndex) => {

          const currentSlide = slideIndex + 2;

          return `

            <div class="carousel-item slide-content">

              <div class="content-title">
                ${slide.title}
              </div>


              <div class="content-text">
                ${slide.text}
              </div>


              <div class="slide-navigation">

                <button
                  class="nav-button back-button"
                  data-bs-target="#${carouselId}"
                  data-bs-slide="prev"
                  aria-label="Slide anterior"
                >
                  ←
                </button>


                <span class="slide-counter">
                  ${currentSlide} / ${totalSlides}
                </span>


                <button
                  class="nav-button next-button"
                  data-bs-target="#${carouselId}"
                  data-bs-slide="next"
                  aria-label="Próximo slide"
                >
                  →
                </button>

              </div>

            </div>

          `;

        }).join("")}

      </div>

    </div>

  `;


  /* =====================================================
     COLOCA O CARD NA PÁGINA
  ===================================================== */

  container.appendChild(flashcard);

});