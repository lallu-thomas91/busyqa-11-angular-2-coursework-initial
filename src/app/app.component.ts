import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){

  }
  
  task: string = '';
  tasks: string[] = [];

  show: boolean = false;
  mode: string = '';

  onAddTask(task: string){

    this.tasks.push(this.task);

    this.mode = 'added';
    this.show = true;
    setTimeout(() => {
      this.show = false}, 5000);

  }

  onRemove(i: number){

    this.tasks.splice(i,1);

    this.mode = 'removed';
    this.show = true;
    setTimeout(() => {
      this.show = false}, 5000);
      
  }


}
