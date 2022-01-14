import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodNewPage } from './food-new.page';

const routes: Routes = [
  {
    path: '',
    component: FoodNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodNewPageRoutingModule {}
