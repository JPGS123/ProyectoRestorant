import { Component } from '@angular/core';
import { AuthService } from '../guard/auth.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  private loggedIn = false;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private popoverController: PopoverController
  ) { }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(email: string, password: string): void {
    this.loggedIn = true;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  async openCart(ev: any) {
    const popover = await this.popoverController.create({
      component: CartComponent,
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
