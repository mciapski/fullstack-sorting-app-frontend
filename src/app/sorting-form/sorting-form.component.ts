import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SortingService } from '../sorting.service';
import { SortingTask } from '../SortingTask';

@Component({
  selector: 'sorting-form',
  templateUrl: './sorting-form.component.html',
  styleUrls: ['./sorting-form.component.css']
})
export class SortingFormComponent {

  sortingTask: SortingTask;

  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private sortingService: SortingService) {
    this.sortingTask = new SortingTask();
  }
  onSubmit() {
    this.sortingService.sendRequest(this.sortingTask).subscribe(result => this.gotoNumberList());
  }
  gotoNumberList() {
    this.router.navigate(['/numbers'])
  }


}
