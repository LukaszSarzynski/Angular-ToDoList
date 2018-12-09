import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  sNewTask: string;

  constructor(private sTasksService: TasksService) { }

  sendNewTask() {
    this.sTasksService.addNewTask(this.sNewTask);
    this.sNewTask = '';
  }

  ngOnInit() {
  }

}
