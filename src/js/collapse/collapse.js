import { create } from '../utils/utils';

export default class CollapseElement {
  constructor(text) {
    this.container = create('div', 'ce-container');
    this.markup = `
      <div class="ce-header">
        <button class="ce-button">Collapse</button>
      </div>
      <div class="ce-text ce-text-collapsed">
        <div class="ce-text-container"></div>
      </div>
      <div class="ce-bottom">
        <button class="ce-copy-button">Copy</button>
      </div>
    `;
    this.container.innerHTML = this.markup;
    this.container.querySelector('.ce-text-container').innerText = text;
    this.init();
  }

  bindToDOM(parent) {
    parent.appendChild(this.container);
  }

  init() {
    this.container.querySelector('.ce-button').addEventListener('click', () => {
      const text = this.container.querySelector('.ce-text');
      if (text.classList.contains('ce-text-collapsed')) {
        text.style.height = `${text.scrollHeight}px`;
        text.classList.toggle('ce-text-collapsed');
        text.classList.toggle('ce-text-opened');
      } else {
        text.classList.toggle('ce-text-opened');
        text.style.height = '0px';
        text.classList.toggle('ce-text-collapsed');
      }
    });
  }
}
