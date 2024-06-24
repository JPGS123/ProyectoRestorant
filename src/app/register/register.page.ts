import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../guard/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private authService: AuthService
  ) {}

  async onRegister() {
    if (this.isFormValid()) {
      try {
        const response = await this.authService.register(this.email, this.password).toPromise();
        this.handleRegistrationResponse(response);
      } catch (error) {
        this.handleRegistrationError(error);
      }
    }
  }

  async onSubmit(): Promise<void> {
    if (this.isFormValid()) {
      try {
        const response = await this.authService.register(this.email, this.password).toPromise();
        this.handleRegistrationResponse(response);
      } catch (error) {
        this.handleRegistrationError(error);
      }
    }
  }

  private handleRegistrationResponse(response: any): void {
    if (response && response.id) {
      console.log('Registro exitoso', response);
      this.router.navigate(['/login']);
    } else {
      this.presentErrorAlert('Error en el registro. Por favor intente nuevamente.');
    }
  }
  

  private handleRegistrationError(error: any): void {
    console.error('Error al intentar registrar usuario:', error);
    this.presentErrorAlert('Se produjo un error al intentar registrar usuario. Por favor intente nuevamente más tarde.');
  }

  private async presentErrorAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  onLogin() {
    console.log('Ir a la página de login');
    this.router.navigate(['/login']);
  }

  isFormValid(): boolean {
    return !!this.email && !!this.password && this.password === this.confirmPassword;
  }
}
