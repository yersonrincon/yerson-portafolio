import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as FileSaver from 'file-saver';
import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',

  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  width = 'resize window...'
  programador: AnimationOptions = {
    path: "assets/foto.json"

  }

  constructor(public translateService: TranslateService) {
    translateService.addLangs(['en', 'es']);
    translateService.setDefaultLang('es');
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/es|en/) ? browserLang : 'en');
  }
  switchLanguage(language: string) {
    this.translateService.use(language);
  }

  ngOnInit(): void {
  }

  /*downloadPdf1() {
   const pdfUrl = './assets/cv/hojacv.pdf';
   const pdfName = 'hojadevida.pdf';
   saveAs(pdfUrl, pdfName);
 
 }*/


 onWindow(evt : Event) {
  const win : Window = <Window>evt.target;
  this.width = String(win.innerWidth );
}
  downloadPdf() {
    //const pdfUrl ="https://drive.google.com/file/d/1Lldvlb0Soy3g9VfyE-gl4X9HkNZc-eIe/view?usp=share_link";
    const pdfUrl = './assets/cv/hojacv.pdf';
    const pdfName = "yersoncv.pdf";
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
