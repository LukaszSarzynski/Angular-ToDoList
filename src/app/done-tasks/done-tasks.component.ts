import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css']
})
export class DoneTasksComponent implements OnInit {

  @Input()
  asTaskSuccessful: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

}
