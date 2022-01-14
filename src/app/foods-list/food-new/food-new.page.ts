import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Food } from 'src/app/models/food.model';
import {FoodService} from "../../food.service";


@Component({
  selector: 'app-food-new',
  templateUrl: './food-new.page.html',
  styleUrls: ['./food-new.page.scss'],
})
export class FoodNewPage implements OnInit {
  public food!: Food;

  constructor(
    private Food: FoodService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.food = new Food();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'New Food registered',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tabs/foods']);
      }, 2000);
    });
  }


  add() {
    this.Food.saveNewFood(this.food).subscribe(() => {
      this.food = new Food();
      this.presentToast();
    })
  }

}
