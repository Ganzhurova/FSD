class BaseDropdown {
  el;

  options;

  isOpen;

  constructor(el, options) {
    this.el = el;
    this.options = options;
    this.currentTarget = null;

    this.initialize();
  }

  initialize() {
    this.close();
    this.addEventListeners();
    this.addDataHandlers();
  }

  show() {
    this.el.classList.remove(this.options.closeClass);
    this.el.classList.add(this.options.openClass);
    this.isOpen = true;

    document.body.addEventListener('click', this.handleBodyClick);
  }

  close() {
    this.el.classList.remove(this.options.openClass);
    this.el.classList.add(this.options.closeClass);
    this.isOpen = false;

    document.body.removeEventListener('click', this.handleBodyClick);
  }

  handleTargetToggle(evt) {
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

  handleDropdownClick(evt) {
    this.currentTarget = evt.currentTarget;
  }

  handleBodyClick() {
    if (this.currentTarget === this.el) {
      this.currentTarget = null;
      return;
    }
    this.close();
    this.currentTarget = null;
  }

  addEventListeners() {
    this.handleTargetToggle = this.handleTargetToggle.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);

    this.el.addEventListener('click', this.handleTargetToggle);
    this.el.addEventListener('click', this.handleDropdownClick);
  }

  addDataHandlers() {
    if (this.el.dataset.show) {
      this.show();
    }
  }
}

export default BaseDropdown;
