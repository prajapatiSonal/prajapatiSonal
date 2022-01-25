import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  // CLI imports router
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

// sets up routes constant where you define your routes component route
// const routes: Routes = [
//   { path: 'first', component: FirstComponent },
//   { path: 'second', component: SecondComponent },
// ];


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), // lazy loaded module
  },
  {
    path: "child",
    loadChildren: () => import('./child/child.module').then(m => m.ChildModule),

  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
