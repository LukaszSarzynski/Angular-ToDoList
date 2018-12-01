import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  sNewTask: string;
  @Output()
  emitNewTask = new EventEmitter<string>();


  constructor() { }

  sendNewTask() {
    this.emitNewTask.emit(this.sNewTask);
    this.sNewTask = '';
  }

  ngOnInit() {
  }

}
