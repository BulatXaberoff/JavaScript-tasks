import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/main-add-task-component.js';
import {render, RenderPosition} from './render.js';




const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.tasks');


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer,RenderPosition.AFTERBEGIN);