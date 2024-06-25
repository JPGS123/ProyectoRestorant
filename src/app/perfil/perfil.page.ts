import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  email: string = '';
  newEmail: string = '';
  orders: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    this.userService.getEmail().subscribe(email => {
      this.email = email;
    });

    this.fetchOrders();
  }

  fetchOrders() {
    this.userService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  updateEmail() {
    if (this.newEmail) {
      this.userService.updateEmail(this.newEmail);
      this.newEmail = '';

      this.email = this.newEmail;
    }
  }

  createOrder() {
    const newOrder = {
      id: this.orders.length + 1,
      item: 'Nuevo Pedido',
      date: new Date().toISOString(),
    };

    this.userService.addOrder(this.orders).subscribe(() => {
      this.fetchOrders();
    });
  }
}

