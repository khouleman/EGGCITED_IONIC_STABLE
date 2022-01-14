import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodsListPage } from './foods-list.page';

const routes: Routes = [
  {
    path: '',
    component: FoodsListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./food-new/food-new.module').then( m => m.FoodNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./food/food.module').then(m => m.FoodPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodsListPageRoutingModule {}
