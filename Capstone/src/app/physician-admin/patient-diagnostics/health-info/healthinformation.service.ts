import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Injectable({
  providedIn: 'root'
})
export class HealthinformationService {

  constructor(private http: HttpClient, private sd: SharedDataService) {}

  getAlltestdetails(visitId: any) {
    return this.http.get<any>(
      'http://localhost:9001/health-record-service/visit/test/' + visitId
    );
  }

  getPatientDetails(patientId: any) {
    return this.http.get<any>(
      'http://localhost:9001/patient-info-service/patient?patientId=' + patientId
    );
  }

  getHealthDetails(patientId: any) {
    // return this.http.get<any>('http://localhost:9006/visit/' + visitId);
    return this.http.get<any>('http://localhost:9001/health-record-service/visit/recent/' + patientId);
  }

  deleteTest(testId: any) {
    return this.http.delete(`http://localhost:9001/health-record-service/visit/test/` + testId);
  }
}
