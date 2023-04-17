import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviousRecordsService {

  constructor(private http: HttpClient) {}

  getAllVisitHistory(patientId: any) {
    return this.http.get<any>(
      'http://localhost:9001/health-record-service/visit/allvisits/' + patientId
    );
  }
}
