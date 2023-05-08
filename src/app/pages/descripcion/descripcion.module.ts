import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescripcionComponent } from './descripcion.component';
import { DescripcionRoutingModule } from './descripcion-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';




@NgModule({
  declarations: [DescripcionComponent,],
  imports: [
    CommonModule,
    DescripcionRoutingModule,
    NgxSpinnerModule,
  
   
  ],

})
export class DescripcionModule { }
