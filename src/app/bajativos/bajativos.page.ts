import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-bajativos',
  templateUrl: './bajativos.page.html',
  styleUrls: ['./bajativos.page.scss'],
})
export class BajativosPage implements OnInit {

  platos = [
    { id: 1, name: 'Cerveza', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 2, name: 'Ron', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 3, name: 'Jaguer', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 4, name: 'Whysky', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 5, name: 'Vodka', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 6, name: 'Pisco', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 7, name: 'Tequila', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' }
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
