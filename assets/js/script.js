/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// /*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// /*=============== DARK LIGHT THEME ===============*/
// const themeButton = document.getElementById("theme-button");
// const darkTheme = "dark-theme";
// const sunIcon = document.getElementById('sun-icon')

// const selectedTheme = localStorage.getItem("selected-theme");

// const getCurrentTheme = () =>
//   document.body.classList.contains(darkTheme) ? "dark" : "light";
//     themeButton.addEventListener('click', function() {
    
//          sunIcon.style.display= "block"
//          themeButton.style.display = "none";
//     })

//     sunIcon.addEventListener('click', function(){
//       sunIcon.style.display= "none"
//       themeButton.style.display = "block";
      

//     })
  
// themeButton.addEventListener("click", () => {
//   document.body.classList.toggle(darkTheme);
//   localStorage.setItem("selected-theme", getCurrentTheme());
// });

// sunIcon.addEventListener("click", () => {
//   document.body.classList.toggle(darkTheme);
//   localStorage.setItem("selected-theme", getCurrentTheme());
// });




const themeButton = document.getElementById("theme-button");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});


const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(`.home__data, .project-card, .card-wrapper`);
sr.reveal(`.home__info div`, { delay: 600, origin: "bottom", interval: 100 });

sr.reveal(`.skills__content:nth-child(1), .about__img ,.contact__content:nth-child(1)`, {
  origin: "left",
});
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {
  origin: "right",
});
sr.reveal(`.footer__container, .banner__social `, { interval: 100, origin: "bottom", });

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".project-listing").children;

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target");

    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target == items[k].getAttribute("data-id")) {
        items[k].style.display = "block";
      }
      if (target == "all") {
        items[k].style.display = "block";
      }
    }
  });
}

window.ityped.init(document.querySelector(".ityped"), {
  strings: [
    "Frontend Developer!",
    "CSS Artist!!",
    "Occassional Writer!",
    "Self-Taught Web Developer",
  ],
  loop: true,
});

function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

let speed = 200;
let h1 = document.querySelector(".say__hi");
let delay = 100;
setTimeout(function () {
  h1.style.display = "inline-block";
  typeEffect(h1, speed);
}, delay);

const swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  speed: 1000,
  autoplay: {
    delay: 3000,
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

  breakpoints: {
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

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project");
contactMessage = document.getElementById("contact-message");
sendBtn = document.getElementById("send_btn");
let contactModal = document.getElementById('contact-modal');
let thanksMsg = document.getElementById('thanks-msg');
let closeContactBtn = document.getElementById('close-contact')
closeContactBtn.onclick = function () {
  contactModal.style.display = "none";
};
const sendEmail = (e)=> {
  e.preventDefault()
  if(contactName.value === ''|| contactEmail.value=== '' || contactProject.value === '') {
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    contactMessage.textContent = 'Wrie all the input fields'

  }

  else {
    // service id / template id  /form_id / formPublic key
    emailjs.sendForm('service_tphmlox', 'template_t6lyt1o', '#contact-form', 'Hhp-G121AyKXZZGYE')
    .then( ()=> {
    setTimeout(() => {
      contactModal.style.display = "block";
      thanksMsg.innerHTML = `
     
    <div class="thanks__container">
      <h3 class="success_msg">Form submitted successfully!!</h3>
     
      <div class="heart_div">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
      </div>
      <p>
        Thanks for initiating the conversation.
        
      </p>
        <p>I will get back to you as early as possible.</p>
   </div>
       `;
    contactMessage.textContent = "";
    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''
    sendBtn.innerHTML = `
    Send
    <svg class="send-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
    height="24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path
        d="M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z" />
    </svg>
    `
    }, 300);

    }, (error)=> {
      setTimeout(() => {
        contactModal .style.display = "block";
        thanksMsg.innerHTML = `
       
      <div class="thanks__container">
        <h3 class="error_msg">Couldn't send your message!!</h3>
       
        <div class="emoji-div">
        <img src="./assets/images/error.jpg" alt="oops message failed">
         
         </div>
        <div class="alt-div">
         <p>Here are some of the things you can try:</p>
          <ul>
          <li>
          Checking the network cables, modem and router.</li>
          <li>Reconnecting to Wi-Fi.</li>
          </ul>
           <p>Alternatively you can try to drop your message here </p>
          <div class="email-btn-container">
                                    <a href="mailto:isnayousuf77@gmail.com"
                                class="cv__btn email-btn">
                                Write to me
                                <svg class="dynamic-svg"  class="svg-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg>
                                </a>
          </div>


        </div>
          
     </div>
         `;
      sendBtn.innerHTML = `
      Send
      <svg class="send-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                    height="24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z" />
                                </svg>
      `
      }, 300);
    }) 
    sendBtn.innerHTML= `Sending..
    <svg class="dynamic-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"/></svg>
    
    `
  }

}
contactForm.addEventListener('submit', sendEmail)
sendBtn.addEventListener('click', sendEmail)















var modal = document.getElementById("myModal");
let wordEmbedBtn = document.getElementById("word-embed-cta");
let portfolioBtn = document.getElementById("portfolio-cta");
let weatherAppBtn = document.getElementById("weather-app-cta");
let clockBtn = document.getElementById("clock-cta");
let carromBtn = document.getElementById("carrom-cta");
let pencilBtn = document.getElementById("pencil-cta");
let keyboardBtn = document.getElementById("keyboard-cta");
let phoneBtn = document.getElementById("phone-cta");
let ludoBtn = document.getElementById("ludo-cta");

var span = document.getElementsByClassName("close")[0];
let modalData = document.getElementById("modal-info");

wordEmbedBtn.onclick = function () {
  modal.style.display = "block";
  modalData.innerHTML = `
  <div class="projectInfoContainer">
  <div class="projectImage">
  <video src="./assets/images/wordembed.mp4" loop controls autoplay muted></video>
</div>
  <p class="projectInfo">WordEmbed is a JavaScript application that provides the details of any word selected on a webpage. The details include word orign, word meaning, pronunciation etc. WordEmbed works by embedding the script in any third party website.y</p>
  
  <div class="getCodeLink">
    <a href="https://github.com/isnayousuf/WordEmbed" class="cv__btn">View Code</a>
  </div>
  </div>
 `;
};

portfolioBtn.onclick = function () {
  modal.style.display = "block";
  modalData.innerHTML = ` <div class="projectInfoContainer">

  <div class="projectImage">
  <img src="./assets/images/portfolio.png" alt="css-carrom">

  </div>
  <p class="projectInfo">The portfolio here is one of the projects I have created.This portfolio has been created using HTML, CSS and JavaScript only. This project helped me to understand my skills better.</p>
  
  <div class="getCodeLink">
    <a href="https://github.com/isnayousuf/single-page-portfolio-self" class="cv__btn">View Code</a>
  </div>
  
  </div>`;
};

weatherAppBtn.onclick = function () {
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
  
  </div>`;
};

clockBtn.onclick = function () {
  modal.style.display = "block";
  modalData.innerHTML = ` <div class="projectInfoContainer">

  <div class="projectImage">
  <video src="./assets/images/clock.mp4" loop controls autoplay muted></video>


  </div>
  <p class="projectInfo">This is also a JavaScript Project that I created while learning JavaScript. This is a simple clock.This project has been created to understand the basics of date object in JavaScript.
  </p>
  
  <div class="getCodeLink">
    <a href="https://github.com/isnayousuf/Analog_Clock" class="cv__btn">View Code</a>
  </div>
  
  </div>`;
};

carromBtn.onclick = function () {
  modal.style.display = "block";
  modalData.innerHTML = ` <div class="projectInfoContainer">

<div class="projectImage">
<img src="./assets/images/carrom.png" alt="css-carrom">
</div>
<p class="projectInfo">This is one of the CSS artwork that I created while learning
about CSS. This artwork helped me to understand the box-shadow property in an awesome way.

</p>

<div class="getCodeLink">
  <a href="https://github.com/isnayousuf/carrom_board" class="cv__btn">View Code</a>
</div>

</div>`;
};

pencilBtn.onclick = function () {
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
  
  </div>`;
};

keyboardBtn.onclick = function () {
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
 `;
};

phoneBtn.onclick = function () {
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
 `;
};
ludoBtn.onclick = function () {
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
  
  </div>`;
};

span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
