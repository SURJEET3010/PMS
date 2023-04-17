import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  constructor() {}

  dataAdded = new Subject<boolean>();

  visitId: any;
  patientId: any;
  setVisitId(vId: any) {
    this.visitId = vId;
  }

  getVisitId() {
    return this.visitId;
  }

  setPatientId(pId: any) {
    this.patientId = pId;
  }

  getPatientId() {
    return this.patientId;
  }

  // patientId: any;
  // visitId: any;
  appointmentId: any;

  // setPatientId(pId: any) {
  //   this.patientId = pId;
  // }
  // getPatientId() {
  //   return this.patientId;
  // }

  // setVisitId(vId: any) {
  //   this.visitId = vId;
  // }
  // getVisitId() {
  //   return this.visitId;
  // }

  setAppointmentId(aId: any) {
    this.appointmentId = aId;
  }
  getAppointmentId() {
    return this.appointmentId;
  }
}
