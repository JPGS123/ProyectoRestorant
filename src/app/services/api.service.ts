import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../guard/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private emailSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private ordersSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private authService: AuthService) {
    this.init();
  }

  private init(): void {
    const email = this.authService.getUserEmail();
    this.emailSubject.next(email || '');
  }

  getEmail(): Observable<string> {
    return this.emailSubject.asObservable();
  }

  updateEmail(newEmail: string): void {
    this.emailSubject.next(newEmail);
  }

  getOrders(): Observable<any[]> {
    return this.ordersSubject.asObservable();
  }

  addOrder(Order: any): Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        const orders = this.ordersSubject.getValue();
        orders.push(Order);
        this.ordersSubject.next(orders);
        observer.next(Order);
        observer.complete();
      }, 500);
    });
  }
}

