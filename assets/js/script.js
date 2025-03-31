let index = 0;
const slides = document.getElementsByClassName("slides");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

setInterval(showSlides, 4000); // Cambia cada 2 segundos
showSlides(); // Muestra la primera imagen al iniciar