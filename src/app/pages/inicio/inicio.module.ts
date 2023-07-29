import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { SidenavModule } from '../../shared/sidenav/sidenav.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterModule } from '../../shared/footer/footer.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { InicioComponent } from './inicio.component';
import { HeaderModule } from '../../shared/header/header.module';
import { NgParticlesModule } from "ng-particles";
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxSpinnerModule } from 'ngx-spinner';

export function translateHttpLoaderFactory(http: HttpClient) {

  return new TranslateHttpLoader(http, './assets/i18n/', '.json');

}
@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    HeaderModule,
    FooterModule,
    SidenavModule,
    MatSidenavModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    NgParticlesModule,
    FlexLayoutModule, 
    TooltipModule,
    NgxSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })

   
  ],
  exports:[TranslateModule,HttpClientModule,NgxSpinnerModule ],
})
export class InicioModule { }
