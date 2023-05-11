import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule  } from '@angular/material/list';
import { PerfilRoutingModule } from 'src/app/pages/perfil/perfil-routing.module';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from "@angular/material/toolbar";




@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
   
    PerfilRoutingModule,
    MatToolbarModule,
    
  
  ]
})
export class SidenavModule { }
