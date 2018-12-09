import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit {

  asTasks: Array<string> = [];

  constructor(private svTasksService: TasksService) {
    this.svTasksService.getObsTaskCurrent().subscribe((aTasks: string[]) => {
        this.asTasks = aTasks;
      });

  }

  ngOnInit() {
  }

  removeTask(sTask: string) {
    this.svTasksService.removeTask(sTask);
  }

  doneTask(sTask: string) {
    this.svTasksService.doneTask(sTask);
  }

}
