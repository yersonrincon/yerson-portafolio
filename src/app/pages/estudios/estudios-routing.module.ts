import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudiosComponent } from './estudios.component'; 

const routes: Routes = [
    {
      path:'',component:EstudiosComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EstudiosRoutingModule { }
  