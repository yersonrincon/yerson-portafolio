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
    members: {title: string, descripcion: string, content: string , src: string ,url:string}[] = [
    {title: 'La Pesada', url:'https://github.com/yersonrincon/front-lapesada', content: 'Content here',src:'..//../assets/img/Captura.PNG',
     descripcion: 'Es un sistema de inventario para almacenes de repuestos de maquinaria pesada desarrollado en ANGULAR NODE JS con base de datos en POSGREST.'},
    {title: 'Spotyapp', url:'https://github.com/yersonrincon/spoty-app',content: 'Content here',src:'..//../assets/img/Captura4.PNG',
     descripcion: 'Es una aplicación que consume un servicio de Spotify donde nos trae información de lo más escuchado por los usuarios en la app.'},
    {title: 'Adminpro', url:'https://github.com/yersonrincon/adminpro-front', content: 'Content here',src:'..//../assets/img/Captura6.PNG',
     descripcion: 'Sistema de registro de médicos y hospitales con gráficas de notificaciones  desarrollado en ANGULAR NODE JS y base de datos en MONGODB'},
    {title: 'Tifon',  url:'https://github.com/yersonrincon/tifon-front', content: 'Content here',src:'..//../assets/img/Captura1.PNG',
    descripcion: 'Sistema de contror de ventas para lavaderos de autos nos  muestra en tiempo real las ventas que se an realizado en el dia. '},
    {title: 'Peliculas',  url:'https://github.com/yersonrincon/peliculas-app',content: 'Content here',src:'..//../assets/img/Captura8.PNG',
    descripcion: 'Aplicacion que consume la información de una app de peliciulas nos nuestrar las peliculas mas vistas con su calificación.' },
    {title: 'Formulario',  url:'https://github.com/yersonrincon/formularioangular', content: 'Content here',src:'..//../assets/img/Captura9.PNG',
    descripcion: 'Es un formulario que nos permite almacenar datos en el local storage  tiene cierto tipo de validaciones a la hora de ingresar datos.'},
   
  ];

  constructor() {
    }
  ngOnInit(): void {  
      register();
  }
  
}
