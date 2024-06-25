import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe(
      (items) => {
        this.cartItems = items;
      },
      (error) => {
        console.error('Error al obtener los elementos del carrito:', error);
      }
    );
  }

  removeItem(itemId: number) {
    this.cartService.removeItemFromCart(itemId);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
