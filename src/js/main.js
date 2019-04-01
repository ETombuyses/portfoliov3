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

const darkSections = document.querySelectorAll("[data-color='dark']")

function menuColorChange(section) {
  const offsetTop = section.offsetTop;
  currentScroll = window.scrollY + window.innerHeight;

  menuBurger.classList.toggle('is-white-bottom', currentScroll > offsetTop + 15);
  menuBurger.classList.toggle('is-white-top', currentScroll > offsetTop + 45);
}

darkSections.forEach(section => {

  document.addEventListener('scroll', () => {
    menuColorChange(section);
  });

  window.addEventListener('resize', () => {
    menuColorChange(section);
  });

});

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




