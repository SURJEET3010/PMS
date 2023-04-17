import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeEmailService {

  constructor(private http: HttpClient ) { }

  postLogin(data:any){
    return this.http.post<any>('http://localhost:9004/api/v1/send-otp', data,{withCredentials:true})
  }
}
