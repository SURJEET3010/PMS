import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedDataService } from 'src/app/services/shared.data.service';
import { PrescriptionService } from './prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent {
  [x: string]: any;

  visitId: any;
  prescriptionDetails: any = {};

  pForm: Prescription = {
    prescriptionName: '',
    notes: '',
    dosage: '',
  };

  constructor(
    private prescriptionService: PrescriptionService,
    private http: HttpClient,
    private p: SharedDataService,
    private dialogRef: MatDialogRef<PrescriptionComponent>
  ) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  addPrescription(): void {
    let visitId = sessionStorage.getItem('visitId'); // this.p.getVisitId();
    console.log('visitid' + visitId);

    // const url = 'http://localhost:9001/health-record-service/visit/prescription/' + visitId;
    this.prescriptionService.addPrescriptionDetails(visitId,this.pForm).subscribe({
      next: (response) => {
        console.log(response);
        alert('Prescription Added successfully');
        //  this.pForm.reset();
        this.dialogRef.close();
      },
      error: (err) => {
        console.log('error occured');
        console.error();
      },
    });
  }
}

interface Prescription {
  prescriptionName: string;
  dosage: string;
  notes: string;
}
