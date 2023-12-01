import {CreateTaskComponent} from './add-task.js'
import {TasksService} from '../services/service.js'
import {AbstractComponent} from './abstractcomponent.js'





const taskService = new TasksService();
const boardTasks = [...taskService.getBoardTasks()];

function createTaskTypeSectionComponentTemplate() {
    
    return AddTaskComponents();
}

const AddTaskComponents = () => {

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

function AddTask (id, text, type) {
    var component = new CreateTaskComponent({id, title: text, status : type});
    return(`${component.getTemplate()}`)
}

export class CreateTaskTypeSectionComponent extends AbstractComponent {
  getTemplate() {
    return createTaskTypeSectionComponentTemplate();
  }

}