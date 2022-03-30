import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlannerComponent} from "./components/planner/planner.component";

const routes: Routes = [
  { path: '', component: PlannerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
