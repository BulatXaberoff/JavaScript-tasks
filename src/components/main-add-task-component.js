import {createElement} from '../render.js';
import {AbstractComponent} from './abstractcomponent.js'
function createFormAddTaskComponentTemplate() {
    return (
        `<div class="tasks_info">
					<h1>Новая задача</h1>
					<input class="input_text_task" placeholder="Напишите задачу">
					<button class="button_add">+ Добавить</button>
				</div>`
      );
}


export class FormAddTaskComponent extends AbstractComponent {
  getTemplate() {
    return createFormAddTaskComponentTemplate();
  }
}
