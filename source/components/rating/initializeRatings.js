import Rating from './Rating';

function initializeRatings(selector) {
  const ratings = [...document.querySelectorAll(selector)];
  ratings.forEach((element) => {
    const rating = new Rating();
    rating.initialize(element);
  });
}

export default initializeRatings;
