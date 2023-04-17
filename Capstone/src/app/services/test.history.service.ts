import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestHistoryService {
  constructor(private http: HttpClient) {}

  getTestHistory(visitId: any) {
    return this.http.get<any>('http://localhost:9001/health-record-service/visit/test/' + visitId);
  }
}
