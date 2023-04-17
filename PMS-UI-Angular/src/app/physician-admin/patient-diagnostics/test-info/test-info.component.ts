import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedDataService } from 'src/app/services/shared.data.service';
import { TestInfoService } from './test-info.service';

@Component({
  selector: 'app-test-info',
  templateUrl: './test-info.component.html',
  styleUrls: ['./test-info.component.css'],
})
export class TestInfoComponent {
  constructor(
    private sharedData: SharedDataService,
    private testService: TestInfoService
  ) {}

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getTests();
  }

  getTests() {
    let visitId = this.sharedData.getVisitId();
    console.log('visit id ' + visitId);
    this.testService.getAllTest(visitId).subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log('Error ocured in test');
      },
    });
  }

  displayedColumns = ['testConducted', 'actual', 'remarks'];
  // dataSource = new MatTableDataSource<PeriodicElement>([

  //   { testConducted:'zxcv', actual:'1', status:'qwe' ,remarks:'10'},
  //   { testConducted:'zxcv', actual:'1', status:'qwe' ,remarks:'10'},

  // ]);
}

export interface PeriodicElement {
  status: String;
  testConducted: string;
  actual: string;
  remarks: string;
}
