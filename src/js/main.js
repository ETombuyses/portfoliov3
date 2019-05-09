/* --------------  Custom cursor ------------------*/
var CursorPosition = require('./cursor.js');

let cursor = document.querySelector('.cursor');
let cursorPos = new CursorPosition(cursor);


/* --------------  force page position top after page reload ------------------*/

window.onbeforeunload = function() { 
  window.scrollTo(0,0); 
}


/* --------------  Menu opening ------------------*/

const menu = document.getElementById('menu');
const menuArea = document.getElementById('menuArea');
const menuClickArea = document.getElementById('menuClickArea');
const menuBurger = document.getElementById('menuBurger');
const main = document.getElementById('main');

menuClickArea.addEventListener('click', () => {
  menu.classList.toggle('is-open');
  menuArea.classList.toggle('is-open');
  menuBurger.classList.toggle('is-open');
});

main.addEventListener('click', () => {
  menu.classList.remove('is-open');
  menuArea.classList.remove('is-open');
  menuBurger.classList.remove('is-open');

})

/* ------------- Menu color -------------- */

const darkSections = document.querySelectorAll("[data-color='dark']");

const menuColorChange = section => {
  const offsetTop = section.offsetTop;
  const height = section.offsetHeight;
  const home = document.getElementById('home');
  let currentScroll = window.scrollY + window.innerHeight;

  if (currentScroll <= home.offsetHeight) {
    menuBurger.classList.remove('is-white-top');
    menuBurger.classList.remove('is-white-bottom');
  }

  else if (offsetTop < currentScroll + 200 && currentScroll < offsetTop + 200 + height) {
    menuBurger.classList.toggle('is-white-bottom', currentScroll > offsetTop + 15 && currentScroll < offsetTop + 15 + height);
    menuBurger.classList.toggle('is-white-top', currentScroll > offsetTop + 45 && currentScroll < offsetTop + 45 + height);
  }
}


for (let i=0; i < darkSections.length; i++) {
  document.addEventListener('scroll', () => {
    menuColorChange(darkSections[i]);
  });
}

for (let i=0; i < darkSections.length; i++) {
  window.addEventListener('resize', () => {
    menuColorChange(darkSections[i]);  
  });
}

/* ------------- title animation on scroll -------------- */

const titles = document.querySelectorAll('.title');
let mainTitle = document.querySelector('.home__title');


const showTitle = title => {
  const offsetTop = title.parentNode.offsetTop;
  let currentScroll = window.scrollY + window.innerHeight;

  if (currentScroll > offsetTop + 100) {
    title.classList.add('is-showed');
  }
}

const showTitleOnResize = title => {
  showTitle(title);
  
  document.addEventListener('scroll', () => {
    showTitle(title);
  });
}

for (let i=0; i < titles.length; i++) {
  showTitleOnResize(titles[i]);
}
showTitleOnResize(mainTitle);


/* ------------- Flipcard on mouseover and click -------------- */

// to fix : not allow click for mouse devices ? 



const flipcard = document.getElementById('flipcard');
const flipcardInner = flipcard.querySelector('.flipcard__inner');

setTimeout( () => {
  flipcardInner.classList.add('to-back');
}, 1000);


setTimeout( () => {
  flipcard.addEventListener('click', () => {
    flipcardInner.classList.toggle('to-back');
  });
  
  flipcard.addEventListener('mouseover', () => {
    flipcardInner.classList.toggle('to-back');
  });
}, 3000);



