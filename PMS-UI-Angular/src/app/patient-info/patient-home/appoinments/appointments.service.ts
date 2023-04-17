import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  constructor(private http: HttpClient) {}

  postAppointment(data: any) {
    return this.http.post<any>('http://localhost:9001/appointment-service/appointment', data);
  }

  getAllPhysician(date:any){
    return this.http.get<any>('http://localhost:9001/physician-availability-service/physician-availability/'+date)
  }
}
