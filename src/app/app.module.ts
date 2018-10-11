import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { PageComponent } from './components/page/page.component';
import { CardComponent } from './components/card/card.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormComponent } from './components/form/form.component';
import { FabComponent } from './components/fab/fab.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PageComponent,
    CardComponent,
    TableHeaderComponent,
    TableRowComponent,
    ModalComponent,
    FormComponent,
    FabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
