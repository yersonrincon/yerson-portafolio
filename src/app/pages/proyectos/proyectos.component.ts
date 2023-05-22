import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {register} from 'swiper/element/bundle';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent implements OnInit {
    members: {title: string, descripcion: string, content: string , src: string ,url:string}[] = [
    {title: 'La Pesada', url:'http://lapesada-front.onrender.com/#/demoPages/login', content: 'Content here',src:'..//../assets/img/Captura.PNG',
     descripcion: 'Sistema de inventario para almacenes  de maquinaria pesada desarrollado en Angular  Node.js con base de datos en PostgreSQL.'},
    {title: 'Spotyapp', url:'https://github.com/yersonrincon/spoty-app',content: 'Content here',src:'..//../assets/img/Captura4.PNG',
     descripcion: 'Aplicación que consume una API de Spotify donde nos trae información de lo más escuchado por los usuarios.'},
    {title: 'Adminpro', url:'https://github.com/yersonrincon/adminpro-front', content: 'Content here',src:'..//../assets/img/Captura6.PNG',
     descripcion: 'Sistema de registro de médicos y hospitales con gráficas de notificaciones desarrollado en Angular Node.js y base de datos en MongoDB.'},
    {title: 'Tifon',  url:'https://github.com/yersonrincon/tifon-front', content: 'Content here',src:'..//../assets/img/Captura1.PNG',
    descripcion: 'Sistema de control de ventas, para Autolavados, nos  muestra las ventas en tiempo real.'},
    {title: 'Peliculas',  url:'https://github.com/yersonrincon/peliculas-app',content: 'Content here',src:'..//../assets/img/Captura8.PNG',
    descripcion: 'Aplicación que consume una API  de una App de películas nos  trae información de las películas más vistas  por los usuarios con su calificación.' },
    {title: 'Formulario',  url:'https://github.com/yersonrincon/formularioangular', content: 'Content here',src:'..//../assets/img/Captura9.PNG',
    descripcion: 'Formulario que nos permite almacenar datos en el local Storage tiene cierto tipo de validaciones a la hora de ingresar datos.'},
  ];

  constructor(public translateService: TranslateService) {
    translateService.addLangs(['en', 'es']);
    translateService.setDefaultLang('es');
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/es|en/) ? browserLang : 'en');
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
  ngOnInit(): void {  
      register();
  }
  
}
