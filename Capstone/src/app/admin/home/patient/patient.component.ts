import { MyServiceService } from './../../../my-service.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Patientinfo } from './patientinfo';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: Patientinfo[] = [];
  displayedColumns = ['id','name','email','gender','contactNumber']
  dataSource = new MatTableDataSource<Patientinfo>([]);

  constructor(private myservice: MyServiceService){}
  @ViewChild(MatSort)
  sort!: MatSort;
  
  ngOnInit(): void {
    this.myservice.getAllPatients().subscribe(data => {
      this.patients = data;
      this.dataSource = new MatTableDataSource<Patientinfo>(this.patients);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.patients.forEach((patients) => {
        patients.name = `${patients.title} ${patients.firstName} ${patients.lastName}`;
      });
    });
  }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

  onEdit(): void {
    console.log(`Editing user )`);
    // Add edit logic here
  }

  onDelete() :void {
    console.log(`Deleting user )`);

}
}
