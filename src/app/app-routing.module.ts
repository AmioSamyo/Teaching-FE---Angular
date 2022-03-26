import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesTableComponent } from "./components/articles-table/articles-table.component";

const routes: Routes = [
  { path: '', component: ArticlesTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
