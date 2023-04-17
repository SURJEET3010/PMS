import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {
  constructor(private http: HttpClient, private p: SharedDataService) {}

  visitId = this.p.getVisitId();

  addObservationDetails(
    visitId: any,
    observationDetails: any
  ): Observable<any> {
    const url = 'http://localhost:9001/health-record-service/visit/test/' + visitId;
    return this.http.post(url, observationDetails);
  }
}
