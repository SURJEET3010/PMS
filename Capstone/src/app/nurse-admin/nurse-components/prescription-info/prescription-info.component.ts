import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PrescriptionHistoryService } from 'src/app/services/prescription.history.service';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-prescription-info',
  templateUrl: './prescription-info.component.html',
  styleUrls: ['./prescription-info.component.css'],
})
export class PrescriptionInfoComponent {
  constructor(
    private prescriptionHistory: PrescriptionHistoryService,
    private sharedData: SharedDataService
  ) {}

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    let visitId = this.sharedData.getVisitId();
    console.log('visit id : ' + visitId);
    this.prescriptionHistory.getPrescriptionHistory(visitId).subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log('Error in prescription');
      },
    });
  }

  displayedCols: string[] = ['name', 'dosage', 'notes'];
}
export interface Patient {
  name: string;
  age: number;
  gender: string;
  diagnosis: string;
}
