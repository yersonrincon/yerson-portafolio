import { Component,OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as saveAs from 'file-saver';


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
/*getPDF() {
  const pdfUrl = './assets/cv/hojacv.pdf';
  const pdfName = 'hojadevida.pdf';
  const file = new Blob(['Hello World!'], { type: 'application/pdf' });
  const fileURL = URL.createObjectURL(file);

  // if you want to open PDF in new tab
  window.open(fileURL);
  const a = document.createElement('a');
  a.href = fileURL;
  //a.download = pdfUrl,pdfName;
  saveAs(pdfUrl, pdfName);
  document.body.appendChild(a);
  a.click();
}*/
/*download() {
  var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "hello world.txt");
}*/


}
