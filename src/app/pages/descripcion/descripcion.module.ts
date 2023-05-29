import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescripcionComponent } from './descripcion.component';
import { DescripcionRoutingModule } from './descripcion-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";
import { MatDialogModule } from '@angular/material/dialog';
import { AgmCoreModule } from '@agm/core';

import { NgxSpinnerModule } from 'ngx-spinner';
// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [DescripcionComponent,],
  imports: [
    CommonModule,
    DescripcionRoutingModule,
    MatButtonModule,
    NgxSpinnerModule,
    TranslateModule,
    MatDialogModule,
    LottieModule.forRoot({ player: playerFactory }),
    AgmCoreModule.forRoot({

      apiKey: 'AIzaSyDIYBi1-Q8HAFfH53Z6u3910cvULZh_poU'
    })
 

   
   
  ],


})
export class DescripcionModule { }
