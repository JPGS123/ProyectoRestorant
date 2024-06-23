import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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

  constructor(private navCtrl: NavController, private databaseService: DatabaseService) { }

  ngOnInit() { }

  async onRegister() {
    if (this.isFormValid()) {
      try {
        await this.databaseService.addUser(this.email, this.password);
        console.log('Usuario registrado:', this.email);

        this.navCtrl.navigateForward('/login');
      } catch (error) {
        console.error('Error al registrar usuario:', error);
      }
    } else {
      console.error('Formulario no válido. Verifica los campos.');
    }
  }

  isFormValid(): boolean {
    return !!(this.email && this.password && this.confirmPassword && this.password === this.confirmPassword);
  }
  
}
