import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class User {

    title: string ="";
    address: string = "";
    contact : string = "";
    dob :string =""; 
    email: string =""; 
    firstName: string= ""; 
    gender:string = ""; 
    lastName: string="";
    password: string= "";

}
