const slides = [
	{
	  image: "slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  image: "slide2.jpg",
	  tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  image: "slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  image: "slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  //Fonction pour créer les points de navigation (bullets) du carrousel
  function addBulletPoints() {
	const dotsContainer = document.querySelector('.dots');
	let dot = null;
  
	slides.forEach((slide, idx) => {
	  dot = document.createElement('div');
	  dot.classList.add('dot', `dot_${idx}`);
  
	  if (idx === 0) {
		dot.classList.add('dot_selected');
	  }
  
	  dotsContainer.appendChild(dot);
	});}
	
  // Fonction pour changer la diapositive affichée
  function changeSlide(slideIndex) {
	const imageSlide = document.querySelector('.banner-img');
	const tagLineSlide = document.querySelector('#banner p');

  // Mise à jour de l'image et la légende
	imageSlide.src = './assets/images/slideshow/' + slides[slideIndex].image;
	tagLineSlide.innerHTML = slides[slideIndex].tagLine;

	//Sélection de l'index du point avec la classe "dot_selected"
	const dots = document.querySelectorAll('.dot');
	const previousDot = Array.from(dots).find(dot => dot.classList.contains('dot_selected'));
	const previousDotIndex = previousDot.classList[1].split('_')[1];
	
  // Mise à jour de la sélection des points
	dots[previousDotIndex].classList.remove('dot_selected');
	dots[slideIndex].classList.add('dot_selected');
  }
  
  // Initialisation du premier slide//
  addBulletPoints();
  changeSlide(0);

  const leftArrow = document.querySelector('.arrow_left');
  const rightArrow = document.querySelector('.arrow_right');
  
  // Ajout d'un événement de clic pour la flèche gauche
  leftArrow.addEventListener('click', () => {
	const dots = document.querySelectorAll('.dot');
	const idx = Array.from(dots).findIndex(dot => dot.classList.contains('dot_selected'));
	if (idx === 0) {
	  changeSlide(slides.length - 1);
	} else {
	  changeSlide(idx-1);
	}
  });
  // Ajout d'un événement de clic pour la flèche droite
  rightArrow.addEventListener('click', () => {
	const dots = document.querySelectorAll('.dot');
	const idx = Array.from(dots).findIndex(dot => dot.classList.contains('dot_selected'));
	if (idx === slides.length- 1) {
	  changeSlide(0);
	} else {
	  changeSlide(idx+1);
	}
  });