import { TestInfoComponent } from './../test-info/test-info.component';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PrescribedComponent } from '../prescribed/prescribed.component';
import { PreviousRecordsService } from './previous-records.service';
import { SharedDataService } from 'src/app/services/shared.data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previous-records',
  templateUrl: './previous-records.component.html',
  styleUrls: ['./previous-records.component.css']
})
export class PreviousRecordsComponent {
  constructor(
    private _dialog: MatDialog,
    private visitHistory: PreviousRecordsService,
    private sharedData: SharedDataService,
    private router: Router
  ) {}

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.visitHistory
      .getAllVisitHistory(sessionStorage.getItem('patientId'))
      .subscribe({
        next: (res) => {
          console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.log('Error occured');
        },
      });
  }
  displayedColumns = ['id', 'test', 'prescription'];

  // constructor(private appointment:PhysicianService, private router: Router){}
  // dataSource !: MatTableDataSource<any>;
  // dataSource = new MatTableDataSource<TableRow>([
  //     {id:'1', observedBy: 'John Smith',date:'heath'},

  //   ]);

  selection = new SelectionModel<TableRow>(true, []);
  // private _dialog: any;

  opentest(visitId: any) {
    this._dialog.open(TestInfoComponent);
    this.sharedData.setVisitId(visitId);
  }
  openprescribe(visitId: any) {
    this._dialog.open(PrescribedComponent);
    this.sharedData.setVisitId(visitId);
  }
  close() {
    this.router.navigate(['./health-info']);
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
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
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
  observedBy: string;
  date: string;
  // test:string;
  // prescription:string;
}
