document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    let currentIndex = 0;

    function updateCarousel() {
      const translateValue = -currentIndex * (37.5) + "%";
      carousel.style.transform = "translateX(" + translateValue + ")";
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % carousel.children.length;
      updateCarousel();
    }


    setInterval(nextSlide, 3000); 
  })