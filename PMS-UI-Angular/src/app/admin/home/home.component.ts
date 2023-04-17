import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  patientCount = 0;
  doctorCount = 0;
  appointmentCount = 0;
  nurseCount =0;
  // longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  // from Japan.`;

  constructor(private service:MyServiceService){}

  ngOnInit() {
    setInterval(() => {
      this.patientCount = Math.floor(40);
      this.doctorCount = Math.floor(100);
      this.appointmentCount = Math.floor(50);
      this.nurseCount = Math.floor(30);
    }, 1000);

    this.getAppointments();
  
  }
  displayedColumns = ['patientId','patientName','physicianEmail','appointmentDate','acceptance']
  dataSource = new MatTableDataSource<TableRow>([
  ]);

  selection = new SelectionModel<TableRow>(true, []);
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  onEdit(): void {
    console.log(`Editing user )`);
    // Add edit logic here
  }

  onDelete() :void {
    console.log(`Deleting user )`);
}

getAppointments(){
  this.service.getAllAppointments().subscribe({
    next:(res)=>{
      console.log(res);
      this.dataSource = new MatTableDataSource<TableRow>(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      
    },
    error:(err)=>{
      console.error();
      
      console.log("Error fetching appointments");
      
    }
  })
}

}

interface TableRow {
  patientId: string;
  physicianEmail: string;
  appointmentDate: string;
  acceptance: string;
}
