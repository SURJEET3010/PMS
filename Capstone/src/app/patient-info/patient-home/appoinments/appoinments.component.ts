import { Physician } from './../../../admin/home/physician/physician';
import { AppointmentService } from './../../../physician-admin/pending-appointments/appointment.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentsService } from './appointments.service';
import { DatePipe } from '@angular/common';
import { MatDatepicker } from '@angular/material/datepicker';
import { AuthService } from '@auth0/auth0-angular';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.css'],
})
export class AppoinmentsComponent implements OnInit {
  appointmentForm!: FormGroup;

  // doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Brown'];

  doctorsDict: { [key: string]: any } = {};
  doctors: string[] = []
  // physicianEmails:string[] = [];

  // allergies = ['Peanuts', 'Shellfish', 'Penicillin'];

  // constructor(){}

  // todaysDate = this.DatePipe.transform(
  //   this.appointmentDate,
  //   'dd/MM/yyyy'
  // );
  // console.log(todaysDate);

  userString: any = sessionStorage.getItem('user');

  user = JSON.parse(this.userString);

  today!: any;
  appDate!: any;

  selectedDate!: Date;

  physicianName:any;
  appointmentFormattedDate($event: any) {
    this.appDate = this.datePipe.transform($event.target.value, 'yyyy-MM-dd');
    // this.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd'); // minimun date 
    this.doctors = []
    this.doctorsDict = {}
    console.log(this.appDate);

    this.service.getAllPhysician(this.appDate).subscribe({
      next:(res)=>{
        if (res!=null){
        console.log(res);
        for (const value of res){
          // console.log(value.physicianName+" - "+value.department);
          // this.doctors.push(value.physicianName+" - "+value.speciality)
          this.doctorsDict[value.physicianName+" - "+value.speciality]=value.physicianEmail;
          this.doctors = Object.keys(this.doctorsDict);

          // this.physicianEmails.push(value.physicianEmail)
          console.log(this.doctorsDict);
          console.log(this.doctors);
          
          // console.log(this.physicianEmails);
          
          
        }
        // console.log(res[0].physicianName);
        
        }else{
          console.log("No physician available");
        }
        
      },
      error:(err)=>{
        console.log("Error occured fetching physicican");
        
      }
    })
    
  }
  dataSource!: MatTableDataSource<any>;

  constructor(
    private fb: FormBuilder,
    private service: AppointmentsService,
    private datePipe: DatePipe,
    public auth : AuthService
  ) {}

  appointmentDate!: Date;

  
  // physicianName:any;

  ngOnInit(): void {
    this.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    // const mail  = this.auth.user$?.['email'];
    this.appointmentForm = this.fb.group({
      physicianName: ['',Validators.required],
      reason: ['',Validators.required],
      appointmentDate: ['',Validators.required],
      acceptance: ['pending'],
      physicianEmail: [''],
      submissionDate: [this.today],
      patientId: [this.user.patientId],
      patientName: [this.user.firstName+" "+this.user.lastName],
    });
  }


  onSubmit() {
    console.log(this.user.patientId);
    this.appointmentForm.value.appointmentDate = this.appDate;

    console.log(this.appointmentForm.value);

    this.appointmentForm.value.physicianEmail = this.doctorsDict[this.appointmentForm.value.physicianName]

    console.log( this.auth.user$);
    this.service.postAppointment(this.appointmentForm.value).subscribe({
      next: (res) => {
        console.log(res);
        alert('Appointment Booked Successfully');
        this.appointmentForm.reset();
      },
      error: (err) => {
        console.log(this.appointmentForm.value);

        console.log("error submitting");
        console.error();
      },
    });
  }
  // }
  // }
}
