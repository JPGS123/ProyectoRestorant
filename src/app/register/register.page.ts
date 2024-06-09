import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  onRegister() {
    console.log('Registro con:', this.email, this.password);

    this.navCtrl.navigateForward('/login');
  }

  isFormValid(): boolean {
    return !!(this.email && this.password && this.confirmPassword && this.password === this.confirmPassword);
  }
  
}
