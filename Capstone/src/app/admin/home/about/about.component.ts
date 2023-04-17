import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  displayedColumns = ['select','id','name','email','department','mobile',]
  dataSource = new MatTableDataSource<TableRow>([
    {id:'1', name: 'Jane Doe', email: 'jane.doe@example.com',department:'health',mobile:'46546575676',specialization:'eye' },
    { id:'2',name: 'Bob Johnson', email: 'johnson@example.com',department:'health',mobile:'9485456565',specialization:'eye' },
    { id:'3',name: 'Matt Hardy', email: 'mat@example.com',department:'health',mobile:'9485456565',specialization:'eye' },
    { id:'4', name: 'Bob Johnson', email: 'bob.johnson@example.com',department:'health',mobile:'9485456565',specialization:'eye' },
    { id:'5',name: 'Brock Lesner', email: 'lesner@example.com',department:'health',mobile:'9485456565',specialization:'eye' },
  ]);

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

  onDelete() :void {
    console.log(`Deleting user )`);
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

