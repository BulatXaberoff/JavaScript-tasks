export class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`It's AbstractComponent, we dont need to create them!`);
    }
    this._element = null;
  }
  getTemplate() {
    throw new Error(`It's AbstractComponent method, please implement it! `);
  }

	
	createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
    return newElement.firstElementChild;
}

  getElement() {
    if (!this.element) {
      this.element = this.createElement(this.getTemplate());
    }
    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
