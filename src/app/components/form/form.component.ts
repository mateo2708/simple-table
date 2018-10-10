// tslint:disable:no-input-rename
// tslint:disable:no-output-rename
// tslint:disable:no-redundant-jsdoc
// tslint:disable:use-life-cycle-interface
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input('object') objData: Object;
  arrKeys: Array<any>;
  blEditEnable: Boolean = false;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.arrKeys = Object.keys(this.objData);
  }
}
