import { Component , OnInit} from '@angular/core';
import { TaskManagerService } from '../../services/task-manager.service';

import { Task } from '../../shared/Task';


@Component({
	moduleId: module.id,
	selector: 'manager-content',
	templateUrl: 'manager-content.html',
	styleUrls:['manager-content.css'],
	providers: [TaskManagerService]
})

export class ManagerContentComponent implements OnInit{

	tasks:Task[];
	
	constructor(private taskManagerService:TaskManagerService){}

	ngOnInit(){
		this.tasks = this.taskManagerService.getTask();
	}

	addTask(inputtask:any, currentInput:any):void{
		currentInput.value = '';
		this.taskManagerService.addTask(inputtask);
	}


	toogleTask(currentTask:any):void{
		currentTask.done = !currentTask.done;
	}
	deleteTask(currentTask:any):void{
		this.taskManagerService.deleteTask(currentTask);
	}



}