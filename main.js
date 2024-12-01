const title = document.querySelector('.title');

title.addEventListener('click', () =>{
  document.getElementById("intro").scrollIntoView({behavior: 'smooth'});
})

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
let currentSlideIndex = 0;

// Funktion zur Aktualisierung der Position des Karussells
function updateCarouselPosition() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
}

// Klick-Events für die Karussell-Buttons
nextButton.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateCarouselPosition();
});

prevButton.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateCarouselPosition();
});