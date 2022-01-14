import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import {FoodService} from "../../food.service";

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  modif!: boolean;
  food: any = null;

  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Food: FoodService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.modif = false;
    const id = this.route.snapshot.paramMap.get('id');
    this.Food.get(id).subscribe((value: any) => {
      this.food = value;
    });
  }

  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        subHeader: 'Are you sure you want to modify ?',
        buttons: [
          {
            text: 'Cancel',
            role: 'Cancel'
          }, {
            text: 'Confirm',
            handler: () => { this.modif = !this.modif}
          }
        ]
      });

      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    await (await toast).present();
  }

  onModif() {
    this.Food.update(this.food).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Food.delete(id);
    this.router.navigate(['/tabs/foods'])
  }

}
