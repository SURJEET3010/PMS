import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitHistoryService {

  constructor(private http: HttpClient) {}

  getPatientVisitHistory(patientId: any) {
    return this.http.get<any>(
      'http://localhost:9001/health-record-service/visit/allvisits/' + patientId
    );
  }

  getPatientVisitHistoryTest(visitId: any) {
    return this.http.get<any>('http://localhost:9001/health-record-service/visit/test/' + visitId);
  }

  getRecentVisitDetails(patientId:any){
      return this.http.get<any>('http://localhost:9001/health-record-service/visit/recent/'+patientId)
  }

}
