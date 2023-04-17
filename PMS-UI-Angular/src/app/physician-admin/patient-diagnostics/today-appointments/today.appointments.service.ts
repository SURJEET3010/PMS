import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodayAppointmentsService {

  constructor(private http: HttpClient, private DatePipe: DatePipe) {}

  appointmentDate = new Date();

  getallappointment(email:any): Observable<TodayAppointmentsService[]> {
    let todaysDate = this.DatePipe.transform(
      this.appointmentDate,
      'yyyy-MM-dd'
    );
    console.log(todaysDate);

    return this.http.get<TodayAppointmentsService[]>(
      `http://localhost:9001/appointment-service/appointment/${email}?acceptance=accepted&appointmentDate=` +
        todaysDate
    );
  }

  getRecentVisitDetails(patientId: any) {
    return this.http.get<any>(
      'http://localhost:9001/health-record-service/visit/recent/' + patientId
    );
  }
}
