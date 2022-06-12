import {Component, Input, OnInit, Output} from '@angular/core';
import {RowComponent} from '../row/row.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @Input()
  data: Array<Object> = [];
  sum: number = 0;
  onDelete = (obj: Object) => {
    console.log(this)
    this.data = this.data.filter(((value: Object) => obj !== value));
    this.recalcSum();
    setTimeout(() => {
      console.log('response accepted');
    }, 1500)
  }

  recalcSum(){
    this.sum = 0;
    this.data.forEach((value:any)=>{
      this.sum+=value.Count;
    })
  }

  ngOnInit() {
    this.recalcSum();
  }


}
