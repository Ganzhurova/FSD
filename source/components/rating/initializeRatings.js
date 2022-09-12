import Rating from './Rating';

function initializeRatings(selector) {
  const ratings = [...document.querySelectorAll(selector)];
  ratings.forEach((el) => {
    const rating = new Rating();
    rating.initialize(el);
  });
}

export default initializeRatings;
