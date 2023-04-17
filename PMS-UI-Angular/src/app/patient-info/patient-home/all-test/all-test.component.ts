import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedDataService } from 'src/app/services/shared.data.service';
import { TestHistoryService } from 'src/app/services/test.history.service';

@Component({
  selector: 'app-all-test',
  templateUrl: './all-test.component.html',
  styleUrls: ['./all-test.component.css'],
})
export class AllTestComponent {
  constructor(
    private sharedData: SharedDataService,
    private testHistory: TestHistoryService
  ) {}

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.allTestHistory();
  }

  allTestHistory() {
    let visitId = this.sharedData.getVisitId();
    console.log('visit id : ' + visitId);
    this.testHistory.getTestHistory(visitId).subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log('error in test');
      },
    });
  }

  displayedColumns = ['testConducted', 'actualResult', 'remarks'];
}
