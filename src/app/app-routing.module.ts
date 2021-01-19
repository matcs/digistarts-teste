import { DashboardComponent } from './dashboard/dashboard.component';
import { Problem2Component } from './problem2/problem2.component';
import { Problem1Component } from './problem1/problem1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'problem1', component: Problem1Component },
  { path: 'problem2', component: Problem2Component },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
