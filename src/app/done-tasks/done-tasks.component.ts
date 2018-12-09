import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css']
})
export class DoneTasksComponent implements OnInit {

  asTaskSuccessful: Array<string> = [];

  constructor(private svTasksService: TasksService) {
    this.svTasksService.getObsTaskSuccessful().subscribe( (aTasks: string[]) => {
      this.asTaskSuccessful = aTasks;
    });
   }

  ngOnInit() {
  }

}
