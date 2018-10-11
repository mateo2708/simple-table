// tslint:disable:no-input-rename
// tslint:disable:no-output-rename
// tslint:disable:no-redundant-jsdoc
import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  /**
   * @name stWidth
   * @description Propiedad que define el ancho del componente
   * @type {String}
   * @memberof CardComponent
   */
  @Input('width') stWidth: String;

  /**
   * @name stHeight
   * @description Propiedad que define la altura del componente
   * @type {String}
   * @memberof CardComponent
   */
  @Input('height') stHeight: String;

  /**
   * @name stTitle
   * @description Propiedad que define el titulo de la card.
   * @type {String}
   * @memberof CardComponent
   */
  @Input('title') stTitle: String;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.width = this.stWidth;
    this.el.nativeElement.style.height = this.stHeight;
  }

}
