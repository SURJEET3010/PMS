import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  ispatientLoggedIn=new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient) { }

  postLogin(data:any){
    return this.http.post<any>('http://localhost:9001/authentication-service/login',data)
  }
}
