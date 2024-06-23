import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private databaseService: DatabaseService
  ) { }

  ngOnInit() { }

  async onRegister() {
    if (this.isFormValid()) {
      try {
        await this.databaseService.addUser(this.email, this.password);
        console.log('Usuario registrado:', this.email);
        await this.presentRegistrationSuccessAlert();
        this.navCtrl.navigateForward('/login');
      } catch (error) {
        console.error('Error al registrar usuario:', error);
        await this.presentErrorAlert('Error al registrar usuario. Intente nuevamente.');
      }
    } else {
      console.error('Formulario no válido. Verifica los campos.');
      await this.presentErrorAlert('Formulario no válido. Verifica los campos.');
    }
  }

  isFormValid(): boolean {
    return !!(this.email && this.password && this.confirmPassword && this.password === this.confirmPassword);
  }

  async presentRegistrationSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: `Usuario ${this.email} registrado correctamente.`,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
