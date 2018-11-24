import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule,
    MatInputModule, MatListModule, MatTooltipModule]
})
export class MaterialModule { }
