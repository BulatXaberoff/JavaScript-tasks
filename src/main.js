import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/main-add-task-component.js';
import {CreateTaskBoardComponent} from './components/add-board-tasks.js'
import {render, RenderPosition} from './render.js';




const bodyContainer = document.querySelector('.board-app');

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new CreateTaskBoardComponent(), bodyContainer);

function rerender(){
	bodyContainer.replaceChildren();
	render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
	render(new CreateTaskBoardComponent(), bodyContainer);
}

export {rerender}