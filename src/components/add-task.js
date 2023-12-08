function createTaskComponentTemplate(id, text, taskType) {
  return (
    changeTaskText(text, taskType)
  );
}

const changeTaskText = (text, taskType) => {

  return(`
  <li class="Task" id= "${taskType}">${text}`)
}




export class CreateTaskComponent {

#id = null;
#status = null;
#title = null;


constructor({id, title,status}){
  this.#id = id;
  this.#status = status;
  this.#title = title;
}


getTemplate() {
  return createTaskComponentTemplate(this.#id, this.#title, this.#status);
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