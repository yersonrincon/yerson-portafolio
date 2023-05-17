import { Component, TemplateRef,OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as FileSaver from 'file-saver';
import { TranslateService } from '@ngx-translate/core';

import { AnimationOptions } from "ngx-lottie";
@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent implements OnInit{
  lat: number =     4.685327068312281;
  lng: number = -74.11243024647001;
  
 
  options: AnimationOptions = {
    path: "assets/mapa.json"
    
  }
  trabajo: AnimationOptions = {
    path: "assets/trabajo.json"
    
  }

  servicios: AnimationOptions = {
    path: "assets/servicios.json"
    
   
  }
  perfil: AnimationOptions = {
    path: "assets/perfil.json",
    
  }
  estudios: AnimationOptions = {
    path: "assets/estudios.json",
    
  }
  cv: AnimationOptions = {
    path: "assets/cv.json",
    
  }


 
  curriculon: AnimationOptions = {
    path: "assets/curriculon.json",
    
  }


  

  modalRef!: BsModalRef;



  imagenes : {src:string}[]=[
    { src:"..//..//../assets/img/yersoncv.jpg"}
  ]



  constructor( private modalService: BsModalService ,public translateService: TranslateService){
    translateService.addLangs(['en', 'es']);
    translateService.setDefaultLang('es');
    
    // Get User Language from Browser
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/es|en/) ? browserLang : 'en');
  }
  switchLanguage(language: string) {
    this.translateService.use(language);
  }
    
   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{class:'modal-dialog rounded-30'});
    
 }
 

 closeVentana(): void {
  this.modalRef.hide();
}

downloadPdf() {
  //const pdfUrl ="https://drive.google.com/file/d/1Lldvlb0Soy3g9VfyE-gl4X9HkNZc-eIe/view?usp=share_link";
  const pdfUrl = './assets/cv/hojacv.pdf';
  const pdfName = "yersoncv.pdf";
  FileSaver.saveAs(pdfUrl, pdfName);
}

ngOnInit() {
 
  
}
  

}

