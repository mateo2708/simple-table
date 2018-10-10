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

  @Input('width') stWidth: String;
  @Input('height') stHeight: String;
  @Input('title') stTitle: String;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.width = this.stWidth;
    this.el.nativeElement.style.height = this.stHeight;
  }

}
