import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MainComponent } from './components/main/main.component';
import { TaskManagerComponent } from './components/taskManager/task-manager.component';
import { ManagerContentComponent } from './components/managerContent/manager-content.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , MainComponent, TaskManagerComponent, ManagerContentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { } 
