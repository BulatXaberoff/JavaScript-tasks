import {CreateTaskTypeSectionComponent} from './add-list-tasks.js';
import {AbstractComponent} from './abstractcomponent.js'

const CreateTaskTypeSection = new CreateTaskTypeSectionComponent();

function createTaskBoardComponentTemplate() {
    return (
    `<div class="lists">
    ${CreateTaskTypeSection.getTemplate()}
    </div>`
    );
}

export class CreateTaskBoardComponent extends AbstractComponent{
  getTemplate() {
    return createTaskBoardComponentTemplate();
  }
}

function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
  
  
    return newElement.firstElementChild;
}