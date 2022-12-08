import { Component } from '@angular/core';
import { SortingFormComponent } from './sorting-form/sorting-form.component';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { SortingTask } from './SortingTask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http:HttpClient){

  }
  onSubmit(task:SortingTask){
    this.http.post<SortingTask>('http://localhost:8080/numbers/sort-command', task, {
      headers : new HttpHeaders({'Content-Type': 'application/json'})
    })
    .subscribe((result)=>
    console.warn('result'))
  }
}
