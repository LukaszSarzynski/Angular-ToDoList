import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule]
})
export class MaterialModule { }
