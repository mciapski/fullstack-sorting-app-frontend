import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NumberListComponent } from './number-list/number-list.component';
import { SortingFormComponent } from './sorting-form/sorting-form.component';
const routes: Routes = [
  {path: 'numbers', component:NumberListComponent},
  {path: 'createTask', component:SortingFormComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
