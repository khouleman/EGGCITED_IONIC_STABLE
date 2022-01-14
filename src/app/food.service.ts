import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Food} from "./models/food.model";


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private dbPath = '/foods';
  foodsRef: AngularFirestoreCollection<Food>;

  constructor(
    private db: AngularFirestore
  ) {
    this.foodsRef = db.collection(this.dbPath);
  }

  getAllFoods(): any {
    return this.foodsRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewFood(food: Food): any {
    return new Observable(obs => {
      this.foodsRef.add({...food}).then(() => {
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.foodsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(food: Food) {
    return new Observable(obs => {
      this.foodsRef.doc(food.id).update(food);
      obs.next();
    });
  }

  delete(id: any) {
    this.foodsRef.doc(id).delete();
  }
}
