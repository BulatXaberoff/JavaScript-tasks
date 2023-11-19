import {createElement} from '../render.js';
function createboardListsTaskComponentTemplate() {
    return (
        `<div class="description">
            <p class="p_backlog">Бэклог</p>
            <ul class="ul_backlog">
                <li>Выучить JS</li>
                <li>Выучить React</li>
                <li>Сделать домашку</li>
            </ul>										
        </div>
        <div class="description">
            <p class="p_process">В процессе</p>
            <ul class="ul_process">
                <li>Выпить смузи</li>
                <li>Перестать тупить</li>
            </ul>										
        </div>
        <div class="description">
            <p class="p_already">Готово</p>
            <ul class="ul_already">
                <li>Позвонить маме</li>
                <li>Погладить Кекса</li>
            </ul>										
        </div>
        <div class="description">
            <p class="p_trash">Корзина</p>
            <ul class="ul_trash">
                <li>Сходить</li>
                <li>Погладить Кекса</li>
                <li>Очистить</li>
            </ul>					
            <button class="delete_button">&#215; Очистить</button>					
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
