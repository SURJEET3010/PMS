import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AllAppointmentService {
  constructor(private http: HttpClient) {}

  getAllAppointments(patientId: any) {
    return this.http.get<any>('http://localhost:9001/appointment-service/patient/' + patientId);
  }
}
