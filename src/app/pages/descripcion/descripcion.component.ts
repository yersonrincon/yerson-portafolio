import { Component, TemplateRef,OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent implements OnInit{
  modalRef!: BsModalRef;
  

  constructor( private modalService: BsModalService){

  }

    
   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    
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
  /** spinner starts on init */
  
}
  

  

}
