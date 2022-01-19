import { Component, OnInit } from '@angular/core';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'modules-demo';
  constructor(private service:LoaderService){

  }
ngOnInit(): void {
    console.log(this.service,"service");
    
}
}
