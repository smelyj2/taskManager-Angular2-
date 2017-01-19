import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from '../../services/task-manager.service';

import {Observable} from 'rxjs/Observable';


@Component({
	moduleId: module.id,
	selector: 'main-app',
	templateUrl: 'main.html',
	styleUrls: ['main.css'],
	providers:[TaskManagerService]
})

export class MainComponent implements OnInit{
		visibilVal:boolean = true;
		curTime: Observable<Date>;
		

		constructor(private managerService:TaskManagerService){	}
		
		ngOnInit(){
			this.curTime = this.managerService.getTime();
		}

		visibilityTaskManager():void{
				this.visibilVal = this.managerService.getVisibility(this.visibilVal);
		}

		onCloseManager(close:boolean):void{
				this.visibilVal = close;
		}

	 

}