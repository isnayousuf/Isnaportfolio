/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// /*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// /*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line ' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line ' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


const sr = ScrollReveal( {
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})
sr.reveal(`.home__data, .footer__container, .item, .card-wrapper`)
sr.reveal(`.home__info div`, {delay:600, origin: 'bottom', interval: 100})

sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, { origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.qualification__content, .services__card`, { interval: 100})
sr.reveal(`.qualification__content`, {interval: 100})




const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".project-listing").children;
  
for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")
  
        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }
  
    })
}

window.ityped.init(document.querySelector('.ityped'),{
  strings: ['Frontend Developer!','CSS Artist!!', 'Occassional Writer!','Self-Taught Web Developer'],
  loop: true
})


function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

let speed = 200;
let h1 = document.querySelector('.say__hi');
let delay = 100;
setTimeout(function(){
  h1.style.display = "inline-block";
  typeEffect(h1, speed);
}, delay);


const swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
   speed: 1000,
  autoplay: {
      delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});





  /*EMAILJS  contact form handling*/
  const contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        contactProject = document.getElementById('contact-project')
        contactMessage = document.getElementById('contact-message')
        sendBtn = document.getElementById('send_btn');


  const sendEmail = (e)=> {

    e.preventDefault()

    if(contactName.value === ''|| contactEmail.value=== '' || contactProject.value === '') {
      contactMessage.classList.remove('color-blue')
      contactMessage.classList.add('color-red')

      contactMessage.textContent = 'Wrie all the input fields'

    }

    // else {
      //service id / template id  /form_id / formPublic key
      // emailjs.sendForm('service_tphmlox', 'template_t6lyt1o', '#contact-form', 'Hhp-G121AyKXZZGYE')
      // .then( ()=> {
      //   contactMessage.classList.add('color-blue')
      //   contactMessage.textContent = "Message Recieved"

      //   setTimeout( ()=> {
      //     contactMessage.textContent = ''
      //   }, 5000)
      // }, (error)=> {
      //   alert('Oops! Somthing just crashed.Please try again after later')
      // })

      // Clear input fileds after sent
        contactMessage.classList.add('color-blue')
      contactMessage.textContent = "Message Recieved"
     
      contactName.value = ''
      contactEmail.value = ''
      contactProject.value = ''
      setTimeout( ()=> {
        contactMessage.textContent = ''
      }, 2000)

    }

  // }
  // contactForm.addEventListener('submit', sendEmail)
  sendBtn.addEventListener('click', sendEmail)


  //Modals

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var wordEmbedBtn = document.getElementById("word-embed-cta");
let portfolioBtn = document.getElementById('portfolio-cta')
let weatherAppBtn = document.getElementById('weather-app-cta')

let clockBtn = document.getElementById('clock-cta')

let carromBtn = document.getElementById('carrom-cta')

let pencilBtn = document.getElementById('pencil-cta')

let keyboardBtn = document.getElementById('keyboard-cta')

let phoneBtn = document.getElementById('phone-cta')

let ludoBtn = document.getElementById('ludo-cta')



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let modalData = document.getElementById('modal-info');

// When the user clicks the button, open the modal 
wordEmbedBtn.onclick = function() {
  modal.style.display = "block";
  modalData.innerHTML =  `

  <div class="projectInfoContainer">
  <div class="projectImage">
  <video src="./assets/images/wordembed.mp4" loop controls autoplay muted></video>

</div>
  <p class="projectInfo">WordEmbed is a JavaScript application that provides the details of any word selected on a webpage. The details include word orign, word meaning, pronunciation etc. WordEmbed works by embedding the script in any third party website.y</p>
  
  <div class="getCodeLink">
    <a href="https://github.com/isnayousuf/WordEmbed" class="cv__btn">View Code</a>
  </div>
  </div>
 `
}

portfolioBtn.onclick = function() {
  modal.style.display = "block";
  modalData.innerHTML = ` <div class="projectInfoContainer">

  <div class="projectImage">
  <img src="./assets/images/portfolio.png" alt="css-carrom">

  </div>
  <p class="projectInfo">The portfolio here is one of the projects I have created.This portfolio has been created using HTML, CSS and JavaScript only. This project helped me to understand my skills better.</p>
  
  <div class="getCodeLink">
    <a href="https://github.com/isnayousuf/single-page-portfolio-self" class="cv__btn">View Code</a>
  </div>
  
  </div>`
}

weatherAppBtn.onclick = function() {
  modal.style.display = "block";
  modalData.innerHTML = ` <div class="projectInfoContainer">

  <div class="projectImage">
  <img src="./assets/images/weather.png" alt="css-carrom">

  </div>
  <p class="projectInfo">This web application provides weather details of any location that is searched by the
  user. This application has been created using the openweather api.
</p>
  
  <div class="getCodeLink">
    <a href="https://github.com/isnayousuf/weather-application" class="cv__btn">View Code</a>
  </div>
  
  </div>`
}

clockBtn.onclick = function() {
  modal.style.display = "block";
  modalData.innerHTML= ` <div class="projectInfoContainer">

  <div class="projectImage">
  <video src="./assets/images/clock.mp4" loop controls autoplay muted></video>


  </div>
  <p class="projectInfo">This is also a JavaScript Project that I created while learning JavaScript. This is a simple clock.This project has been created to understand the basics of date object in JavaScript.
  </p>
  
  <div class="getCodeLink">
    <a href="https://github.com/isnayousuf/Analog_Clock" class="cv__btn">View Code</a>
  </div>
  
  </div>`
}

carromBtn.onclick = function() {
  modal.style.display = "block";
  modalData.innerHTML = 
` <div class="projectInfoContainer">

<div class="projectImage">
<img src="./assets/images/carrom.png" alt="css-carrom">
</div>
<p class="projectInfo">This is one of the CSS artwork that I created while learning
about CSS. This artwork helped me to understand the box-shadow property in an awesome way.

</p>

<div class="getCodeLink">
  <a href="https://github.com/isnayousuf/carrom_board" class="cv__btn">View Code</a>
</div>

</div>`
}

pencilBtn.onclick = function() {
  modal.style.display = "block";
  modalData.innerHTML = `<div class="projectInfoContainer">

  <div class="projectImage">
  <img src="./assets/images/pencil.png" alt="css-carrom">
  </div>
  <p class="projectInfo">This is one more  CSS artwork that I created while learning
  about CSS. This artwork helped me to understand the gradients property in depth.
  </p>
  
  <div class="getCodeLink">
    <a href="https://github.com/isnayousuf/pencil" class="cv__btn">View Code</a>
  </div>
  
  </div>`
}

keyboardBtn.onclick = function() {
  modal.style.display = "block";
  modalData.innerHTML = `

  <div class="projectInfoContainer">

  <div class="projectImage">
  <img src="./assets/images/keypad.png" alt="css-carrom">

</div>
  <p class="projectInfo">
  This is a CSS artwork that I created while learning
  about CSS. This helped me to understand the positioning and layout property in CSS.
  
  </p>
  
  <div class="getCodeLink">
    <a href="https://github.com/isnayousuf/my_keyboard" class="cv__btn">View Code</a>
  </div>
  </div>
 `
}

phoneBtn.onclick = function() {
  modal.style.display = "block";
  modalData.innerHTML = `

  <div class="projectInfoContainer">

  <div class="projectImage ludo-img">
  <img src="./assets/images/Alphabets.png" alt="css-carrom">
  </div>
  <p class="projectInfo">
  This is the CSS artwork that I created when I almost learned most of the properties. Tried to apply them in a single project so created this artwork.

  </p>
  
  <div class="getCodeLink">
    <a href="https://github.com/isnayousuf/CSS_Alphabetse" class="cv__btn">View Code</a>
  </div>
  </div>
 `
}
ludoBtn.onclick = function() {
  modal.style.display = "block";
  modalData.innerHTML = `<div class="projectInfoContainer">

  <div class="projectImage ludo-img">
  <img src="./assets/images/ludo.png" alt="css-carrom">
  
  </div>
  <p class="projectInfo watch-info">
  This is the CSS artwork that I created out of the growing love for CSS art and helped me to strengthen my CSS concepts
  
  </p>
  
  <div class="getCodeLink">
    <a href="https://github.com/isnayousuf/ludo_UI" class="cv__btn">View Code</a>
  </div>
  
  </div>`
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}