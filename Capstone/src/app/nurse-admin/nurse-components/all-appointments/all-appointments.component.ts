import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AcceptedAppointmentService } from 'src/app/services/accepted.appointment.service';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent {
  
  displayedColumns = [
    // 'id',
    'patientId',
    'patientName',
    'appointmentDate',
    'reason',
    'actions',
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatDatepicker) picker!: MatDatepicker<Date> | any;

  selectedDate!: Date | any;

  constructor(
    private router: Router,
    private acceptedAppointment: AcceptedAppointmentService,
    private sharedData: SharedDataService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getAllAppointment();
    this.allAllergies();
  }

  allAllergies() {
    this.acceptedAppointment.getAllergies().subscribe({
      next: (res) => {
        console.log(res);
        sessionStorage.setItem('allergiesObj', JSON.stringify(res));
      },
      error: (err) => {
        console.log('Error occured in fetching allergies');
      },
    });
  }

  getAllAppointment() {
    this.acceptedAppointment.getAppointments().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log('Error occured : ' + err);
      },
    });
  }

  // patientId!: any;
  patientInfo(patientId: any, appointmentId: any) {
    this.router.navigate(['/nurse-home/patient-profile']);
    // console.log(appointmentId);
    // this.sharedData.setPatientId(patientId);
    // this.sharedData.setAppointmentId(appointmentId);
    sessionStorage.setItem('patientId', patientId);
    sessionStorage.setItem('appointmentId', appointmentId);
  }

  formattedToday!: any;
  todayDate() {
    const today = new Date();
    //alert('Date is ' + today);
    this.formattedToday = this.datePipe.transform(today, 'yyyy-MM-dd');
    console.log(this.formattedToday);
    // this.filterForm.setValue('2023');
  }
  

  filterForm = new FormGroup({
    filterInput: new FormControl('default value'),
  });

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //   onDelete() :void {
  //     console.log(`Deleting user )`);
  // }

  // isoDateString!: any;
  formattedDate!: any;
  onDateChange($event: any): void {
    this.picker = this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
    console.log(this.picker);
    $event.target.value = this.picker;
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
}
