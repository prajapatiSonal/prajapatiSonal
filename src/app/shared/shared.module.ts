import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { NgxErrorComponent } from './components/ngx-error/ngx-error.component';



@NgModule({
  declarations: [
    SearchComponent,
    NgxErrorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
