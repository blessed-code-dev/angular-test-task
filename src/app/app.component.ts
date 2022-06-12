import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //исходные данные, логику удаления и отправки запроса
  //помещаем на самом верхнем уровне, на уровне app

  data = [
    {Count: 120, Name: 'Igor', Age: 20, Job: 'Developer'},
    {Count: 430, Name: 'Ellis', Age: 200, Job: 'None'},
    {Count: 0, Name: 'Nick', Age: 2, Job: 'None'},
    {Count: 65, Name: 'Roshelle', Age: 12, Job: 'None'},
    {Count: 12, Name: 'Zoi', Age: 21, Job: 'None'},
    {Count: 4, Name: 'Francis', Age: 22, Job: 'None'},
    {Count: 22, Name: 'Bill', Age: 2000, Job: 'None'},
    {Count: 300, Name: 'Louis', Age: 100, Job: 'None'}];


  removeItem(obj: Object) {
    this.data = this.data.filter(((value: Object) => obj !== value));

    //эмуляция запроса на сервер
    const response = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Response accepted');
      },1500);
    });

    response.then(response => {
      console.log(response)
    })
  }

}

