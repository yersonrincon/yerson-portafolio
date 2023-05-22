import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescripcionComponent } from './descripcion.component';

const routes: Routes = [
  
  {
    path: '', component: DescripcionComponent,
},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DescripcionRoutingModule { }
