// tslint:disable:no-input-rename
// tslint:disable:no-output-rename
// tslint:disable:no-redundant-jsdoc
// tslint:disable:prefer-const
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
    },
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
    },
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
    },
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
  blModal: Boolean = false;
  objModalData: Object = {};
  blIsEdit: Boolean = false;
  auxObj: any;
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
        this.deleteElement(event.object);
        this.handleModal('close');
        break;
      case 'edit':
        console.log('editese socio');
        this.blIsEdit = true;
        this.objModalData = event.object;
        this.handleModal('open');
        break;
      case 'save':
        console.log('guardese socio');

        this.handleModal('close');
        break;
      case 'view':
        console.log('mirese socio');
        this.objModalData = event.object;
        this.handleModal('open');
        break;
      case 'new':
        console.log('creese socio');
        this.auxObj = {};
        for (let key of Object.keys(this.arrData[0])) {
          this.auxObj[key] = '';
        }
        if (this.auxObj !== {}) {
          this.arrData.push(this.auxObj);
        }
        this.blIsEdit = true;
        this.objModalData = this.auxObj;
        this.handleModal('open');

        break;
    }
  }

  /**
   * @name handleModal
   * @description Ejecuta las acciones correspondientes a la visualización del modal.
   * @param {*} action
   * @memberof PageComponent
   */
  handleModal(action) {
    if (action === 'open') {
      this.blModal = true;
    } else if (action === 'close') {
      this.blModal = false;
      this.blIsEdit = false;
      for (let key of Object.keys(this.arrData[0])) {
        if (this.auxObj[key] === '') {
          this.deleteElement(this.auxObj);
          break;
        }

      }
    }
  }

  /**
   * @name deleteElement
   * @description Elimina un objeto especifico de la tabla.
   * @param {*} object
   * @memberof PageComponent
   */
  deleteElement(object) {
    this.arrData = this.arrData.filter(obj => obj !== object);
  }
}
