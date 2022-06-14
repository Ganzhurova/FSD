class BaseDropdown {
  el;

  options;

  isOpen;

  constructor(el, options) {
    this.el = el;
    this.options = options;
    this.currentTarget = null;

    this.init();
  }

  init() {
    this.close();
    this.addEventListeners();
    this.addDataHandlers();
  }

  show() {
    this.el.classList.remove(this.options.closeClass);
    this.el.classList.add(this.options.openClass);
    this.isOpen = true;

    document.body.addEventListener('click', this.handlerBodyClick);
  }

  close() {
    this.el.classList.remove(this.options.openClass);
    this.el.classList.add(this.options.closeClass);
    this.isOpen = false;

    document.body.removeEventListener('click', this.handlerBodyClick);
  }

  handlerTargetToggle(evt) {
    if (
      !this.el.contains(evt.target) ||
      !evt.target.closest(this.options.targetSelector)
    )
      return;
    if (this.isOpen) {
      this.close();
    } else {
      this.show();
    }
  }

  handlerDropdownClick(evt) {
    this.currentTarget = evt.currentTarget;
  }

  handlerBodyClick() {
    if (this.currentTarget === this.el) {
      this.currentTarget = null;
      return;
    }
    this.close();
    this.currentTarget = null;
  }

  addEventListeners() {
    this.handlerTargetToggle = this.handlerTargetToggle.bind(this);
    this.handlerBodyClick = this.handlerBodyClick.bind(this);
    this.handlerDropdownClick = this.handlerDropdownClick.bind(this);

    this.el.addEventListener('click', this.handlerTargetToggle);
    this.el.addEventListener('click', this.handlerDropdownClick);
  }

  addDataHandlers() {
    if (this.el.dataset.show) {
      this.show();
    }
  }
}

export default BaseDropdown;
