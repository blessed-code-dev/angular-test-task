import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  constructor() {
  }

  onDeleteClick() {
    console.log('deleting', this.data.Name)
    this.delete(this.data)
  }

  @Input('rowData') data: any;
  @Input('delete') delete: any;



  ngOnInit(): void {
    console.log('row inited', this.data)
  }

}
