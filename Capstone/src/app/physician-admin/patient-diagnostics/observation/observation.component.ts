import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedDataService } from 'src/app/services/shared.data.service';
import { ObservationService } from './observation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css'],
})
export class ObservationComponent implements OnInit {
  [x: string]: any;

  visitId: any;
  observationDetails: any = {};

  pForm: observation = {
    testName: '',
    result: '',
    notes: '',
  };

  constructor(
    private observationService: ObservationService,
    private http: HttpClient,
    private p: SharedDataService,
    // private healthInfo: HealthInformationComponent,
    private dialogRef: MatDialogRef<ObservationComponent>,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

  addTest(): void {
    let visitId = sessionStorage.getItem('visitId'); //this.p.getVisitId();
    console.log('visitid' + visitId);

    const url =
      'http://localhost:9001/health-record-service/visit/test/' + visitId;
    this.http.post(url, this.pForm).subscribe({
      next: (response) => {
        this.p.dataAdded.next(true);
        console.log(response);
        this._snackBar.open('Test Added Successfully', '', {
          duration: 2000,
        });
        // alert('Test Added successfully');

        this.dialogRef.close();
        // this.healthInfo.getAlltestdetails();
      },
      error: (err) => {
        console.log('error occured');
        console.error();
      },
    });
  }
}

interface observation {
  testName: string;
  result: string;
  notes: string;
}
