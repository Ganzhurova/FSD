import Rating from '../rating/Rating';
import initSlickSlider from '../../libs/slick-slider/initSlickSlider';

class Room {
  constructor(el) {
    this.el = el;
    this.rating = null;
    this.slider = null;

    this.initRating();
    this.initSlider();
  }

  initRating() {
    const ratingEl = this.el.querySelector('.js-rating');
    this.rating = new Rating();
    this.rating.init(ratingEl);
  }

  initSlider() {
    const sliderEl = this.el.querySelector('.js-slider');
    initSlickSlider(sliderEl);
  }
}

export default Room;
