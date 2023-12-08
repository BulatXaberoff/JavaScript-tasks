import {AbstractComponent} from './abstractcomponent.js'

function createHeaderComponentTemplate() {
    return (
        `<header class="header">
            <div class="header_content">
                <h1>Список задач</h1>
            </div>
         </header>`
      );
}


export class HeaderComponent extends AbstractComponent {
  getTemplate() {
    return createHeaderComponentTemplate();
  }

}
