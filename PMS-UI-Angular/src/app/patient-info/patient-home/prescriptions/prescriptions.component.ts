import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent {

 // displayedColumns = ['select','id', 'name','department','specialization','degree','mobile', 'email',];
 displayedColumns = ['id','physicianname','department','appointmentDate','appointmentStatus']
 dataSource = new MatTableDataSource<TableRow>([
   {id:1,physicianname:'Bob Jhonson',appointmentStatus: 'Accepted',appointmentDate:'15-04-2001',department:'health' },
   {id:2,physicianname:'Bob Jhonson',appointmentStatus: 'Accepted',appointmentDate:'12-02-2000',department:'health' },
   {id:3,physicianname:'Bob Jhonson',appointmentStatus: 'Accepted',appointmentDate:'12-02-2000',department:'health' },
   {id:4,physicianname:'Bob Jhonson',appointmentStatus: 'Accepted',appointmentDate:'12-02-2000',department:'health' },
   {id:5,physicianname:'Bob Jhonson',appointmentStatus: 'Accepted',appointmentDate:'12-02-2000',department:'health' },
   {id:6,physicianname:'Bob Jhonson',appointmentStatus: 'Accepted',appointmentDate:'12-02-2000',department:'health' },
 ]);
 constructor(private snackBar: MatSnackBar) { }

 selection = new SelectionModel<TableRow>(true, []);

 isAllSelected() {
   const numSelected = this.selection.selected.length;
   const numRows = this.dataSource.data.length;
   return numSelected === numRows;
 }
 masterToggle() {
   this.isAllSelected() ?
     this.selection.clear() :
     this.dataSource.data.forEach((row: TableRow) => this.selection.select(row));
 }
 onEdit(): void {
   console.log(`Editing user )`);
   // Add edit logic here
 }
 deleteRow(row:TableRow): void {
   const index = this.dataSource.data.indexOf(row);

   if (index >= 0) {
     this.dataSource.data.splice(index, 1);
     // this.dataSource.refreshData();
     this.snackBar.open('Row deleted successfully!', 'Close', {
       duration: 3000,
       verticalPosition: 'top'
     });
   }
 }

//   onDelete() :void {
//     console.log(`Deleting user )`);
// }
}

interface TableRow {
 id:number;
 physicianname:string;
 appointmentStatus:string;
 appointmentDate:string;
 department:string;
}

