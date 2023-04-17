import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MedicalRecordsService {
  constructor(private http: HttpClient) {}

  getPatientDetails(pId: any) {
    return; //this.http.get<any>('');
  }

  getPatientVisitHistory(patientId: any) {
    return this.http.get<any>(
      'http://localhost:9001/health-record-service/visit/allvisits/' + patientId
    );
  }
  getPatientAppointment(patientId: any) {
    return this.http.get<any>('http://localhost:9003/patient/' + patientId);
  }

  //   getPatientVisitHistoryTest(visitId: any) {
  //     return this.http.get<any>('http://localhost:9006/visit/test/' + visitId);
  //   }
}
