import { create } from '../utils/utils';

export default class LikerElement {
  constructor() {
    this.container = create('div', 'liker-container');
    this.markup = `
      <button class="liker-button">Like
         <div class="liker-sky"></div>
      </button>
    `;
    this.container.innerHTML = this.markup;
    this.init();
  }

  bindToDOM(parent) {
    parent.appendChild(this.container);
  }

  init() {
    const sky = this.container.querySelector('.liker-sky');
    this.container.querySelector('.liker-button').addEventListener('click', () => {
      const newHeart = create('div', 'liker-heart');
      const way = Math.floor(Math.random() * 4) + 1;
      newHeart.classList.add(`liker-heart-fly-${way}`);
      sky.appendChild(newHeart);
      newHeart.addEventListener('animationend', (e) => {
        e.target.remove();
      });
    });
  }
}
