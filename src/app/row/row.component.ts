import {Component, Input} from '@angular/core';

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent {

  constructor() {
  }

  onDeleteClick() {
    this.delete(this.data)
  }

  objectKeys(obj:Object) {
    return Object.keys(obj);
  }

  @Input('rowData') data: any;
  @Input('delete') delete: any;

}
