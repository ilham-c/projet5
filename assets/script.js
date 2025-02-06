const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/*
const bannerImage = document.querySelector (".banner-img");
const bannerText = document.querySelector (".text");
const dots = document.querySelectorAll(".dot");

const arleft = document.querySelector(".arrow.arrow_left");
const arright = document.querySelector(".arrow.arrow_right");

let index = 0; 
function getslide () {
	bannerImage.src=`./assets/images/slideshow/${slides[index].image}`
	bannerText.innerHTML=slides[index].tagLine;
	dots.forEach(dots=>dots.classList.remove("dot_selected"));
	dots[index].classList.add('dot_selected');
};
getslide()


function changeSlide(direction){
	index=(index + direction + slides.length) % slides.length;
	getslide();
}

function carrousselSlide(){
	arleft.addEventListener("click",()=>changeSlide(-1));
	arright.addEventListener("click",()=>changeSlide(1));
	
}
carrousselSlide()
*/


 

let dots = document.querySelector(".dots");
let bannerImage = document.querySelector (".banner-img");
let tagLineDisplay = document.querySelector(".tagLine"); 
let currentSlideIndex = 0;


for(let i=0;i<slides.length;i++){
	console.log(slides[i])
	let dot = document.createElement("div");
	dot.classList.add("dot");
	if(i === currentSlideIndex) {
	   dot.classList.add("active");
	}
	dots.appendChild(dot);
	}
	updateSlide()


	

	function updateImage() {
		bannerImage.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`; // Met à jour l'image affichée
		tagLineDisplay.innerHTML = slides[currentSlideIndex].tagLine; // Met à jour le tagLine affiché
	}
	

	function nextSlide() {
		currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Pour aller à l'image suivante
		updateImage();
	}

	function prevSlide() {
		currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Pour aller à l'image précédente
		updateImage();
	}

	const arleft= document.getElementById("arleft")

	arleft.addEventListener("click", () =>{
	prevSlide(); 
	console.log ("Vous avez cliqué sur la flèche gauche")

	} )

	const arright= document.getElementById("arright")

	arright.addEventListener("click", () =>{
	nextSlide(); 
	console.log ("Vous avez cliqué sur la flèche droite")

	} )

	updateImage();



