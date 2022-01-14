import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodsListPageRoutingModule } from './foods-list-routing.module';

import { FoodsListPage } from './foods-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodsListPageRoutingModule
  ],
  declarations: [FoodsListPage]
})
export class FoodsListPageModule {}
