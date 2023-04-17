import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentService } from './appointment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-pending-appointments',
  templateUrl: './pending-appointments.component.html',
  styleUrls: ['./pending-appointments.component.css']
})
export class PendingAppointmentsComponent {
  email:any;
  constructor(private appointment:AppointmentService,   private formBuilder: FormBuilder, public auth: AuthService ){
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

  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  patientEmail:any;
  patientName:any;
  appointmentDate!:any;
 
  acceptedMessage!: FormGroup;
  rejectedMessage!:FormGroup;
  ngOnInit():void{
  this.getAllAppointment();

 
  this.acceptedMessage = this.formBuilder.group({
    subject: ['Appointment Accepted'],
    message: ['Congrats, '+ this.patientName + '\nYour appointment has been accepted'],
    to: [[this.patientEmail]]
  })

  this.rejectedMessage = this.formBuilder.group({
    subject: ['Appointment Rejected'],
    message: ['Sorry, '+ this.patientName + '\nYour appointment has been rejected'],
    to: [[this.patientEmail]]
  })
}

  getAllAppointment() {

    

    console.log("email is "+this.email);
    
    
    this.appointment.getallappointment(this.email).subscribe({
      next:(res)=>{
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

   displayedColumns = ['appointmentId','patientId','patientName','date','reason','submissionDate','actions']
  
 
   selection = new SelectionModel<TableRow>(true, []);
 
   isAllSelected() {
     const numSelected = this.selection.selected.length;
     const numRows = this.dataSource.data.length;
     return numSelected === numRows;
   }


   deleteAppointment(appId: number,patientId:any) {


    this.appointment.getPatientDetails(patientId).subscribe({
      next:(res)=>{
        console.log(res.email);
        this.patientEmail = res.email;
        this.patientName = res.firstName+" "+res.lastName;

        this.ngOnInit();
      },
      error:(err)=>{
        console.log("Error");
        
        this.ngOnInit();
      }
    })

    this.appointment.deleteAppointment(appId).subscribe({
      next:(res)=>{
        console.log(`Appointment ${appId} deleted successfully`);
        this.getAllAppointment();

        console.log(this.rejectedMessage.value);
        
        this.appointment.sendNotification(this.rejectedMessage.value).subscribe({
          next:(res)=>{
            console.log("Email sent successfully");
          },
          error:(err)=>{
            console.log("Error sending notification");
          }
        })
      },
      error:(err)=>{
        console.log("Error occured");
      }
    });
  }

  
  updateAppointment(appId: number,patientId:any) {

    this.appointment.getPatientDetails(patientId).subscribe({
      next:(res)=>{
        console.log(res.email);
        this.patientEmail = res.email;
        this.patientName = res.firstName+" "+res.lastName;

        this.ngOnInit();
      },
      error:(err)=>{
        console.log("Error");
      }
    })

    this.appointment.updateAppointment(appId).subscribe({
      next:(res)=>{

        // this.appointmentDate = res.appointmentDate;
        console.log(`Appointment ${appId} updated successfully`);
        this.getAllAppointment();

        console.log(this.acceptedMessage.value);
        
        this.appointment.sendNotification(this.acceptedMessage.value).subscribe({
            next:(res)=>{
              console.log("Email sent successfully");
            },
            error:(err)=>{
              console.log("Error sending notification");
              
            }
        })
      },
      error:(err)=>{
        console.log("error");
      
      }
    });
  }

   masterToggle() {
     this.isAllSelected() ?
       this.selection.clear() :
       this.dataSource.data.forEach(row => this.selection.select(row));
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
   deleteRow(row:TableRow): void {
     const index = this.dataSource.data.indexOf(row);
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