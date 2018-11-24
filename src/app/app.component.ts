import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bClickInputAdd: boolean;
  sNewTask: string;
  asTasks: Array<string> = [];
  asTaskSuccessful: Array<string> = [];

  addNewTask() {
    if (this.sNewTask.length > 0) {
      this.asTasks.push(this.sNewTask);
    }
    this.sNewTask = '';
  }

  removeTask(sTaskToRemove: string) {
    this.asTasks = this.asTasks.filter( sTask => sTask !== sTaskToRemove);
  }

  doneTask(sTask: string) {
    this.removeTask(sTask);
    this.asTaskSuccessful.push(sTask);
  }

}
