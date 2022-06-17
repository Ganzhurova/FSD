import Rating from './Rating';

function initRatings(selector) {
  const ratings = [...document.querySelectorAll(selector)];
  ratings.forEach((el) => {
    const rating = new Rating();
    rating.init(el);
  });
}

export default initRatings;
