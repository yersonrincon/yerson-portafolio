import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';


const routes: Routes = [
  {
  path: '', component: InicioComponent,
  children: [
    
    { 
      path: 'perfil', loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilModule) 
    },
    {
      path: 'proyectos',loadChildren: () => import('../proyectos/proyectos.module').then(m=> m.ProyectosModule)
    },
    {
      path: 'experiencia',loadChildren: () => import('../experiencia/experiencia.module').then(m=> m.ExperienciaModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
