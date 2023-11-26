import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/main-add-task-component.js';
import {CreateTaskBoardComponent} from './components/add-board-tasks.js'
// import {BoardAddTaskComponent} from './components/add-board-tasks.js';
// import {ListsAddTaskComponent} from './components/add-list-tasks.js';
// import {TaskComponent} from './components/add-task.js';
import {render, RenderPosition} from './render.js';




const bodyContainer = document.querySelector('.board-app');

const formContainer = document.querySelector('.tasks');
const boardContainer = document.querySelector('.tasks');

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer,RenderPosition.AFTERBEGIN);
render(new CreateTaskBoardComponent(), boardContainer);

// const taskBoardComponent = new BoardAddTaskComponent();
// render(taskBoardComponent, boardContainer);

// for(let i=0; i<4; i++){
//     const listComponent = new ListsAddTaskComponent();
//     render(listComponent, taskBoardComponent.getElement());
//     for(let j=0; j<3; j++){
//         render(new TaskComponent(),listComponent.getElement().querySelector('.ul_backlog'));
//     }
// }
