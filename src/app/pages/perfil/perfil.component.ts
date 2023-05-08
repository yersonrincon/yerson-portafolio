import { Component,OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',

  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {



  ngOnInit(): void {
  }

 /*downloadPdf1() {
  const pdfUrl = './assets/cv/hojacv.pdf';
  const pdfName = 'hojadevida.pdf';
  saveAs(pdfUrl, pdfName);
 

}*/

downloadPdf() {
    //const pdfUrl ="https://drive.google.com/file/d/1Lldvlb0Soy3g9VfyE-gl4X9HkNZc-eIe/view?usp=share_link";
    const pdfUrl = './assets/cv/hojacv.pdf';
    const pdfName = "yersoncv.pdf";
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
