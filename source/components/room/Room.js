import initSlickSlider from '../../libs/slick-slider/initSlickSlider';
import Rating from '../rating/Rating';

class Room {
  constructor(element) {
    this.element = element;
    this.rating = null;
    this.slider = null;

    this.initializeRating();
    this.initializeSlider();
  }

  initializeRating() {
    const ratingElement = this.element.querySelector('.js-rating');
    this.rating = new Rating();
    this.rating.initialize(ratingElement);
  }

  initializeSlider() {
    const sliderElement = this.element.querySelector('.js-room__slider');
    initSlickSlider(sliderElement);
  }
}

export default Room;
