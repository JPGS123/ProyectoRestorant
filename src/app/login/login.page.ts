import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DatabaseService, User } from '../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private databaseService: DatabaseService
  ) {}

  async ngOnInit() {
    await this.databaseService.initDatabase();
  }

  async onLogin() {
    if (!this.email || !this.password) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor ingrese su correo electrónico y contraseña.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    try {
      const user = await this.databaseService.getUserByEmail(this.email);
      if (user && user.password === this.password) {
        console.log('Login exitoso');
        this.router.navigate(['/home']);
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Credenciales incorrectas. Por favor intente nuevamente.',
          buttons: ['OK']
        });
        await alert.present();
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Se produjo un error al intentar iniciar sesión. Por favor intente nuevamente más tarde.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  onRegister() {
    console.log('Registrar nuevo usuario');
    this.router.navigate(['/register']);
  }
}
