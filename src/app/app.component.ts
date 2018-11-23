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

  addNewTask() {
    if (this.sNewTask.length > 0) {
      this.asTasks.push(this.sNewTask);
    }
    console.log(this.asTasks);
    this.sNewTask = '';
  }
}
