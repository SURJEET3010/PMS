import { Injectable } from '@angular/core';
import { User } from './class_files/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private url:string ="";

  constructor(private http : HttpClient) { 
    this.url = "http://localhost:9009/patient/register";
  }

  public save(patient: User) {
    return this.http.post<User>(this.url, User);
  }

}


