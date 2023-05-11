import {   NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [ProyectosComponent],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    TranslateModule
  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectosModule { 
  
}
