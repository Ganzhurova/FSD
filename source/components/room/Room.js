import initSlickSlider from '../../libs/slick-slider/initSlickSlider';
import Rating from '../rating/Rating';

class Room {
  constructor(el) {
    this.el = el;
    this.rating = null;
    this.slider = null;

    this.initializeRating();
    this.initializeSlider();
  }

  initializeRating() {
    const ratingEl = this.el.querySelector('.js-rating');
    this.rating = new Rating();
    this.rating.initialize(ratingEl);
  }

  initializeSlider() {
    const sliderEl = this.el.querySelector('.js-room__slider');
    initSlickSlider(sliderEl);
  }
}

export default Room;
