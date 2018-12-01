import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit {

  @Input()
  asTasks: Array<string> = [];
  @Output()
  emitTaskToRemove = new EventEmitter<string>();
  @Output()
  emitTaskToDone = new EventEmitter<string>();



  constructor() { }

  ngOnInit() {
  }

  removeTask(sTask: string) {
    this.emitTaskToRemove.emit(sTask);
  }

  doneTask(sTask: string) {
    this.emitTaskToDone.emit(sTask);
  }

}
