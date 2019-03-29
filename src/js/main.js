/* --------------  Custom cursor ------------------ */
var CursorPosition = require('./cursor.js');

let cursor = document.querySelector('.cursor');
let cursorPos = new CursorPosition(cursor);



/* ------------- Flipcard on mouseover -------------- */

const flipcard = document.getElementById('flipcard');
const flipcardInner = flipcard.querySelector('.flipcard__inner');

setTimeout( () => {
  flipcardInner.classList.add('to-back');
}, 1000);

document.addEventListener('mousemove', () => {
  
  flipcard.addEventListener('mouseover', () => {
    flipcardInner.classList.toggle('to-back');
  });

});

flipcard.addEventListener('click', () => {
  flipcardInner.classList.toggle('to-back');
});
