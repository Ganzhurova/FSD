class BaseDropdown {
  element;

  options;

  isOpen;

  constructor(element, options) {
    this.element = element;
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
    this.element.classList.remove(this.options.closeClass);
    this.element.classList.add(this.options.openClass);
    this.isOpen = true;

    document.body.addEventListener('click', this.handleBodyClick);
  }

  close() {
    this.element.classList.remove(this.options.openClass);
    this.element.classList.add(this.options.closeClass);
    this.isOpen = false;

    document.body.removeEventListener('click', this.handleBodyClick);
  }

  handleTargetToggle(evt) {
    if (
      !this.element.contains(evt.target) ||
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
    if (this.currentTarget === this.element) {
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

    this.element.addEventListener('click', this.handleTargetToggle);
    this.element.addEventListener('click', this.handleDropdownClick);
  }

  addDataHandlers() {
    if (this.element.dataset.show) {
      this.show();
    }
  }
}

export default BaseDropdown;
