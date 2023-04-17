import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedDataService } from 'src/app/services/shared.data.service';
import { PrescriptionsComponent } from '../prescriptions/prescriptions.component';
import { MedicalRecordsService } from './medical-records.service';
import { AllPrescriptionComponent } from '../all-prescription/all-prescription.component';
import { AllTestComponent } from '../all-test/all-test.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css'],
})
export class MedicalRecordsComponent {
  showTable = false;

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private service: MedicalRecordsService,
    private sharedData: SharedDataService // private patientService: AcceptedAppointmentService, // private visitHistory: VisitHistoryService
  ) {}

  userString: any = sessionStorage.getItem('user');
  userObj = JSON.parse(this.userString);

  patientId: any = this.userObj.patientId; //this.sharedData.getPatientId();

  ngOnInit(): void {
    console.log('patientid is ' + this.patientId);

    // this.getPatientInfo();
    this.getVisitHistory();
    // this.getAppointmentHistory();
  }

  patientName!: any;
  patientAge!: any;
  patientGender!: any;
  patientEmail!: any;

  // getPatientInfo() {
  //   this.service.getPatientDetails(this.patientId).subscribe({
  //     next: (res) => {
  //       this.patientName = res[0].firstName + ' ' + res[0].lastName;
  //       this.patientAge = 25;
  //       this.patientGender = res[0].gender;
  //       this.patientEmail = res[0].email;
  //     },
  //     error: (err) => {
  //       console.log('error occured');
  //     },
  //   });
  //}

  // id: number = 1;

  displayedColumns = ['visitId', 'test', 'prescription'];

  getVisitHistory() {
    this.service.getPatientVisitHistory(this.patientId).subscribe({
      next: (res) => {
        console.log(res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log('error occured: ' + err);
      },
    });
  }

  // getAppointmentHistory() {
  //   this.service.getPatientAppointment(this.patientId).subscribe({
  //     next: (res) => {
  //       console.log(res);

  //       this.dataSource = new MatTableDataSource(res);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //     },
  //     error: (err) => {
  //       console.log('Error fetching appointmets');
  //     },
  //   });
  // }

  showPrescriptionTable(visitId: any): void {
    const dialogRef = this.dialog.open(AllPrescriptionComponent, {
      width: '500px',
    });

    this.sharedData.setVisitId(visitId);
  }
  testPrescriptionTable(visitId: any): void {
    const dialogRef = this.dialog.open(AllTestComponent, {
      width: '500px',
    });

    this.sharedData.setVisitId(visitId);
  }
}
interface TableRow {
  id: string;
  name: string;
  department: string;
  specialization: string;
  // degree: string;
  mobile: string;
  email: string;
}
