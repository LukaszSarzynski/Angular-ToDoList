import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularTodoModule } from 'angular-todo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularTodoModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
