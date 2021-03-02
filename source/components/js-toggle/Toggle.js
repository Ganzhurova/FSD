class Toggle {
  constructor() {
    this.openMod = '--opened';
    this.closeMod = '--closed';
  }

  init(el) {
    this.toggle = el;
    this.target = el.querySelector('.js-toggle');
    this.className = el.dataset.name;
    this.openedClass = `${this.className}${this.openMod}`;
    this.closedClass = `${this.className}${this.closeMod}`;

    this.actions();
  }

  show() {
    this.toggle.classList.remove(this.closedClass);
    this.toggle.classList.add(this.openedClass);
  }

  close() {
    this.toggle.classList.remove(this.openedClass);
    this.toggle.classList.add(this.closedClass);
  }

  actions() {
    this.target.addEventListener('click', () => {
      if (this.toggle.classList.contains(this.closedClass)) {
        this.show();
      } else {
        this.close();
      }
    });
  }
}

function initToggle() {
  const blocks = document.querySelectorAll('.js-switchable');

  if (blocks.length > 0) {
    for (let i = 0; i < blocks.length; i += 1) {
      const block = blocks[i];
      const toggle = new Toggle();
      toggle.init(block);
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initToggle();
});
