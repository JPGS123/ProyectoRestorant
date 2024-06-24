import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/';
  private loggedIn = false;
  private accessTokenKey = 'accessToken';

  constructor(private http: HttpClient) {}

  register(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}users`, body);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}users`).pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          return { success: true, user };
        } else {
          return { success: false };
        }
      })
    );
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
}
