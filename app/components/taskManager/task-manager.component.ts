import { Component, EventEmitter, Input, Output} from '@angular/core';
import { TaskManagerService } from '../../services/task-manager.service';

@Component({
	moduleId: module.id,
	selector: 'task-manager',
	templateUrl: 'task-manager.html',
	styleUrls: ['task-manager.css'],
	providers: [TaskManagerService]
})

export class TaskManagerComponent{
	
	constructor(private taskManagerService:TaskManagerService){}

	@Input() visibility: boolean = false;
	@Output() onCloseManager = new EventEmitter<boolean>();

	closeManager(close:boolean):void{
		this.visibility = close;
		this.onCloseManager.emit(close);
		this.taskManagerService.clearTasks();
	}




}