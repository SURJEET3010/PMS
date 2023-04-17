import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private http: HttpClient) {}

  deleteAppointment(appointmentId: number) {
    return this.http.delete(`http://localhost:9001/appointment-service/appointment/${appointmentId}`);
  }


  // private baseUrl =  'http://localhost:9002/appointment';
  getallappointment(email:any):Observable<AppointmentService[]>{
    return this.http.get<AppointmentService[]>(`http://localhost:9001/appointment-service/appointment/${email}?acceptance=pending`);
  }

  updateAppointment(appointmentId: number) {

    const updatedData = {
      acceptance: "Accepted"
      }
    return this.http.put(`http://localhost:9001/appointment-service/appointment/${appointmentId}`,updatedData);
  }

  sendNotification(data:any){
    return this.http.post<any>('http://localhost:9008/api/v1/email-notification',data)
  }

  getPatientDetails(patientId:any){
    return this.http.get<any>('http://localhost:9001/patient-info-service/patient?patientId='+patientId)
  }
}
