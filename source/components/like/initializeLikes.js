import Like from './Like';

function initializeLikes() {
  const likes = document.querySelectorAll('.js-like');
  likes.forEach((element) => {
    const like = new Like();
    like.initialize(element);
  });
}

export default initializeLikes;
