import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MyServiceService } from 'src/app/my-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent {
  displayedColumns = ['id','name','email','mobile']

  dataSource !: MatTableDataSource<TableRow>;
  ngOnInit(): void {
      this.getNurses();
  }

 // dataSource = new MatTableDataSource<TableRow>([
    // {id:'1', name: 'John Smith',department:'heath',specialization:'eye',degree:'MBBS',mobile:'87436483', email: 'john.smith@example.com' },
    // {id:'1', name: 'John Smith',department:'heath',specialization:'eye',degree:'MBBS',mobile:'87436483', email: 'john.smith@example.com' },
    // {id:'1', name: 'John Smith',department:'heath',specialization:'eye',degree:'MBBS',mobile:'87436483', email: 'john.smith@example.com' },
    // {id:'1', name: 'John Smith',department:'heath',specialization:'eye',degree:'MBBS',mobile:'87436483', email: 'john.smith@example.com' },
    // {id:'1', name: 'John Smith',department:'heath',specialization:'eye',degree:'MBBS',mobile:'87436483', email: 'john.smith@example.com' },
    // {id:'1', name: 'John Smith',department:'heath',specialization:'eye',degree:'MBBS',mobile:'87436483', email: 'john.smith@example.com' },
    // {id:'1', name: 'John Smith',department:'heath',specialization:'eye',degree:'MBBS',mobile:'87436483', email: 'john.smith@example.com' },
    // {name: 'Jane Doe', email: 'jane.doe@example.com',mobile:'46546575676', },
    // { name: 'Bob Johnson', email: 'johnson@example.com',mobile:'9485456565' },
    // {name: 'Jane Doe', email: 'jane.doe@example.com',mobile:'46546575676', },
    // { name: 'Bob Johnson', email: 'johnson@example.com',mobile:'9485456565' },
    // {name: 'Jane Doe', email: 'jane.doe@example.com',mobile:'46546575676', },
    // { name: 'Bob Johnson', email: 'johnson@example.com',mobile:'9485456565' },
    // {name: 'Jane Doe', email: 'jane.doe@example.com',mobile:'46546575676', },
    // { name: 'Bob Johnson', email: 'johnson@example.com',mobile:'9485456565' },

    // { name: 'Matt Hardy', email: 'mat@example.com',department:'health',mobile:'9485456565',},
    // {  name: 'Bob Johnson', email: 'bob.johnson@example.com',department:'health',mobile:'9485456565',specialization:'eye' },
    // { name: 'Brock Lesner', email: 'lesner@example.com',department:'health',mobile:'9485456565',specialization:'eye' },
 // ]);
  constructor(private snackBar: MatSnackBar, private nurses : MyServiceService ) { }

  selection = new SelectionModel<TableRow>(true, []);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 getNurses(){
  this.nurses.getAllNurses().subscribe({
    next :(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res);
        
    },
    error : (res) =>{
      console.log("error :"+res);
    }
  });
 }


}

interface TableRow {
  nurseId : string;
  name: string;
  contact: string;
  email: string;
}
