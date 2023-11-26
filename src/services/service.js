import {tasks} from '../mock/task.js';

export class TasksService {
    #boardTasks = tasks;
  
    getBoardTasks() {
      return this.#boardTasks;
    }
  }