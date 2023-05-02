import { Component, OnInit,ElementRef,Input,ViewChild} from '@angular/core';
import {FreeMode, SwiperOptions} from "swiper";
import {register} from 'swiper/element/bundle';
import {Swiper } from 'swiper/types';
import { Autoplay, Pagination, Navigation } from 'swiper';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})

export class ProyectosComponent implements OnInit {
    members: {title: string, subtitle: string, content: string , src: string}[] = [
    {title: 'La Pesada', subtitle: 'Subtitle', content: 'Content here',src:'..//../assets/img/proyecto2.png'},
    {title: 'Tifon', subtitle: 'Subtitle', content: 'Content here',src:'..//../assets/img/proyecto2.jpg'},
    {title: 'Spoty', subtitle: 'Subtitle', content: 'Content here',src:'..//../assets/img/proyecto1.PNG'},
    {title: 'Clima', subtitle: 'Subtitle', content: 'Content here',src:'..//../assets/img/proyecto3.jpg'},
    {title: 'Formularios', subtitle: 'Subtitle', content: 'Content here',src:'..//../assets/img/proyecto2.png'},
    {title: 'Htpp', subtitle: 'Subtitle', content: 'Content here',src:'..//../assets/img/proyecto2.png'},
  ];

  constructor() {
    }

  ngOnInit(): void {  
      register();
  }
  
}
