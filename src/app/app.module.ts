import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component'

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
