import {createElement} from '../render.js';
function createFormAddTaskComponentTemplate() {
    return (
        `<div class="tasks_info">
					<h1>Новая задача</h1>
					<input class="input_text_task" placeholder="Напишите задачу">
					<button class="button_add">+ Добавить</button>
				</div>`
      );
}


export class FormAddTaskComponent {
  getTemplate() {
    return createFormAddTaskComponentTemplate();
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
