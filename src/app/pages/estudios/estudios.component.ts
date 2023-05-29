import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from "ngx-lottie";
import { trigger, style, animate, transition, keyframes,} from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss'],
  animations: [
    trigger('grow', [
      transition('0=>1', [
        animate(
          '5s',
          keyframes([
          //  style({ transform: 'scale(1)' }),
          //  style({ transform: 'scale(1.01)' }),
          //  style({ transform: 'scale(1)' }),
            style({ transform: 'scale(1)' }),
            style({ transform: 'scale(0.8)' }),
            style({ transform: 'scale(1)' })
           
          
          ])
        ),
      ]),
    ]),
  ],
})
export class EstudiosComponent {
  
  growState = 0;
  shrinkState = 0;
  shakeState = 0;

  onGrowDone() {
    this.growState = this.growState ? 0 : 1;
  }

  onShrinkDone() {
    this.shrinkState = this.shrinkState ? 0 : 1;
  }

  angulary: AnimationOptions = {
    path: "assets/angulary.json"
   
  }
  mongo: AnimationOptions = {
    path: "assets/mongo.json"
   
  }  
  constructor( public translateService: TranslateService){
    translateService.addLangs(['en', 'es']);
    translateService.setDefaultLang('es');
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/es|en/) ? browserLang : 'en');
  }
  mybreakpoint!: number;
  iconos : { title:string, src: string}[]=[
    { title:'ANGULAR',src:'..//..//../assets/iconos/angular.png'},
  
    { title:'MYSQL',src:'..//..//../assets/iconos/mysql.png'},
    { title:'NPM',src:'..//..//../assets/iconos/npm.png'},
    { title:'ADO.NET',src:'..//..//../assets/iconos/visual.png'},
    { title:'JAVA ',src:'..//..//../assets/iconos/java.png'},
    { title:'SCSS',src:'..//..//../assets/iconos/scss.png'},
    { title:'POSTMAN',src:'..//..//../assets/iconos/postman.png'},
    { title:'VISUAL CODE',src:'..//..//../assets/iconos/visualcode.png'},
    { title:'NODE.JS',src:'..//..//../assets/iconos/node.png'},
    { title:'JS',src:'..//..//../assets/iconos/js.png'},
    { title:'DBEAVER',src:'..//..//../assets/iconos/dbeaver.png'},
    { title:'TYPESCRIPT',src:'..//..//../assets/iconos/typescript.png'},
    { title:'API REST',src:'..//..//../assets/iconos/api.png'},
    { title:'EXPRESS',src:'..//..//../assets/iconos/express.png'},
    { title:'GITHAT',src:'..//..//../assets/iconos/git.png'},
    { title:'BOOTSTRAP',src:'..//..//../assets/iconos/bootstrap.png'},
    { title:'ADOBE',src:'..//..//../assets/iconos/adobe.png'},
    { title:'MONGODB',src:'..//..//../assets/iconos/mongo.png'},
    { title:'HTML',src:'..//..//../assets/iconos/html.png'},
    { title:'POSGREST',src:'..//..//../assets/iconos/postgres.png'},
  
  
  ]

  
members: { src:string }[] = [
  {src: '..//../assets/diplomas/diploma.jpg'},
  {src: '..//../assets/diplomas/Habilidades.jpg'},
  {src: '..//../assets/diplomas/diplomacolegio.jpg'},
];


ngOnInit(): void {
  this.mybreakpoint = (window.innerWidth <= 700) ? 2 : 4;
 }
 handleSize(event:any) {
  this.mybreakpoint = (event.target.innerWidth <= 700) ? 2 : 4;
  }
   
}
