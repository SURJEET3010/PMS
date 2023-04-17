import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }


  postRegister(data:any){
    return this.http.post<any>('http://localhost:9001/authentication-service/register',data)
  }
}
