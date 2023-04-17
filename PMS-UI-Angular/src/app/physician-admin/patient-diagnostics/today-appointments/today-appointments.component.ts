import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared.data.service';
import { TodayAppointmentsService } from './today.appointments.service';
import { AuthService } from '@auth0/auth0-angular';


export interface MyData {
  id: string;
  name: string;
  department: string;
  specialization: string;
  degree: string;
  mobile: string;
  email: string;
  Bookedon: string;
}

@Component({
  selector: 'app-today-appointments',
  templateUrl: './today-appointments.component.html',
  styleUrls: ['./today-appointments.component.css']
})
export class TodayAppointmentsComponent {
  displayedColumns = [
    'appointmentId',
    'patientId',
    'patientName',
    'appointmentDate',
    'reason',
    'acceptance',
    'action',
  ];

  email:any;

  constructor(
    private appointment: TodayAppointmentsService,
    private router: Router,
    private shareData: SharedDataService,
    public auth:AuthService
  ) {
    this.auth.user$.subscribe({
      next:(user)=>{
        this.email = user?.email
        // console.log(user?.email);
      },
      error:(error)=>{
        console.log("error fetching physician email");
      }
    })
  }

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // today:Date = new Date();
  ngOnInit(): void {
    this.getAllAppointment();
    // console.log(this.today)|date:'shortDate');
  }

  getAllAppointment() {
    this.appointment.getallappointment(this.email).subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  selection = new SelectionModel<TableRow>(true, []);

  beforeUpdate(id: any) {

    console.log('patientId' + id);

    this.appointment.getRecentVisitDetails(id).subscribe({
      next: (res) => {
        console.log(res['visitId']);
        // this.shareData.setVisitIds(res['visitId']);
        sessionStorage.setItem('visitId', res['visitId']);
         this.onUpdateClick(id);
      },
      error: (err) => {
        console.log('Error fetching recent data');
        this.onUpdateClick(id);
      },
    });

   
  }
  onUpdateClick(id: any) {
   

    this.shareData.setPatientId(id);
    sessionStorage.setItem('patientId', id);
    this.router.navigate(['/physician-dashboard/health-info', id]);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
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
      // this.dataSource.refreshData();
      // this.snackBar.open('Row deleted successfully!', 'Close', {
      //   duration: 3000,
      //   verticalPosition: 'top'
      // });
    }
  }
}

interface TableRow {
  id: string;
  name: string;
  department: string;
  specialization: string;
  mobile: string;
  email: string;
}


