import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionHistoryService {
  constructor(private http: HttpClient) {}

  getPrescriptionHistory(prescriptionId: any) {
    return this.http.get<any>(
      'http://localhost:9001/health-record-service/visit/prescription/' + prescriptionId
    );
  }
}
