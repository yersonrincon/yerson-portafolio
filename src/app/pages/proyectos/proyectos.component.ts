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
    {title: 'La Pesada', subtitle: 'Subtitle', content: 'Content here',src:'..//../assets/img/Captura.PNG'},
    {title: 'Spotyapp', subtitle: 'Subtitle', content: 'Content here',src:'..//../assets/img/Captura4.PNG'},
    {title: 'Adminpro', subtitle: 'Subtitle', content: 'Content here',src:'..//../assets/img/Captura6.PNG'},
    {title: 'Htpp', subtitle: 'Subtitle', content: 'Content here',src:'..//../assets/img/proyecto2.png'},
    {title: 'Peliculas', subtitle: 'Subtitle', content: 'Content here',src:'..//../assets/img/Captura8.PNG'},
    {title: 'Tifon', subtitle: 'Subtitle', content: 'Content here',src:'..//../assets/img/Captura1.PNG'},
  ];

  constructor() {
    }

  ngOnInit(): void {  
      register();
  }
  
}
