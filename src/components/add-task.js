import {createElement} from '../render.js';
function createboardListsTaskComponentTemplate() {
    return (
        `<ul class="ul_backlog">
            <li>Выучить JS</li>
        </ul>`
      );
}


export class TaskComponent {
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
