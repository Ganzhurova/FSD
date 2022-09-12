class Like {
  constructor() {
    this.activeClass = 'like_actual';
  }

  initialize(el) {
    this.like = el;
    this.likeValue = el.querySelector('.js-like__value');
    this.value = Number(this.likeValue.innerHTML);

    this.getLikeState();
    this.action();
  }

  getLikeState() {
    this.isLiked = !!this.like.classList.contains(this.activeClass);
  }

  action() {
    this.like.addEventListener('click', () => {
      this.value = this.isLiked ? (this.value -= 1) : (this.value += 1);
      this.like.classList.toggle(this.activeClass);
      this.isLiked = !this.isLiked;
      this.likeValue.innerHTML = this.value;
    });
  }
}

function initializeLikes() {
  const likes = document.querySelectorAll('.js-like-button');
  likes.forEach((el) => {
    const like = new Like();
    like.initialize(el);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initializeLikes();
});

export default initializeLikes;
