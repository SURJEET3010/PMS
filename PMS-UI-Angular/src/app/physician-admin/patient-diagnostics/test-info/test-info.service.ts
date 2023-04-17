import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestInfoService {
  
  constructor(private http: HttpClient) {}

  getAllTest(visitId: any) {
    return this.http.get<any>('http://localhost:9001/health-record-service/visit/allvisits/' + visitId);
  }

}
