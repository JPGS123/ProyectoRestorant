import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {}

  getCartItems(): Observable<any[]> {
    return this.cartSubject.asObservable();
  }

  addItemToCart(item: any): void {
    this.cartItems.push(item);
    this.cartSubject.next([...this.cartItems]);
  }

  removeItemFromCart(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.cartSubject.next([...this.cartItems]);
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next([...this.cartItems]);
  }
}
