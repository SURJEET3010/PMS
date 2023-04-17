import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent {

  constructor(private snackBar: MatSnackBar, private admins : MyServiceService ) { }
  
  displayedColumns = ['id','name','email','contactNumber']

  dataSource !: MatTableDataSource<any>;
  ngOnInit(): void {
      this.getAllAdmin();
  }
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  getAllAdmin(){
    this.admins.getAllAdmin().subscribe({
      next :(res)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
          console.log(res);
          
      },
      error : (res) =>{
        console.log("error :"+res);
      }
    });
   }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
