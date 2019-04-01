/* --------------  Custom cursor ------------------*/
var CursorPosition = require('./cursor.js');

let cursor = document.querySelector('.cursor');
let cursorPos = new CursorPosition(cursor);


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
// const lightSections = document.querySelectorAll("[data-color='light']");


function menuColorChange(section) {
  const offsetTop = section.offsetTop;
  const height = section.offsetHeight;
  let currentScroll = window.scrollY + window.innerHeight;
  
  if (offsetTop < currentScroll && currentScroll < offsetTop + 46 + height) {
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

function showTitle(title) {
  const offsetTop = title.parentNode.offsetTop;
  let currentScroll = window.scrollY + window.innerHeight;

  if (currentScroll > offsetTop + 200) {
    title.classList.add('is-showed');
  }
}

for (let i=0; i < titles.length; i++) {
  document.addEventListener('scroll', () => {
    showTitle(titles[i]);
  });
}

/* ------------- Flipcard on mouseover and click -------------- */

// to fix : not allow click for mouse devices ? 

const flipcard = document.getElementById('flipcard');
const flipcardInner = flipcard.querySelector('.flipcard__inner');

setTimeout( () => {
  flipcardInner.classList.add('to-back');
}, 1000)

flipcard.addEventListener('click', () => {
  flipcardInner.classList.toggle('to-back');
});

flipcard.addEventListener('mouseover', () => {
  flipcardInner.classList.toggle('to-back');
});




