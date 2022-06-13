import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  //в компоненте таблицы логика отрисовки таблицы по заданным сверху данным
  //событие клика и удаления передается наверх

  @Input()
  data: Array<Object> = [];
  sum: number = 0;
  headerValues: Array<string> = []; //названия столбцов в шапке таблицы
  @Output() removeRowEvent = new EventEmitter<Object>();

  //обработчик события удаления на уровне таблицы
  onDelete = (obj: Object) => {
    this.removeRowEvent.emit(obj);
    setTimeout(this.recalcSum.bind(this)); //помещаем в очередь, чтобы функция вызвалась после отработки removeItem
  }

  //функция пересчета суммы столбца Count
  recalcSum() {
    this.sum = 0;
    this.data.forEach((value: any) => {
      this.sum += value.Count;
    })
  }


  ngOnInit() {
    this.recalcSum();
    for (let key in this.data[0]) {
      if (this.data[0].hasOwnProperty(key)) {
        this.headerValues.push(key)
      }
    }
  }

}
