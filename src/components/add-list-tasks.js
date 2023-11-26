import {createElement} from '../render.js';
function createboardListsTaskComponentTemplate() {
    return (
        `<div class="description">
            <p class="p_backlog">Бэклог</p>
            										
        </div>`
      );
}


export class ListsAddTaskComponent {
  getTemplate() {
    return createboardListsTaskComponentTemplate();
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
