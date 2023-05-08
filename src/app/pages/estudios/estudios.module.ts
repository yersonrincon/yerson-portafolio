import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiosRoutingModule } from './estudios-routing.module';
import { EstudiosComponent } from './estudios.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [EstudiosComponent],
  imports: [
    CommonModule,
    EstudiosRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
   
  ],

})
export class EstudiosModule { }
