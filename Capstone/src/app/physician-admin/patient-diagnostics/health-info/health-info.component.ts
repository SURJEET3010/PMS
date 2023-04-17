import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared.data.service';
import { EditComponent } from '../edit/edit.component';
import { ObservationComponent } from '../observation/observation.component';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { PreviousRecordsComponent } from '../previous-records/previous-records.component';
import { ViewPrescriptionComponent } from '../view-prescription/view-prescription.component';
import { HealthinformationService } from './healthinformation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-health-info',
  templateUrl: './health-info.component.html',
  styleUrls: ['./health-info.component.css'],
})
export class HealthInfoComponent implements OnInit {
  constructor(
    private healthInformations: HealthinformationService,
    private _dialog: MatDialog,
    private router: Router,
    private shareData: SharedDataService,
    private _snackBar: MatSnackBar
  ) {}

  displayedColumns: any;

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  patientId: any = sessionStorage.getItem('patientId'); //this.shareData.getPatientId();

  patientName!: any;
  patientAge!: any;
  patientGender!: any;
  patientEmail!: any;
  dob!: any;
  address!: any;

  getPatientInfo() {
    console.log('patientid is ' + this.patientId);
    this.healthInformations.getPatientDetails(this.patientId).subscribe({
      next: (res) => {
        console.log(res);
        this.patientName = res.firstName + ' ' + res.lastName;
        this.patientAge = 25;
        this.patientGender = res.gender;
        this.patientEmail = res.email;
        this.dob = res.dob;
        this.address = res.address;
      },
      error: (err) => {
        console.log('error occured');
      },
    });
  }

  visitId: any = sessionStorage.getItem('visitId'); //this.shareData.getVisitId();

  bloodGroup!: any;
  bpSystollic!: any;
  bpDiastolic!: any;
  bodyTemperature!: any;
  respirationRate!: any;
  weight!: any;
  allergy!: any;

  getHealthInfo() {
    console.log('patientId issssss' + this.patientId);
    this.healthInformations.getHealthDetails(this.patientId).subscribe({
      next: (res) => {
        // console.log(res);
        this.bloodGroup = res.bloodGroup;
        this.bpSystollic = res.bpSystollic;
        this.bpDiastolic = res.bpDiastolic;
        this.bodyTemperature = res.bodyTemperature;
        this.respirationRate = res.respirationRate;
        this.weight = res.weight;
        this.allergy = res.allergy;
      },
      error: (err) => {
        console.log('error occured');
      },
    });
  }

  ngOnInit(): void {
    this.visitId = sessionStorage.getItem('visitId'); //this.shareData.getVisitId();

    this.getPatientInfo();
    this.getHealthInfo();

    this.visitId = sessionStorage.getItem('visitId'); //this.shareData.getVisitIds();
    this.shareData.dataAdded.subscribe(() => {
      this.getAlltestdetails();
    });
    this.getAlltestdetails();
  }

  // ngOnChanges() {
  //   this.getAlltestdetails();
  // }
  deleteTest(testId: any) {
    this.healthInformations.deleteTest(testId).subscribe(() => {
      this.shareData.dataAdded.next(true);
      console.log(`Test ${testId} Deleted successfully`);
      this._snackBar.open('Test Deleted successfully', '', {
        duration: 2000,
      });
      // this.ngOnInit();
      // this.getAlltestdetails();
      this.shareData.dataAdded.subscribe(() => {
        this.getAlltestdetails();
      });
    });
  }

  getAlltestdetails() {
    console.log('visit id isssszzz : ' + this.visitId);

    this.healthInformations.getAlltestdetails(this.visitId).subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log('error fetching tests');
      },
    });

    this.displayedColumns = [
      'testId',
      // 'visitId',
      'testName',
      'notes',
      'result',
      'action',
    ];
    this.dataSource = new MatTableDataSource<TableRow>();
  }

  selection = new SelectionModel<TableRow>(true, []);
  openPrescription() {
    this._dialog.open(PrescriptionComponent);
  }
  openObservation() {
    this._dialog.open(ObservationComponent);
  }
  openviewprescription() {
    this._dialog.open(ViewPrescriptionComponent);
  }
  openedit() {
    this._dialog.open(EditComponent);
  }

  openrecord() {
    //this.router.navigate(['./previous-records']);
    this._dialog.open(PreviousRecordsComponent);
  }
  onUpdateClick() {
    this.router.navigate(['./physician-dashboard/previous-records']);
  }

  close() {
    this.router.navigate(['./physician-dashboard/today-appointments']);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row: any) => this.selection.select(row));
  }
  onEdit(): void {
    console.log(`Editing user )`);
    // Add edit logic here
  }

  deleteRow(row: TableRow): void {
    const index = this.dataSource.data.indexOf(row);

    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
    }
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
  action: string;
}
