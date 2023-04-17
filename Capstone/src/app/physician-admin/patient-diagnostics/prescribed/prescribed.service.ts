import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrescribedService {
  constructor(private http: HttpClient) { }

  getPreviousPrescription(visitId:any){
    return this.http.get<any>("http://localhost:9001/health-record-service/visit/prescription/"+visitId);
  }
}
