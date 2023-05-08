import { Component, TemplateRef,OnInit } from '@angular/core';

import {FormBuilder,} from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent implements OnInit{
  modalRef!: BsModalRef;
  

  constructor( private modalService: BsModalService,private spinner: NgxSpinnerService){

  }

    
   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
 }
 closeVentana(): void {
  this.modalRef.hide();
}

showSpinner(){
  this.spinner.show();

  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 5000);
}

ngOnInit() {
  /** spinner starts on init */
  
}
  
imagenes: { titulo:string,descripcion:string,src:string }[]= [
  {titulo:'Nombre:',descripcion:'Yerson Hernandez Rincón',src:'..//../assets/iconos/ubicacion.png'},
  {titulo:'Titulo:',descripcion:'Tecnologo en Analisis y Desarrollo de Sistemas de Información.',src:'..//../assets/iconos/sena.png'},
  {titulo:'Ubicación:',descripcion:'Bogota DC.',src:'..//../assets/img/Captura.PNG'},
  {titulo:'Experiencia:',descripcion:'Desarrollo Web Empresa CGI.',src:'..//../assets/img/Captura.PNG'},
  
  
]
  

}
