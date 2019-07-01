import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  asTasks: Array<string> = [];
  asTaskSuccessful: Array<string> = [];

  obsTaskCurrent = new Subject<Array<string>>();
  obsTaskSuccessful = new Subject<Array<string>>();

  constructor() { }

  addNewTask(sNewTask: string) {
    if (sNewTask.length > 0) {
      this.asTasks.push(sNewTask);
      this.obsTaskCurrent.next(this.asTasks);
    }
  }

  removeTask(sTaskToRemove: string) {
    this.asTasks = this.asTasks.filter( sTask => sTask !== sTaskToRemove);
    this.obsTaskCurrent.next(this.asTasks);
  }

  doneTask(sTask: string) {
    this.removeTask(sTask);
    this.asTaskSuccessful.push(sTask);
    this.obsTaskSuccessful.next(this.asTaskSuccessful);
  }

  getObsTaskCurrent(): Observable<Array<string>> {
    return this.obsTaskCurrent.asObservable();
  }

  getObsTaskSuccessful(): Observable<Array<string>> {
    return this.obsTaskSuccessful.asObservable();
  }

}
