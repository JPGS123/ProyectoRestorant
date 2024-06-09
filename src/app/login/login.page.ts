import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  onLogin() {
    console.log('Login con:', this.email, this.password);
    
    this.navCtrl.navigateForward('/home');
  }

  onRegister() {
    console.log('Registrar nuevo usuario');
  
    this.navCtrl.navigateForward('/register');
  }

}

