import {CreateTaskComponent} from './add-task.js'
import {TasksService} from '../services/service.js'
import {AbstractComponent} from './abstractcomponent.js'
import {EmptyTaskComponent} from './empty-component-task.js'
import { Status } from '../const.js'

import {rerender} from '../main.js'





const taskService = new TasksService();
//const boardTasks = [...taskService.getBoardTasks()];

//function createTaskTypeSectionComponentTemplate() {
    
//    return AddTaskComponents();
//}


function inizHandlers(){
  document.querySelector(".button_add").addEventListener(`click`, formSubmitHandler.bind(this));
  document.querySelector(".delete_button").addEventListener(`click`, deleteTasksHandler.bind(this));
}

function createTaskTypeSectionComponentTemplate() {
  document.addEventListener("DOMContentLoaded", function() {
    inizHandlers();
    disableDeleteButton();
  });
  
  return AddTaskComponents();
}

function formSubmitHandler(evt) {

  const inputElement = document.querySelector(".input_text_task");
  const title = inputElement.value.trim();

  renderAfterAddingTask(title);

  inizHandlers();

  disableDeleteButton();
}

function deleteTasksHandler(evt){

  var boardTasks = [...taskService.getBoardTasks()];

  var tasksForDelete = boardTasks.find(x => x.status == Status.BACKET);

  if(!Array.isArray(tasksForDelete)){
    taskService.remove([tasksForDelete])
  }
  else{
    taskService.remove(tasksForDelete)
  }

  rerender();

  inizHandlers();

  disableDeleteButton();
}

function disableDeleteButton() {
  var boardTasks = [...taskService.getBoardTasks()];
  var tasksForDelete = boardTasks.find(x => x.status == Status.BACKET);
  if (tasksForDelete === undefined) {

    var deleteButton = document.querySelector(".delete_button");
    deleteButton.disabled = true;
    deleteButton.style.backgroundColor = "rgb(155, 22, 57)";
  }
  else{
    var deleteButton = document.querySelector(".delete_button");
    deleteButton.disabled = false;
    deleteButton.style.backgroundColor = "red";
  }
}




function AddTaskComponents() {


		var boardTasks = [...taskService.getBoardTasks()];
    var resultComponent = '';

    var BackLogComponent = `<p class="p_backlog" id = "BackLog">Бэклог</p> <ul class="ul_backlog">`;
    var InWorkComponent = `<p class="p_process" id = "InWork">В процессе</p> <ul class="ul_process">`;
    var TestingComponent = `<p class="p_already" id = "Testing">Готово</p> <ul class="ul_already">`;
    var BucketComponent = `<p class="p_trash" id = "Bucket">Корзина</p> <ul class="ul_trash">`;


    var components = [BackLogComponent, InWorkComponent, TestingComponent, BucketComponent]
    
		
		boardTasks.forEach(function callback(task){

			switch(task.status){

				case "backlog": 
					components[0] += `${AddTask(task.id, task.title, task.status)}`
					break;
				case "processing": 
					components[1] += `${AddTask(task.id, task.title, task.status)}`
					break;
				case "done": 
					components[2] += `${AddTask(task.id, task.title, task.status)}`
					break;
				case "basket": 
					components[3] += `${AddTask(task.id, task.title, task.status)}`
					break;
					
			} 
			
		})
		var statuses = Object.values(Status);
    
    for (var i = 0; i< statuses.length; i++){
      let columnIsNotEmpty = boardTasks.find(task => task.status === statuses[i])

      if(!columnIsNotEmpty){
        components[i] += `${AddEmptyTask(boardTasks.length + i, statuses[i])}`
      }
    }
    
    components[0] +=`</ul>`;
    components[1] +=`</ul>`;
    components[2] +=`</ul>`;
    components[3] +=`</ul> <button class="delete_button">&#215; Очистить</button>`;
		components.forEach(component => {
        const newElement = document.createElement('div');
        newElement.className = 'description';
        newElement.innerHTML = component;
        resultComponent += newElement.outerHTML;
    })
    
    return resultComponent;
}
function renderAfterAddingTask(text){
  taskService.create([{title:text}]);
  rerender();
}
function AddTask (id, text, type) {
    var component = new CreateTaskComponent({id, title: text, status : type});
    return(`${component.getTemplate()}`)
}
function AddEmptyTask(id, status){
  var emptyTask = new EmptyTaskComponent({id, status});
  return(`${emptyTask.getTemplate()}`)
}

export class CreateTaskTypeSectionComponent extends AbstractComponent {
  getTemplate() {
    return createTaskTypeSectionComponentTemplate();
  }

}