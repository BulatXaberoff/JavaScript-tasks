import {createElement} from '../render.js';
function createboardAddTaskComponentTemplate() {
    return (
        `<div class="lists">
        </div>`
      );
}


export class BoardAddTaskComponent {
  getTemplate() {
    return createboardAddTaskComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
}
  removeElement() {
    this.element = null;
  }
}
