import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  sNewTask: string;

  constructor(private svTasksService: TasksService) { }

  sendNewTask() {
    this.svTasksService.addNewTask(this.sNewTask);
    this.sNewTask = '';
  }

  ngOnInit() {
  }

}
