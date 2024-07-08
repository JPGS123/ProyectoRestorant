import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChefsService {
  private apiUrl = 'https://randomuser.me/api/?nat=CA&results=5';

  constructor(private http: HttpClient) {}

  getChefs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
