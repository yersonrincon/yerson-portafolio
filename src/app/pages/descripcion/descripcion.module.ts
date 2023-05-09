import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescripcionComponent } from './descripcion.component';
import { DescripcionRoutingModule } from './descripcion-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [DescripcionComponent,],
  imports: [
    CommonModule,
    DescripcionRoutingModule,
    NgxSpinnerModule,
    MatButtonModule
   
  ],

})
export class DescripcionModule { }
