import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  arrData: Array<any> = [
    {
      nombre: 'Mateo Tafurt García',
      cedula: '1107101322',
      carrera: 'Ing. Multimedia',
      telefono: '5510030'
    },
    {
      nombre: 'Paco Andrés de los Angeles',
      cedula: '1107101322',
      carrera: 'Ing. Multimedia',
      telefono: '5510030'
    },
    {
      nombre: 'Javier Antonio Molina',
      cedula: '1107101322',
      carrera: 'Ing. Multimedia',
      telefono: '5510030'
    },
    {
      nombre: 'Helen Brion del Río',
      cedula: '1107101322',
      carrera: 'Ing. Multimedia',
      telefono: '5510030'
    }
  ];

  arrHeaders: any = ['nombre', 'cedula', 'carrera', 'telefono'];
  constructor() { }

  ngOnInit() {
  }

}
