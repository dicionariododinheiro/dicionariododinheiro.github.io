const container = document.getElementById("cards-container");

cards.forEach((card, cardIndex) => {

  const carouselId = `carousel-card-${cardIndex}`;

  const totalSlides = card.slides.length + 1;

  const flashcard = document.createElement("div");

  flashcard.className = "flashcard";

  flashcard.innerHTML = `

    <div
      id="${carouselId}"
      class="carousel slide"
      data-bs-interval="false"
    >

      <div class="carousel-inner">

        <!-- CAPA -->

        <div class="carousel-item active slide-cover">

          <div class="slide-number">
            ${card.number}
          </div>

          <div class="cover-content">

            <div class="cover-image">
              <!-- imagem entra aqui depois -->
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

          <button
            class="nav-button next-button"
            data-bs-target="#${carouselId}"
            data-bs-slide="next"
          >
            →
          </button>

        </div>


        <!-- SLIDES DE CONTEÚDO -->

        ${card.slides.map((slide, slideIndex) => {

          const currentSlide = slideIndex + 2;

          const isLastSlide = currentSlide === totalSlides;

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
                >
                  ←
                </button>

                <span class="slide-counter">
                  ${currentSlide} / ${totalSlides}
                </span>

                ${
                  !isLastSlide
                    ? `
                      <button
                        class="nav-button next-button"
                        data-bs-target="#${carouselId}"
                        data-bs-slide="next"
                      >
                        →
                      </button>
                    `
                    : `
                      <div class="nav-placeholder"></div>
                    `
                }

              </div>

            </div>

          `;

        }).join("")}

      </div>

    </div>
  `;

  container.appendChild(flashcard);
});