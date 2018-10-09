// tslint:disable:no-input-rename
// tslint:disable:no-output-rename
// tslint:disable:no-redundant-jsdoc
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

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

  /**
   * @name executeAction
   * @description Ejecuta una acción al recibir un evento 'action': Debe permitir editar, visualizar y editar objetos de la tabla.
   * @param {*} event Objeto con los parametros del evento: tipo de evento y objeto relacionado.
   * @memberof TableComponent
   */
  executeAction(event) {
    switch (event.action) {
      case 'delete':
        console.log('borrese socio');
        this.arrData = this.arrData.filter(obj => obj !== event.object);
        break;
      case 'edit':
        console.log('editese socio');
        break;
      case 'view':
        console.log('mirese socio');
        break;
    }
  }

}
