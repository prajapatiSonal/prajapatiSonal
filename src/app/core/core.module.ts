import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MasterComponent } from './components/master/master.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoaderService } from './services/loader.service';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MasterComponent,
    PageNotFoundComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    SideBarComponent,
  ],
  providers:[
    LoaderService

  ]
})
export class CoreModule { }
