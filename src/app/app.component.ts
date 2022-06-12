import {Component} from '@angular/core';
import {TableComponent} from "./table/table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = [
    {Count: 120, Name: 'Igor', Age: 20, Job: 'Developer'},
    {Count: 4, Name: 'John', Age: 0, Job: '–'},
    {Count: 22, Name: 'Dave', Age: 3, Job: 'Developer'},
    {Count: 300, Name: 'Alex', Age: 200, Job: 'Driver'}];


  ngOnInit(){
    setInterval(()=>{
      console.log(this.data)
    },500)
  }
}

