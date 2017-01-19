import { Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import { Task } from '../shared/Task';
import { tasks } from '../shared/taskList';


@Injectable()

export class TaskManagerService {
	curTask:Task[] = tasks;
	
	getVisibility(visibilVal:boolean):boolean{
		return visibilVal?false:true;
	}

	getTime(): Observable<Date> {
		return  Observable.interval(1000).map(x => new Date()).share();
	}

	getTask():Task[]{
		return this.curTask;
	}

	addTask(inputtask:any):void{
		inputtask = inputtask.trim();
		if(inputtask) this.curTask.push({title: inputtask, done: false});

	}
	deleteTask(currentTask:any){
		let index = this.curTask.indexOf(currentTask);
		this.curTask.splice(index,1);

	}

	clearTasks():void{
		this.curTask.splice(0, this.curTask.length);
	}

}