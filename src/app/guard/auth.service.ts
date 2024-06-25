import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {

  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/';
  private loggedIn = false;
  private accessTokenKey = 'accessToken';
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  register(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}users`, body);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}users?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          const token = this.createToken(user.email);
          this.saveAccessToken(token);
          this.loggedIn = true;
          return { success: true, user: { email: user.email, name: user.name } };
        } else {
          return { success: false };
        }
      })
    );
  }


  private createToken(email: string): string {
    return btoa(email);
  }

  saveAccessToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
    this.loggedIn = true;
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  clearAccessToken(): void {
    localStorage.removeItem(this.accessTokenKey);
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.clearAccessToken();
    this.loggedIn = false;
  }

  getUserEmail(): string | null {
    const token = this.getAccessToken();
    if (token) {
      return atob(token);
    }
    return null;
  }
}
