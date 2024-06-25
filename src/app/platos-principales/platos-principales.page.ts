import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-platos-principales',
  templateUrl: './platos-principales.page.html',
  styleUrls: ['./platos-principales.page.scss'],
})
export class PlatosPrincipalesPage implements OnInit {

  platos = [
    { id: 1, name: 'Arroz', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 2, name: 'Pure', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 3, name: 'Cazuela', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 4, name: 'Fideos', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 5, name: 'Mariscal', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' }
    
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
