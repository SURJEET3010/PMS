import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  constructor(private http: HttpClient ) { }

  OTPverfication(data:any){
    return this.http.post<any>('http://localhost:9004/api/v1/verify-otp',data,{withCredentials:true})
  }
}
