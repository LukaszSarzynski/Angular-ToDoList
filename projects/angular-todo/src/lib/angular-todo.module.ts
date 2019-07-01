import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { NgModule } from '@angular/core';
import { AngularTodoComponent } from './angular-todo.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TodoTasksComponent } from './todo-tasks/todo-tasks.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';

@NgModule({
  declarations: [AngularTodoComponent, NewTaskComponent, TodoTasksComponent, DoneTasksComponent],
  imports: [MaterialModule, FormsModule,  BrowserModule, BrowserAnimationsModule],
  exports: [AngularTodoComponent, MaterialModule]
})
export class AngularTodoModule {}
