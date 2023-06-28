import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from "ngx-lottie";
import { trigger, style, animate, transition, keyframes,} from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
 /* animations: [
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
  ],*/
})
export class EstudiosComponent {

  growState = 0;
  shrinkState = 0;
  shakeState = 0;

  /*onGrowDone() {
    this.growState = this.growState ? 0 : 1;
  }*/

  /*onShrinkDone() {
    this.shrinkState = this.shrinkState ? 0 : 1;
  }*/

  angulary: AnimationOptions = {
    path: "assets/angulary.json"
   
  }
  mongo: AnimationOptions = {
    path: "assets/mongo.json"
   
  } 
  
  herramientas :AnimationOptions= {
    path:"assets/logo.json"
  }

  constructor( public translateService: TranslateService){
    translateService.addLangs(['en', 'es']);
    translateService.setDefaultLang('es');
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/es|en/) ? browserLang : 'en');
  }
  mybreakpoint!: number;
 

  
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
