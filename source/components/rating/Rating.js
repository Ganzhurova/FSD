class Rating {
  constructor() {
    this.value = 0;
    this.starWidthPercent = 20;
    this.voteClassName = 'rating_vote';
  }

  initialize(element) {
    this.rating = element;
    this.active = element.querySelector('.rating__active');

    this.getValue();

    if (this.rating.classList.contains(this.voteClassName)) {
      this.actions();
    }
  }

  getValue() {
    const { rating } = this.active.dataset;

    this.value = Number(rating) || 0;
    this.setActiveWidth(this.value);
  }

  setActiveWidth(value) {
    const width = value * this.starWidthPercent;
    this.active.style.width = `${width}%`;
  }

  checkInput(inputChecked) {
    if (inputChecked) {
      this.setActiveWidth(inputChecked.value);
    } else {
      this.setActiveWidth(0);
    }
  }

  actions() {
    const labels = this.rating.querySelectorAll('.rating__item');
    let inputChecked;

    labels.forEach((label) => {
      const input = label.control;

      label.addEventListener('mouseenter', () => {
        this.setActiveWidth(input.value);
      });

      label.addEventListener('mouseleave', () => {
        this.checkInput(inputChecked);
      });

      label.addEventListener('click', () => {
        this.setActiveWidth(input.value);
        inputChecked = input;
      });
    });
  }
}

export default Rating;
