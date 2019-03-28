class CursorPosition {
  constructor(cursor) {
    this.x = 0;
    this.y = 0;
    let lastScrollY = 0;

    document.addEventListener('mousemove', event => {
      this.x = event.pageX;
      this.y = event.pageY;
      cursor.style.left = this.x + 'px';
      cursor.style.top = this.y + 'px';
    })

    window.addEventListener('scroll', (event) => {
      let currentScrollY = window.scrollY;
      let deltaScrollY = currentScrollY - lastScrollY;
      this.y = this.y + deltaScrollY;
      cursor.style.top = this.y + 'px';
      lastScrollY = currentScrollY;
    })

    document.addEventListener('mouseenter', () => {
      cursor.style.display='block';
    })
    document.addEventListener('mouseleave', () => {
      cursor.style.display='none';
    })

  }
}

module.exports = CursorPosition