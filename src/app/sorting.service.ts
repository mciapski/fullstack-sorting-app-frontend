import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { SortingTask } from './SortingTask';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SortingService {

  private sortingTaskUrl: string;

  constructor(private http: HttpClient) {
    this.sortingTaskUrl = 'http://localhost:8080/numbers/sort-command';
   }

   public findAll(): Observable<Array<Number>>{
    return this.http.get<Array<Number>>(this.sortingTaskUrl)
   }

   public sendRequest(sortingTask:SortingTask){
    return this.http.post<SortingTask>(this.sortingTaskUrl, sortingTask)
   }

}
