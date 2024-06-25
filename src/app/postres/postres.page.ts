import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.page.html',
  styleUrls: ['./postres.page.scss'],
})
export class PostresPage implements OnInit {

  platos = [
    { id: 1, name: 'Helado', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 2, name: 'Torta', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 3, name: 'Tarta de Limon', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 4, name: 'Suspiro Limeño', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 5, name: 'Tiramisu', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' }
    
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
