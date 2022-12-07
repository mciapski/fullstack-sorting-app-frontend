import { Component, OnInit } from '@angular/core';
import { SortingTask } from '../SortingTask';
import { SortingService } from '../sorting.service';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent implements OnInit {

  number: Number[];

  constructor(private sortingService:SortingService) { }

  ngOnInit() {
    this.sortingService.findAll().subscribe(data=>
      this.number=data)
  }

}
