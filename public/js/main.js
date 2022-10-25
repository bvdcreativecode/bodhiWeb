const typed = new Typed('.typed', {
   stringsElement: '#texto-animacion',
   typeSpeed: 75,
   startDelay: 300,
   backSpeed: 75,
   smartBackspace: true,
   shuffle: false,
   backDelay: 1500,
   loop: true,
   loopCount: false,
   showCursor: true,
   cursorChar: '|',
   contentType: 'html',
});


// MENÚ RESPONSIVE
const btnMenu = document.getElementById('btn-menu');
const ulMenu = document.querySelector('.nav-ul');
const btn = document.querySelectorAll('.nav-btn-responsive');

btnMenu.addEventListener('click', () => {
   ulMenu.classList.toggle('nav-ul-event');
   for (let i = 0; i < btn.length; i++) {
      btn[i].classList.toggle(`nav-btn-responsive-${i}`);
   }
});


// EFECTO SCROLL MENÚ
let ubicacionPrincipal = window.pageYOffset;
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
    let ubicacionActual = window.pageYOffset;
    if (ubicacionPrincipal >= ubicacionActual) {
       nav.style.top = '0px';
       ulMenu.classList.remove('nav-ul-event');
       for (let i = 0; i < btn.length; i++) {
         btn[i].classList.remove(`nav-btn-responsive-${i}`);
       }
    } else {
        nav.style.top = '-70px';
        ulMenu.classList.remove('nav-ul-event');
         for (let i = 0; i < btn.length; i++) {
            btn[i].classList.remove(`nav-btn-responsive-${i}`);
         }
    }
    ubicacionPrincipal = ubicacionActual;
});


// EFECTOS DE LAS CARDS
const cardsBtn = document.querySelectorAll('.cards-btn');

const cardsInfoOne = document.querySelector('#cards-info-one');
const cardsInfoTwo = document.querySelector('#cards-info-two');
const cardsInfoThree = document.querySelector('#cards-info-three');

const cardsDescriptOne = document.querySelector('#cards-descript-one');
const cardsDescriptTwo = document.querySelector('#cards-descript-two');
const cardsDescriptThree = document.querySelector('#cards-descript-three');

for (let j = 0; j < cardsBtn.length; j++) {
   cardsBtn[j].addEventListener('click', () => {
      if (j == 0) {
         cardsInfoOne.classList.toggle('cards-info-events');
         cardsDescriptOne.classList.toggle('cards-descript-events');
         cardsBtn[j].classList.toggle('cards-btn-event');
      } else if (j == 1) {
         cardsInfoTwo.classList.toggle('cards-info-events');
         cardsDescriptTwo.classList.toggle('cards-descript-events');
         cardsBtn[j].classList.toggle('cards-btn-event');
      } else {
         cardsInfoThree.classList.toggle('cards-info-events');
         cardsDescriptThree.classList.toggle('cards-descript-events');
         cardsBtn[j].classList.toggle('cards-btn-event');
      }
   });
}


// EFECTOS BUTTON POPUP ARRIBA
const btnUp = document.querySelector('.button-up');
let windowX = window.innerWidth;

window.onscroll = () => {
   if (windowX <= 480) {
      if (document.documentElement.scrollTop > 3900) {
         btnUp.classList.add('event-btn-up');
      } else {
         btnUp.classList.remove('event-btn-up');
      }
   } else if (windowX >= 480) {
      if (document.documentElement.scrollTop > 2600) {
         btnUp.classList.add('event-btn-up');
      } else {
         btnUp.classList.remove('event-btn-up');
      }
   }
}

btnUp.addEventListener('click', () => {
   window.scrollTo({
      top: '0',
      behavior: 'smooth'
   });
});