import {AbstractComponent} from './abstractcomponent.js'

function template(id, title, info) {
    return (
        `	
          <div class="accordion-item" data-id="${id}">
            <button class="accordion-button">${title}</button>
            <div class="accordion-content">
              <p>${info}</p>
            </div>
          </div>
				`
      );
}

export class AccordionComponent extends AbstractComponent {

  #id = null;
  #title = null;
  #info = null;

  constructor(id, title, info) {
    super();
    this.#id = id;
    this.#title = title;
    this.#info = info;
  }

  getTemplate() {
    return template(this.#id, this.#title, this.#info);
  }
}
