import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
export interface MyData {
  id: string;
  name: string;
  department: string;
  specialization: string;
  degree: string;
  mobile: string;
  email: string;
}


@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.css']
})
export class PhysicianComponent {
 
  // displayedColumns = ['select','id', 'name','department','specialization','degree','mobile', 'email',];
  displayedColumns = ['select','id','name','email','department','mobile','actions']
  dataSource = new MatTableDataSource<TableRow>([
    // {id:'1', name: 'John Smith',department:'heath',specialization:'eye',degree:'MBBS',mobile:'87436483', email: 'john.smith@example.com' },
    // {id:'1', name: 'John Smith',department:'heath',specialization:'eye',degree:'MBBS',mobile:'87436483', email: 'john.smith@example.com' },
    // {id:'1', name: 'John Smith',department:'heath',specialization:'eye',degree:'MBBS',mobile:'87436483', email: 'john.smith@example.com' },
    // {id:'1', name: 'John Smith',department:'heath',specialization:'eye',degree:'MBBS',mobile:'87436483', email: 'john.smith@example.com' },
    // {id:'1', name: 'John Smith',department:'heath',specialization:'eye',degree:'MBBS',mobile:'87436483', email: 'john.smith@example.com' },
    // {id:'1', name: 'John Smith',department:'heath',specialization:'eye',degree:'MBBS',mobile:'87436483', email: 'john.smith@example.com' },
    // {id:'1', name: 'John Smith',department:'heath',specialization:'eye',degree:'MBBS',mobile:'87436483', email: 'john.smith@example.com' },
    {id:'1', name: 'Jane Doe', email: 'jane.doe@example.com',department:'health',mobile:'46546575676',specialization:'eye' },
    { id:'2',name: 'Bob Johnson', email: 'johnson@example.com',department:'health',mobile:'9485456565',specialization:'eye' },
    { id:'3',name: 'Matt Hardy', email: 'mat@example.com',department:'health',mobile:'9485456565',specialization:'eye' },
    { id:'4', name: 'Bob Johnson', email: 'bob.johnson@example.com',department:'health',mobile:'9485456565',specialization:'eye' },
    { id:'5',name: 'Brock Lesner', email: 'lesner@example.com',department:'health',mobile:'9485456565',specialization:'eye' },
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
      this.dataSource.data.forEach(row => this.selection.select(row));
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
  id: string;
  name: string;
  department: string;
  specialization: string;
  // degree: string;
  mobile: string;
  email: string;


}
