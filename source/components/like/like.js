import './like.scss';

class Like {
  constructor() {
    // this.isLiked = true;
    this.activeClass = 'like--actual';
  }

  init(el) {
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

function initLikes() {
  const likes = document.querySelectorAll('.js-like-button');
  likes.forEach(el => {
    const like = new Like();
    like.init(el);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initLikes();
});
