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

for (let i = 0; i < slides.length; i++) {
  console.log(slides[i]);
  let dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) {
    dot.classList.add("dot_selected");
  }
  dots.appendChild(dot);
}

function updateImage() {
  bannerImage.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
  tagLineDisplay.innerHTML = slides[currentSlideIndex].tagLine;
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateImage();
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateImage();
}
function updateDot() {
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    if (i === currentSlideIndex) {
      dots[i].classList.add("dot_selected");
    } else {
      dots[i].classList.remove("dot_selected");
    }
  }
}

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
