import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcceptedAppointmentService {

  constructor(private http: HttpClient) {}

  getAppointments() {
    return this.http.get<any>(
      'http://localhost:9001/appointment-service/appointment?acceptance=accepted'
    );
  }

  getPatientDetails(patientId: any) {
    return this.http.get<any>(
      'http://localhost:9001/patient-info-service/patient?patientId=' + patientId
    );
  }
  getAllergies() {
    return this.http.get<any>('http://localhost:9001/allergy-service/allergies');
  }
}
