const cardSliderInner = document.querySelector(".card-slider-inner");
const cards = document.querySelectorAll(".card");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentCardIndex = 0;

prevButton.addEventListener("click", () => {
  currentCardIndex--;
  cardSliderInner.style.transform = `translateX(${currentCardIndex * -100}%)`;
});

nextButton.addEventListener("click", () => {
  currentCardIndex++;
  cardSliderInner.style.transform = `translateX(${currentCardIndex * -100}%)`;
});
