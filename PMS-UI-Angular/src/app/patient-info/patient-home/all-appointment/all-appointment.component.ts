import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AllAppointmentService } from './all-appointment.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-all-appointment',
  templateUrl: './all-appointment.component.html',
  styleUrls: ['./all-appointment.component.css'],
})
export class AllAppointmentComponent implements OnInit {
  // displayedColumns = ['select','id', 'name','department','specialization','degree','mobile', 'email',];

  displayedColumns = [
    'appointmentId',
    'physicianMail',
    'reason',
    'appointmentDate',
    'appointmentStatus',
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private snackBar: MatSnackBar,
    private service: AllAppointmentService,
  ) {}

  userStr: any = sessionStorage.getItem('user');
  userObj = JSON.parse(this.userStr);

  ngOnInit(): void {
    let patientId = this.userObj.patientId;

    console.log(patientId);

    this.service.getAllAppointments(patientId).subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log('error fetching appointments');
      },
    });
  }

  selection = new SelectionModel<TableRow>(true, []);

  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }
  // masterToggle() {
  //   this.isAllSelected()
  //     ? this.selection.clear()
  //     : this.dataSource.data.forEach((row: TableRow) =>
  //         this.selection.select(row)
  //       );
  // }
  onEdit(): void {
    console.log(`Editing user )`);
    // Add edit logic here
  }
  deleteRow(row: TableRow): void {
    const index = this.dataSource.data.indexOf(row);

    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      // this.dataSource.refreshData();
      this.snackBar.open('Row deleted successfully!', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
      });
    }
  }

  //   onDelete() :void {
  //     console.log(`Deleting user )`);
  // }
}

interface TableRow {
  id: number;
  physicianname: string;
  appointmentStatus: string;
  appointmentDate: string;
  department: string;
}
