import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SortingFormComponent } from './sorting-form/sorting-form.component';
import { NumberListComponent } from './number-list/number-list.component';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SortingService } from './sorting.service';

@NgModule({
  declarations: [
    AppComponent,
    SortingFormComponent,
    NumberListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SortingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
