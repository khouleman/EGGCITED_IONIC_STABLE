import { Component, OnInit } from '@angular/core';
import {FoodService} from "../food.service";

@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.page.html',
  styleUrls: ['./foods-list.page.scss'],
})
export class FoodsListPage implements OnInit {
  foods!: any;
  constructor(
    private Food: FoodService
  ) { }

  ngOnInit(): void {
    this.Food.getAllFoods().subscribe((data:any)=>{
      this.foods = data;
    })
  }

}
