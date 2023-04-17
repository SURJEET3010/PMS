import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedDataService } from 'src/app/services/shared.data.service';
import { PrescribedService } from './prescribed.service';

@Component({
  selector: 'app-prescribed',
  templateUrl: './prescribed.component.html',
  styleUrls: ['./prescribed.component.css']
})
export class PrescribedComponent {
  constructor(
    private Prescribed: PrescribedService,
    private sharedData: SharedDataService
  ) {}

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getPreviousPrescription();
  }

  getPreviousPrescription() {
    let visitId = this.sharedData.getVisitId();
    console.log(visitId);
    this.Prescribed.getPreviousPrescription(visitId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        console.log('Error ocured in test');
      },
    });
  }

  displayedColumns = ['prescriptionId', 'prescriptionName', 'dosage', 'notes'];
}

export interface PeriodicElement {
  prescriptionId: string;
  prescriptionName: string;
  dosage: string;
  notes: string;
}