import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/main-add-task-component.js';
import {BoardAddTaskComponent} from './components/add-board-tasks.js';
import {ListsAddTaskComponent} from './components/add-list-tasks.js';
import {render, RenderPosition} from './render.js';




const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.tasks');
const boardContainer = document.querySelector('.tasks');
const listsContainer = document.querySelector('.lists');


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer,RenderPosition.AFTERBEGIN);
render(new BoardAddTaskComponent(), boardContainer,RenderPosition.BEFOREEND);
render(new ListsAddTaskComponent(), listsContainer,RenderPosition.BEFOREEND);
