import { Component, OnInit } from '@angular/core';
import { ISourceOptions } from 'tsparticles';
import { tsParticles } from "tsparticles-engine";
import { loadPolygonPath } from "tsparticles-path-polygon";
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sideBarOpen = true;
  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  
  id = "tsparticles";
  options :ISourceOptions = {

    fpsLimit: 60,
    fullScreen: {
      enable: true
    },
    background: {
      color: "#030310" 
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: {
          enable: true,
          mode: "repulse",
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
        grab: { distance: 400, links: { opacity: 1 } },
        push: { quantity: 4 },
        remove: { quantity: 2 },
        repulse: { distance: 200, duration: 0.4 }
      }
    },
    particles: {
      color: { value: "#84ff00" /*value: "ramdon"*/},
      links: {
        color: "#84ff00" /*value: "ramdon"*/,
        distance: 150,
        enable: false,
        opacity: 0.4,
        width: 1
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "out",
        random: false,
        speed: 3,
        straight: false
      },
      rotate: {
        animation: {
          enable: true,
          speed: 10,
          sync: false
        }
      },
      number: { density: { enable: true, area: 800 }, value: 5 },
      opacity: {
        animation: { enable: true, minimumValue: 0.5, speed: 1, sync: false },
        random: false,
        value: 1
      },
      shape: {
        character: [
            {
                fill: true,
                font: "Font Awesome 5 Brands",
                style: "",
                value: [  "\uf3bd" ],
                weight: "400"
              }
        ],
        image: {
          height: 100,
          replace_color: true,
          src: "images/github.svg",
          width: 100
        },
        polygon: { nb_sides: 5 },
        stroke: { color: "random", width: 1 },
        type: "char"
      },
      size: {
        anim: { enable: true, minimumValue: 8, speed: 20, sync: false },
        random: { minimumValue: 8, enable: true },
        value: 32
      }
    },
    detectRetina: true
}
}
