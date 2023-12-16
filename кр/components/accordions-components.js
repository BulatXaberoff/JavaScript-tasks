import {AbstractComponent} from './abstractcomponent.js'
import { AccordionComponent } from './accordion-component.js'
import {content} from '../mock/task.js'

const accordionsArr = [];
for (const c of content) { 
  const obj = new AccordionComponent(c.id, c.title, c.info);
  accordionsArr.push(obj.getTemplate());
}

function template(items) {
  return items;
}

export class AccordionsComponent extends AbstractComponent {

  #items = null;

  constructor() {
    super();
    this.#items = accordionsArr.join('');
  }

  getTemplate() {
    return template(this.#items);
  }


}
