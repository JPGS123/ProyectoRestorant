import { Injectable } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth-token';

  constructor(private databaseService: DatabaseService) { }

  async login(email: string, password: string): Promise<boolean> {
    const user = await this.databaseService.getUser(email);
    if (user && user.password === password) {
      localStorage.setItem(this.tokenKey, 'user-token');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
