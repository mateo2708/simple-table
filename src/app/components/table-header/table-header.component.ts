// tslint:disable:no-input-rename
// tslint:disable:no-redundant-jsdoc
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {

  /**
   * @name arrHeaders
   * @description Variable que almacena los headers a utilizar en la tabla.
   * @type {Any}
   * @memberof TableHeaderComponent
   */
  @Input('headers') arrHeaders: any;

  constructor() { }

  ngOnInit() {
  }

}
