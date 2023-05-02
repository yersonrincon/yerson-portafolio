import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaRoutingModule } from './experiencia-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { ExperienciaComponent } from './experiencia.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ExperienciaComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    ExperienciaRoutingModule,
    MatIconModule,
    MatCardModule,
  

  ],
 
})
export class ExperienciaModule {

 

 }
