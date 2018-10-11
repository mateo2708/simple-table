// tslint:disable:no-input-rename
// tslint:disable:no-output-rename
// tslint:disable:no-redundant-jsdoc
// tslint:disable:use-life-cycle-interface
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {

  /**
 * @name emitter
 * @description Propiedad que permite emitir eventos
 * @type {EventEmitter<any>}
 * @memberof FormComponent
 */
  @Output('action') emitter: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  /**
 * @name emitAction
 * @description Metodo que emite un evento con parametros especificos al ejecutarse.
 * @param {*} action Cadena con el tipo de evento.
 * @emits action Emite el objeto action
 * @memberof FormComponent
 */
  emitAction(action) {
    this.emitter.emit({
      action: action,
      object: {}
    });
  }
}
