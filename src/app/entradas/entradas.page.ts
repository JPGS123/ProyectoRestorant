import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {

  platos = [
    { id: 1, name: 'Ensalada Chilena', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 2, name: 'Chupe de Mariscos', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 3, name: 'Brochetas Camaron', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 4, name: 'Gyozas', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 5, name: 'Ensalada', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' }

  ];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(plato: any): void {
    this.cartService.addItemToCart(plato);
    console.log(`${plato.name} agregado al carrito`);
  }

  removeFromCart(itemId: number): void {
    this.cartService.removeItemFromCart(itemId);
  }
}
