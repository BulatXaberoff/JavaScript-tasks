import {CreateTaskTypeSectionComponent} from './add-list-tasks.js';

const CreateTaskTypeSection = new CreateTaskTypeSectionComponent();

function createTaskBoardComponentTemplate() {
    return (
    `<div class="lists">
    ${CreateTaskTypeSection.getTemplate()}
    </div>`
    );
}

export class CreateTaskBoardComponent {
  getTemplate() {
    return createTaskBoardComponentTemplate();
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

function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
  
  
    return newElement.firstElementChild;
}