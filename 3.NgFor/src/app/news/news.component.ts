import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  items:any = [
    {
      title: "Macri busca en Chapadmalal \"consolidar el trabajo en equipo\" de Cambiemos",
      link: "http://srvc.lavoz.com.ar/politica/macri-busca-en-chapadmalal-consolidar-el-trabajo-en-equipo-de-cambiemos",
      description: "El presidente Mauricio Macri encabeza desde este viernes en Chapadmalal una reunión del gabinete ampliado y jefes oficialistas legislativos, en la que se procuró \"consolidar el trabajo en equipo\" de Cambiemos y se expusieron “los planes estratégicos” que cada ministerio impulsará este año.Los ministros y secretarios de Estado expondrán las tareas realizadas durante 2017 y los planes estratégicos de cartera y organismo para el corriente año.Agencia TélamPolítica",
      pubDate: "Fri, 16 Feb 2018 20:46:11 +0000",
      author: "redaccionlavoz",
    },
    {
      title: "Para Arduh, el Gobierno \"transformó el Paicor en un programa selecto\"",
      link: "http://srvc.lavoz.com.ar/politica/para-arduh-el-gobierno-transformo-el-paicor-en-un-programa-selecto",
      description: "Después de la publicación en la que La Voz informó sobre un incremento de 22 mil beneficiarios del programa provincial Paicor, desde Cambiemos salieron a cuestionar los criterios de admisión de los chicos que acceden a las raciones en las escuelas. TE PUEDE INTERESAR. En dos años creció 11,5% el padrón de PaicorPolítica",
      pubDate: "Fri, 16 Feb 2018 20:10:10 +0000",
      author: "redaccionlavoz",
    },
    {
      title: "Claves para entender la sangrienta balacera en pleno corazón de Nueva Córdoba",
      link: "http://srvc.lavoz.com.ar/sucesos/claves-para-entender-la-sangrienta-balacera-en-pleno-corazon-de-nueva-cordoba",
      description: "Lo que había iniciado como una madrugada tranquila en barrio Nueva Córdoba cambió en apenas un puñado de minutos que concentraron más de 100 disparos: policías se habían cruzado con delincuentes, con sangriento saldo de un efectivo muerto y dos ladrones abatidos. A continuación, los principales aspectos del caso que conmociona a Córdoba:En un puñado de minutos, más de cien estruendos sorprendieron a los vecinos de uno de los barrios más concurridos de la Capital. Cómo fue el tiroteo, las víctimas y lo que se sabe de la investigación policial. Canal especial con todo lo publicado. Sucesos",
      pubDate: "Fri, 16 Feb 2018 19:58:54 +0000",
      author: "redaccionlavoz",
    }
  ];

  sendUrl($url){
    console.log('Redireccionamos');
  }
}
