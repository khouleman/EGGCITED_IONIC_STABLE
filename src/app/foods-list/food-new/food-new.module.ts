import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodNewPageRoutingModule } from './food-new-routing.module';

import { FoodNewPage } from './food-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodNewPageRoutingModule
  ],
  declarations: [FoodNewPage]
})
export class FoodNewPageModule {}
