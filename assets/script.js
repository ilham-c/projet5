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


let dots = document.querySelector(".dots"); // J'ai créee une variable dots,je récupère tout les éléments de la class dots
let bannerImage = document.querySelector (".banner-img");// J'ai créee une variable bannerImage,je récupère tout les éléments de la class banner-img
let tagLineDisplay = document.querySelector(".tagLine");// J'ai créee une variable tagLineDisplay,je récupère tout les éléments de la class tagLine
let currentSlideIndex = 0; // J'ai créee une variable currentSlideIndex initialisée à zéro 


for(let i=0;i<slides.length;i++){ // on crée la boucle for 
	console.log(slides[i])
	let dot = document.createElement("div"); // J'ai créee une div vide
	dot.classList.add("dot"); //j'ai ajouté la class dot 
	if(i === 0) { 
	   dot.classList.add("dot_selected"); // on a ajouté à dot la class dot selected
	}
	dots.appendChild(dot); // on voudrait qu'il s'affiche dans la div dots , on à dots qu'on ajoute à cet enfant dot
	}
	


	

	function updateImage() {
		bannerImage.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`; // Met à jour l'image affichée
		tagLineDisplay.innerHTML = slides[currentSlideIndex].tagLine; // Met à jour le tagLine affiché
	}
	

	function nextSlide() {
		currentSlideIndex = (currentSlideIndex + 1) % slides.length; // c'est pour mettre en place le carroussel lorsqu'on click sur suivant
		updateImage();// On récupère la fonction updateImage afin de générer dans le carroussel les images
	}

	function prevSlide() {
		currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; //c'est pour mettre en place le carroussel lorsqu'on click sur précédent
		updateImage(); //On récupère la fonction updateImage afin de générer dans le carroussel les images
	}
	function updateDot () {
		const dots = document.getElementsByClassName("dot"); //on récupère tout les éléments de la classe dot
		for (let i=0;i<slides.length;i++){  // on crée une boucle qui va se répéter , si l'élément dots
	    if (i===currentSlideIndex){ // si i est égal à currentSlideIndex
			dots[i].classList.add("dot_selected"); // on ajoute dot selected
		}
		else{
			dots[i].classList.remove("dot_selected"); // sinon on enlève le dot selected 
		} 
		}

	}

	const arleft= document.getElementById("arleft") // J'ai crée une variable nommée arleft , elle récupère l'ID arleft

	arleft.addEventListener("click", () =>{ //On nomme l'évènement qui va se passer au click,on récupère les fonctions 
	prevSlide(); // On récupère la fonction prevSlide, elle sera utilisée ici
	updateDot ();// On récupère la fonction updateDot, elle sera utilisée ici 
	console.log ("Vous avez cliqué sur la flèche gauche")

	} )

	const arright= document.getElementById("arright") // J'ai crée une variable nommée arright , elle récupère l'ID arright

	arright.addEventListener("click", () =>{//On nomme l'évènement qui va se passer au click,on récupère les fonctions
	nextSlide();  // On récupère la fonction nextSlide, elle sera utilisée ici
	updateDot (); // On récupère la fonction updateDot, elle sera utilisée ici
	console.log ("Vous avez cliqué sur la flèche droite")

	} )

	



