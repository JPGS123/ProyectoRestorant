import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  //getUserByEmail(email: string): Observable<User> {
   // return this.http.get<User>(`${this.apiUrl}/users?email=${email}`);
  //}

  //registerUser(user: User): Observable<any> {
  //  return this.http.post(`${this.apiUrl}/register`, user);
  //}

  //loginUser(email: string, password: string): Observable<any> {
    //return this.http.post(`${this.apiUrl}login`, { email, password });
  //}

  
}