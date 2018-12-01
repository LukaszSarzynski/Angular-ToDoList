import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';
import { NewTaskComponent } from './new-task/new-task.component';
import { TodoTasksComponent } from './todo-tasks/todo-tasks.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    TodoTasksComponent,
    DoneTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
