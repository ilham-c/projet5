const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let dots = document.querySelector(".dots");
let bannerImage = document.querySelector(".banner-img");
let tagLineDisplay = document.querySelector(".tagLine");
let currentSlideIndex = 0;

slides.forEach((slide, i) => {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) {
    dot.classList.add("dot_selected");
  }
  dots.appendChild(dot);
});

const updateImage = () => {
  const { image, tagLine } = slides[currentSlideIndex];
  bannerImage.src = `./assets/images/slideshow/${image}`;
  tagLineDisplay.innerHTML = tagLine;
};

const nextSlide = () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateImage();
};

const prevSlide = () => {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateImage();
};

const updateDot = () => {
  const dots = document.getElementsByClassName("dot");

  Array.from(dots).forEach((dot, i) => {
    dot.classList.toggle("dot_selected", i === currentSlideIndex);
  });
};

const arrowLeft = document.getElementById("arrowLeft");

arrowLeft.addEventListener("click", () => {
  prevSlide();
  updateDot();
  console.log("Vous avez cliqué sur la flèche gauche");
});

const arrowRight = document.getElementById("arrowRight");

arrowRight.addEventListener("click", () => {
  nextSlide();
  updateDot();
  console.log("Vous avez cliqué sur la flèche droite");
});
