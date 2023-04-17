import { TestDetailsComponent } from './../test-details/test-details.component';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PrescriptionInfoComponent } from '../prescription-info/prescription-info.component';
import { SelectionModel } from '@angular/cdk/collections';
import { AddTestsComponent } from '../add-tests/add-tests.component';
import { VisitDetailsComponent } from '../visit-details/visit-details.component';
import { SharedDataService } from 'src/app/services/shared.data.service';
import { AcceptedAppointmentService } from 'src/app/services/accepted.appointment.service';
import { VisitHistoryService } from 'src/app/services/visit.history.service';
import { DatePipe } from '@angular/common';
import { AddVisitService } from 'src/app/services/add.visit.service';

export interface Patient {
  name: string;
  age: number;
  gender: string;
  diagnosis: string;
}

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css'],
})
export class PatientProfileComponent {
  showTable = false;

  dataSource!: MatTableDataSource<any>;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private sharedData: SharedDataService,
    private patientService: AcceptedAppointmentService,
    private visitHistory: VisitHistoryService,
    private datePipe: DatePipe,
    private addVisit:AddVisitService
  ) {}

  patientId: any = sessionStorage.getItem('patientId'); //this.sharedData.getPatientId();


  ngOnInit(): void {
    const now = new Date();
    console.log('patientid is ' + this.patientId);
    const formattedDate = this.datePipe.transform(now, 'yyyy-MM-dd');
    console.log(formattedDate);

    // console.log(this.patientService.getPatientDetails(this.patientId));

    this.addVisit.dataAdded.subscribe(()=>{
      this.getLastVisitDetails()
      this.getVisitHistory()
    })

    this.getPatientInfo();
    this.getVisitHistory();
    this.getLastVisitDetails();

  }

  patientName!: any;
  patientAge!: any;
  patientGender!: any;
  patientEmail!: any;
  // age!: any;
  // dateOfBirth: Date = new Date('1997-02-25');
  getPatientInfo() {
    this.patientService.getPatientDetails(this.patientId).subscribe({
      next: (res) => {
        console.log(res);
        // console.log("date is " + Date.now());
        
        this.patientName = res.firstName + ' ' + res.lastName;
        // this.patientAge = 23;
        this.patientAge = Math.floor(
          Math.abs(Date.now() - new Date(res.dob).getTime()) /
            (1000 * 3600 * 24) /
            365.25
        );
        this.patientGender = res.gender;
        this.patientEmail = res.email;
      },
      error: (err) => {
        console.log('error occured');

        // this.age = console.log(this.age);
      },
    });
  }

  bloodGroup!: string;
  weight!: string;
  height!: string;
  allergy!: any;
  keyNotes!: string;
  systolic!: number;
  diastolic!: number;
  visitDate!: any;
  bodyTemperature!: any;
  respirationRate!: any;
  createdDate!: any;

  today: any = this.datePipe.transform(new Date(), 'dd-MM-yyyy');

  getLastVisitDetails() {
    this.visitHistory.getRecentVisitDetails(this.patientId).subscribe({
      next: (res) => {
        console.log(res);
        this.bloodGroup = res.bloodGroup;
        this.systolic = res.bpSystollic;
        this.diastolic = res.bpDiastolic;
        this.allergy = res.allergy;
        this.keyNotes = res.keyNotes;
        this.weight = res.weight;
        this.height = res.height;
        this.visitDate = res.createdDate;
        this.bodyTemperature = res.bodyTemperature;
        this.respirationRate = res.respirationRate;
        this.createdDate = new Date(this.today);
      },
      error: (err) => {
        console.log('Error fetching recent details');
      },
    });
  }

  id: number = 1;

  displayedColumns = [
    // 'select',
    'visitId',
    // 'name',
    'date',
    'test',
    'prescription',
    // 'actions',
  ];

  getVisitHistory() {
    this.visitHistory.getPatientVisitHistory(this.patientId).subscribe({
      next: (res) => {
        console.log(res);
        // console.log('length is : ');
        // this.id += 1;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log('error occured: ' + err);
      },
    });
  }

  showPrescriptionTable(visitId: any): void {
    const dialogRef = this.dialog.open(PrescriptionInfoComponent, {
      width: '500px',
    });

    this.sharedData.setVisitId(visitId);
  }
  testPrescriptionTable(visitId: any): void {
    const dialogRef = this.dialog.open(TestDetailsComponent, {
      width: '500px',
    });

    this.sharedData.setVisitId(visitId);
  }

  selection = new SelectionModel<TableRow>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  openAddPatientDialog(): void {
    const dialogRef = this.dialog.open(VisitDetailsComponent, {
      width: '35%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openAddTest() {
    const dialogRef = this.dialog.open(AddTestsComponent, {
      width: '25%',
    });
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row: TableRow) =>
          this.selection.select(row)
        );
  }
  onEdit(): void {
    console.log(`Editing user )`);
    // Add edit logic here
  }

  onDelete(): void {
    console.log(`Deleting user )`);
  }
}

interface TableRow {
  id: string;
  name: string;
  department: string;
  mobile: string;
  email: string;
}
