import { create } from '../utils/utils';

export default class WriteUsElement {
  constructor() {
    this.container = create('div', 'w-us-container');
    this.markup = `
      <div class="w-us-form">
        <div class="w-us-cross">X</div>  
        <div class="w-us-header">Напишите нам</div>
        <textarea class="w-us-textarea"></textarea>
        <button class="w-us-send-btn">Отправить</button>
      </div>
      <div class="w-us-circle"></div>
    `;
    this.container.innerHTML = this.markup;
    this.init();
  }

  bindToDOM(parent) {
    parent.appendChild(this.container);
  }

  init() {
    const redCircle = this.container.querySelector('.w-us-circle');

    redCircle.addEventListener('mouseover', () => {
      redCircle.classList.add('w-us-circle-hover');
      redCircle.classList.remove('w-us-circle-normal');
    });
    redCircle.addEventListener('mouseout', () => {
      redCircle.classList.remove('w-us-circle-hover');
    });

    redCircle.addEventListener('click', () => {
      redCircle.classList.remove('w-us-circle-hover');
      redCircle.classList.remove('w-us-circle-normal');
      redCircle.classList.add('w-us-circle-hide');

      this.container.querySelector('.w-us-form').classList.remove('w-us-form-hidden');
      this.container.querySelector('.w-us-form').classList.add('w-us-form-shown');
    });
    this.container.querySelector('.w-us-cross').addEventListener('click', () => {
      this.container.querySelector('.w-us-form').classList.remove('w-us-form-shown');
      this.container.querySelector('.w-us-form').classList.add('w-us-form-hidden');

      redCircle.classList.remove('w-us-circle-hide');
      redCircle.classList.add('w-us-circle-normal');
    });
  }
}
