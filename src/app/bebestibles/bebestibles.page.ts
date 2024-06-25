import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-bebestibles',
  templateUrl: './bebestibles.page.html',
  styleUrls: ['./bebestibles.page.scss'],
})
export class BebestiblesPage implements OnInit {

  platos = [
    { id: 1, name: 'Coca-Cola', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 2, name: 'Pepsi', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 3, name: 'Sprite', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { id: 4, name: 'Fanta', imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' }

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
