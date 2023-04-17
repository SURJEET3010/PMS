import { VisitDetailsComponent } from './../../../nurse-admin/nurse-components/visit-details/visit-details.component';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewPrescriptionService } from './view-prescription.service';

@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.component.html',
  styleUrls: ['./view-prescription.component.css']
})
export class ViewPrescriptionComponent {
  displayedColumns: any;

  constructor(private ViewPrescription:ViewPrescriptionService){}

  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  ngOnInit():void{
  const visitId = sessionStorage.getItem('visitId')
  this.getAllPrescription(visitId)
}


  getAllPrescription(visitId:any) {
    
    this.ViewPrescription.getAllPrescription(visitId).subscribe({
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

   this.displayedColumns = ['prescriptionId', 'prescriptionName', 'dosage', 'notes']
   this.dataSource = new MatTableDataSource<PeriodicElement>
  
  
}

}
export interface PeriodicElement {

  visitId:String;
  prescriptionId:string;
  prescriptionName:string;
  dosage:string;
  notes:string;
}
