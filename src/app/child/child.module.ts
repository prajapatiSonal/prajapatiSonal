import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ChildComponent } from './child/child.component';
import { Child3Component } from './child3/child3.component';


@NgModule({
  declarations: [
    Child1Component,
    Child2Component,
    ChildComponent,
    Child3Component
  ],
  imports: [
    CommonModule,
    ChildRoutingModule
  ]
})
export class ChildModule { }
