import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  asTasks: Array<string> = [];
  asTaskSuccessful: Array<string> = [];

  getNewTask(sNewTask: string) {
    if (sNewTask.length > 0) {
      this.asTasks.push(sNewTask);
    }
  }

  removeTask(sTaskToRemove: string) {
    this.asTasks = this.asTasks.filter( sTask => sTask !== sTaskToRemove);
  }

  doneTask(sTask: string) {
    this.removeTask(sTask);
    this.asTaskSuccessful.push(sTask);
  }

}
