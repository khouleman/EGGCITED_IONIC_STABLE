import { Component, OnInit } from '@angular/core';
import {FoodService} from "../food.service";
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";


@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.page.html',
  styleUrls: ['./foods-list.page.scss'],
})
export class FoodsListPage implements OnInit {

  public photos: picture[] = [];

  foods!: any;
  constructor(
    private Food: FoodService
  ) { }

  ngOnInit(): void {
    this.Food.getAllFoods().subscribe((data:any)=>{
      this.foods = data;
    })
  }

  async addNewPhoto(){
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })

    this.photos.unshift({
      filepath: '',
      webviewPath: capture.webPath
    })
  }

  takePhoto(){
    this.addNewPhoto();
  }
}
export interface picture{
  filepath: string;
  webviewPath: string;
}
