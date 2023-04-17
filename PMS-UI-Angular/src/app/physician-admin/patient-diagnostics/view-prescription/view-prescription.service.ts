import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewPrescriptionService {
  constructor(private http: HttpClient) {}


  getAllPrescription(visitId:any):Observable<ViewPrescriptionService[]>{
    return this.http.get<ViewPrescriptionService[]>('http://localhost:9001/health-record-service/visit/prescription/'+ visitId);
  }
}
