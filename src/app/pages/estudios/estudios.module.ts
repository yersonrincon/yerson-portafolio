import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiosRoutingModule } from './estudios-routing.module';
import { NgParticlesModule } from "ng-particles";
import { EstudiosComponent } from './estudios.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { LottieModule } from "ngx-lottie";

import player from "lottie-web";

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [EstudiosComponent],
  imports: [
    CommonModule,
    TranslateModule,
    EstudiosRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    NgParticlesModule,
    MatGridListModule,
    LottieModule.forRoot({ player: playerFactory })
  ],

})
export class EstudiosModule { }
