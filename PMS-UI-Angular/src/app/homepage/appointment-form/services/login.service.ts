import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://example.com/api/login'; // Replace with your own login API URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = { email: email, password: password };
    return this.http.post(this.loginUrl, body);
}
}
