import {AbstractComponent} from './abstractcomponent.js';

function createEmptyTaskComponentTemplate(id, taskType) {
    return (
      changeTaskText(taskType)
    );
}

const changeTaskText = (taskType) => {

		return(
		`<li class="Task" id="${taskType}">Нет задач`
		)
}


export class EmptyTaskComponent extends AbstractComponent{

  #id = null;
  #status = null;


  constructor({id, status}){
    super();
    this.#id = id;
    this.#status = status;

  }

  getTemplate() {
    return createEmptyTaskComponentTemplate(this.#id, this.#status);
  }
}