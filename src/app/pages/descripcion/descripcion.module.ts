import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescripcionComponent } from './descripcion.component';
import { DescripcionRoutingModule } from './descripcion-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateModule } from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [DescripcionComponent,],
  imports: [
    CommonModule,
    DescripcionRoutingModule,
    NgxSpinnerModule,
    MatButtonModule,
    TranslateModule
   
  ],

})
export class DescripcionModule { }
