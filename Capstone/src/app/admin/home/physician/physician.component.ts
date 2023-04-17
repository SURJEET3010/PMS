import { HttpClient } from '@angular/common/http';

import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MyServiceService } from 'src/app/my-service.service';
import { Observable } from 'rxjs';
import { Physician } from './physician';
import { EditdialogComponent } from './editdialog/editdialog.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.css']
})
export class PhysicianComponent {
  today: any;
 
  displayedColumns: string[] = ['id', 'name', 'department', 'startDate', 'endDate','action'];
  dataSource = new MatTableDataSource<Physician>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  physician: Physician[] = [];
  constructor(private myservice: MyServiceService ,public dialog: MatDialog,private http: HttpClient,private datePipe:DatePipe,
   ){
    this.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
   }

  
  ngOnInit() {
    this.getAllPhysician();
  }
  getAllPhysician(){
    this.myservice.getAllAvailability().subscribe(data=>{
      this.physician=data;
      this.dataSource = new MatTableDataSource<Physician>(this.physician);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    
    });
  }


    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openEditDialog(value:any){
    this.dialog.open(EditdialogComponent,{
      width:'350px',
      data:{
        availability:value
      }
    })
  }
}

