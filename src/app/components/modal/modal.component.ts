// tslint:disable:no-input-rename
// tslint:disable:no-output-rename
// tslint:disable:no-redundant-jsdoc
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output('action') emitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  bgClick() {
    this.emitter.emit('close');
  }

}
