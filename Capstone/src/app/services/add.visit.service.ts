import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddVisitService {

  constructor(private http: HttpClient) {}

  postVisitData(pId: any, data: any) {
    return this.http.post<any>('http://localhost:9001/health-record-service/visit/' + pId, data);
  }

  dataAdded = new Subject<boolean>();
}
