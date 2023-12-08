import {CreateTaskTypeSectionComponent} from './add-list-tasks.js';
import {AbstractComponent} from './abstractcomponent.js'
import {FormAddTaskComponent} from './main-add-task-component.js'

const CreateTaskTypeSection = new CreateTaskTypeSectionComponent();
const FormAddTaskSection = new FormAddTaskComponent();

function createTaskBoardComponentTemplate() {
    return (
    `<main class="main">
			<section class="tasks">
				${FormAddTaskSection.getTemplate()}
				<div class="lists">
					${CreateTaskTypeSection.getTemplate()}
				</div>
			</section>
		</main>`
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