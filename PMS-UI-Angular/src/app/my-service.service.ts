import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patientinfo } from './admin/home/patient/patientinfo';
import { Physician } from './admin/home/physician/physician';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }

  getAllPatients(): Observable<Patientinfo[]> {
    return this.http.get<Patientinfo[]>(`http://localhost:9001/patient-info-service/patients`);
  }

  getAllAvailability(): Observable<Physician[]> {
    return this.http.get<Physician[]>('http://localhost:9001/physician-availability-service/physician-availability');
  }
  updatePhysician(physicianId: number, physician: Physician): Observable<Physician> {
    console.log(physicianId);
    console.log(physician);
    // console.log("dsfsfsfsd");
    return this.http.put<Physician>('http://localhost:9001/physician-availability-service/physician-availability/'+physicianId, physician);
  }


  getAllAppointments(){
    return this.http.get<any>('http://localhost:9001/appointment-service/appointments');
  }



  getAllNurses(){
    return this.http.get<any>("http://localhost:9001/auth0-service/nurses");
  }

  getAllAdmin(){
    return this.http.get<any>("http://localhost:9001/auth0-service/admin");
  }

}
