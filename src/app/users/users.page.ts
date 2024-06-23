import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DatabaseService, User } from '../services/database.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: User[] = [];

  constructor(
    private alertController: AlertController,
    private databaseService: DatabaseService
  ) {}

  async ngOnInit() {
    await this.databaseService.initDatabase();
    this.loadUsers();
  }

  async loadUsers() {
    this.users = await this.databaseService.getUsers();
  }

  async deleteUser(user: User) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: `¿Estás seguro que deseas eliminar a ${user.email}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        },
        {
          text: 'Eliminar',
          handler: async () => {
            await this.databaseService.deleteUser(user.email);
            this.loadUsers();
          }
        }
      ]
    });

    await alert.present();
  }
}
