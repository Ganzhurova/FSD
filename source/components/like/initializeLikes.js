import Like from './Like';

function initializeLikes() {
  const likes = document.querySelectorAll('.js-like');
  likes.forEach((el) => {
    const like = new Like();
    like.initialize(el);
  });
}

export default initializeLikes;
