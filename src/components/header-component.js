import {createElement} from '../render.js';


function createHeaderComponentTemplate() {
    return (
        `<header class="header">
            <div class="header_content">
                <h1>Список задач</h1>
            </div>
         </header>`
      );
}


export class HeaderComponent {
  getTemplate() {
    return createHeaderComponentTemplate();
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
