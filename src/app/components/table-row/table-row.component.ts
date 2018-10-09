// tslint:disable:no-input-rename
// tslint:disable:no-output-rename
// tslint:disable:no-redundant-jsdoc
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  /**
   * @name objData
   * @description Variable que almacena los datos a utilizar de un elemento de la tabla.
   * @type {Object}
   * @memberof TableRowComponent
   */
  @Input('data') objData: Object;

  /**
   * @name arrHeaders
   * @description Variable que almacena los headers a utilizar en la tabla.
   * @type {*}
   * @memberof TableRowComponent
   */
  @Input('headers') arrHeaders: any;


  @Output('action') emitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * @name emitAction
   * @description Metodo que emite un evento con parametros especificos al ejecutarse.
   * @param {*} action Objeto con los parametros del evento para generar la action: tipo de accion y el objeto.
   * @emits action Emite el objeto action
   * @memberof TableRowComponent
   */
  emitAction(action, object) {
    this.emitter.emit({
      action: action,
      object: object
    });
  }

}
