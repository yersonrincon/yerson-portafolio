import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [ PerfilComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    PdfViewerModule,
    MatIconModule,
    MatTooltipModule,
    TranslateModule,
    LottieModule.forRoot({ player: playerFactory })
 
  ]
})
export class PerfilModule { }
