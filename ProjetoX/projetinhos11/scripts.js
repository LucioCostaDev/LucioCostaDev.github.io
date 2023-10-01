const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

// vai ser utilizado o for each para percorrer cada item utilizando arrow 
galleryItems.forEach((item) => {
  // criado evento de clique e cada um com seu evento pessoal 
  item.addEventListener("click", () => {
    // aqui e uma forma de pegar pelo date-src 
    const imageUrl = item
      .querySelector(".gallery-image")
      // get pegar 
      .getAttribute("data-src");
    lightboxImage.setAttribute("src", imageUrl);
    lightbox.style.display = "flex";
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});
