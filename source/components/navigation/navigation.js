import './navigation.scss';

class Navigation {
  constructor() {
    this.openedClass = 'nav--opened';
    this.closedClass = 'nav--closed';
  }

  init(el) {
    this.navigation = el;
    this.target = el.querySelector('.js-nav-toggle');

    this.actions();
  }

  show() {
    this.navigation.classList.remove(this.closedClass);
    this.navigation.classList.add(this.openedClass);
  }

  close() {
    this.navigation.classList.remove(this.openedClass);
    this.navigation.classList.add(this.closedClass);
  }

  actions() {
    this.target.addEventListener('click', () => {
      if (this.navigation.classList.contains(this.closedClass)) {
        this.show();
      } else {
        this.close();
      }
    });
  }
}

function initNavigation() {
  const nav = document.querySelector('.js-nav');

  if (nav) {
    const menu = new Navigation();
    menu.init(nav);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initNavigation();
});
