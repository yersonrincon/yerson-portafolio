import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent {
  mybreakpoint!: number;
  iconos : { title:string, src: string}[]=[
    { title:'visual',src:'..//..//../assets/iconos/bootstrap.png'},
    { title:'fjfj',src:'..//..//../assets/iconos/mysql.png'},
    { title:'visual',src:'..//..//../assets/iconos/npm.png'},
    { title:'visual',src:'..//..//../assets/iconos/visual.png'},
    { title:'visual',src:'..//..//../assets/iconos/java.png'},
    { title:'visual',src:'..//..//../assets/iconos/visualcode.png'},
    { title:'visual',src:'..//..//../assets/iconos/scss.png'},
    { title:'visual',src:'..//..//../assets/iconos/postman.png'},
    { title:'visual',src:'..//..//../assets/iconos/node.png'},
    { title:'visual',src:'..//..//../assets/iconos/angular.png'},
    { title:'visual',src:'..//..//../assets/iconos/js.png'},
    { title:'visual',src:'..//..//../assets/iconos/api.png'},
    { title:'visual',src:'..//..//../assets/iconos/express.png'},
    { title:'visual',src:'..//..//../assets/iconos/git.png'},
    { title:'visual',src:'..//..//../assets/iconos/mongo.png'},
    { title:'visual',src:'..//..//../assets/iconos/mongo.png'},
    { title:'visual',src:'..//..//../assets/iconos/mongo.png'},
    { title:'visual',src:'..//..//../assets/iconos/mongo.png'}
  ]

members: { src:string }[] = [

  {src: '..//../assets/diplomas/Habilidades.jpg'},
  {src: '..//../assets/diplomas/Habilidades.jpg'},
  {src: '..//../assets/diplomas/Habilidades.jpg'},

  //{src: '..//../assets/diplomas/DIPLOMASENA.jpg'},
 
  
 
];


ngOnInit(): void {
  this.mybreakpoint = (window.innerWidth <= 700) ? 2 : 6;
 }
 handleSize(event:any) {
  this.mybreakpoint = (event.target.innerWidth <= 700) ? 2 : 6;
  }


   
}
