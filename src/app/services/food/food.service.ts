import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():foods[]{
    
    return[
     
     {
        id: 1,
        price: 450,
        name: 'Beef Rib Steak',
        favorite : true,
        star : 4,
        tag: ['non-veg','grilled','lunch'],
        imgUrl: 'assets/beef-grill.jpeg',
        cookTime: '30-40',
        origins: ['UAE']
     },
     {
      id: 2,
      price: 150,
      name: 'Chicken Biriyani',
      favorite : true,
      star : 4.8,
      tag: ['non-veg','lunch'],
      imgUrl: 'assets/biriyani.jpeg',
      cookTime: '15-25',
      origins: ['India']
      },
      {
        id: 3,
        price: 250,
        name: 'Burger&Fries Combo',
        favorite : true,
        star : 4.5,
        tag: ['non-veg','fast-food'],
        imgUrl: 'assets/burgercombo.jpeg',
        cookTime: '20-30',
        origins: ['USA','Germany']
      },
      {
        id: 4,
        price: 120,
        name: 'Donuts - Pack of 5',
        favorite : true,
        star : 4.2,
        tag: ['veg','snacks','fast-food'],
        imgUrl: 'assets/donuts.jpeg',
        cookTime: '15-20',
        origins: ['USA']
      },
      {
        id: 5,
        price: 350,
        name: 'Chicken Caesar Salad',
        favorite : true,
        star : 4.7,
        tag: ['non-veg','fast-food','snack','salad','diet'],
        imgUrl: 'assets/hotchickencaesar.jpeg',
        cookTime: '15-25',
        origins: ['Mexico']
      },
      {
        id: 6,
        price: 220,
        name: 'Noodles',
        favorite : true,
        star : 3.8,
        tag: ['non-veg','lunch',],
        imgUrl: 'assets/noodles.jpeg',
        cookTime: '10-20',
        origins: ['Italy']
      },
      {
        id: 7,
        price: 300,
        name: 'Pizza',
        favorite : true,
        star : 4.2,
        tag: ['non-veg','lunch','fast-food',],
        imgUrl: 'assets/pizza.jpeg',
        cookTime: '15-25',
        origins: ['Italy']
      },
      {
        id: 8,
        price: 550,
        name: 'Beef Steak',
        favorite : false,
        star : 4.6,
        tag: ['non-veg','lunch'],
        imgUrl: 'assets/steak.jpeg',
        cookTime: '25-45',
        origins: ['USA']
      },
    ]
  }
}
