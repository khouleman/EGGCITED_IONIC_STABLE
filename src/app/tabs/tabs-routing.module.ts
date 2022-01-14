import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
      path: 'foods',
      loadChildren: () => import('../foods-list/foods-list.module').then(m =>
      m.FoodsListPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m =>
          m.HomePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m =>
          m.AboutPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
