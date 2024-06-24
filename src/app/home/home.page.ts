import { Component } from '@angular/core';
import { AuthService } from '../guard/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  private loggedIn = false;

  constructor(private authService: AuthService, private router: Router) { }

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
}
