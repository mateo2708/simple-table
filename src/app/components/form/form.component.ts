import { ElementRef } from '@angular/core';
// tslint:disable:no-input-rename
// tslint:disable:no-output-rename
// tslint:disable:no-redundant-jsdoc
// tslint:disable:use-life-cycle-interface
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  /**
   * @name objData
   * @description Referencia al origen de los datos del objeto a tratar.
   * @type {*}
   * @memberof FormComponent
   */
  @Input('object') objData: any;

  /**
   * @name blIsEdit
   * @description Bandera que controla la visualización del modal de editar.
   * @type {Boolean}
   * @memberof FormComponent
   */
  @Input('isEdit') blIsEdit: Boolean = false;

  /**
   * @name arrKeys
   * @description Arreglo con las llaves del objeto a tratar.
   * @type {Array<any>}
   * @memberof FormComponent
   */
  arrKeys: Array<any>;

  /**
   * @name blEditEnable
   * @description Bandera que controla la propiedad disabled de los input en el formulario.
   * @type {Boolean}
   * @memberof FormComponent
   */
  blEditEnable: Boolean = false;

  /**
   * @name objTemp
   * @description Objeto temporar que sirve para no cambiar los el objeto directamente desde el origen.
   * @type {*}
   * @memberof FormComponent
   */
  objTemp: any;

  /**
   * @name emitter
   * @description Propiedad que permite emitir eventos
   * @type {EventEmitter<any>}
   * @memberof FormComponent
   */
  @Output('action') emitter: EventEmitter<any> = new EventEmitter;


  constructor() { }

  ngOnInit() {
    this.objTemp = { ...this.objData };
    this.arrKeys = Object.keys(this.objData);
  }

  /**
  * @name ngOnChanges
  * @description Función que se ejecuta al detectar cambios en las propiedades.
  * @memberof FormComponent
  */
  ngOnChanges(changes: SimpleChanges) {

  }

  /**
 * @name emitAction
 * @description Metodo que emite un evento con parametros especificos al ejecutarse.
 * @param {*} action Cadena con el tipo de evento.
 * @emits action Emite el objeto action
 * @memberof FormComponent
 */
  emitAction(action) {
    if (action === 'save') {
      for (const key of this.arrKeys) {
        this.objData[key] = this.objTemp[key];
      }
    }
    this.emitter.emit({
      action: action,
      object: this.objData
    });
  }
}
