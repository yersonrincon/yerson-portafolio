import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],
})
export class ExperienciaComponent  implements OnInit {
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
    { title:'visual',src:'..//..//../assets/iconos/api.png'}
  ]
 constructor(){
 }

   ngOnInit(): void {
    this.mybreakpoint = (window.innerWidth <= 700) ? 2 : 5;
   }
   handleSize(event:any) {
    this.mybreakpoint = (event.target.innerWidth <= 700) ? 2 : 5;
    }

  }

