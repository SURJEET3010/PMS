
import { MyServiceService } from 'src/app/my-service.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormBuilder, Validators, FormsModule, NgForm, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Physician } from '../physician';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditdialogComponent{
 
  available:any;
  // Dialog: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,private myService: MyServiceService, private Dialog:MatDialogRef<EditdialogComponent>
  ) {
this.available = this.data.availability;
  }
  onCancel(){
    this.closeDialog();

  }
  closeDialog() {
   
    this.Dialog.close();
  }
 onSave(value:any){
    console.log(value);
    let newStartDate = new DatePipe('en-us').transform(value.startdate, 'yyyy-MM-dd');
    let newEndDate = new DatePipe('en-us').transform(value.enddate, 'yyyy-MM-dd');
    if (newStartDate == null || newEndDate == null)
      console.log("Date is invalied");
    else {
      this.available.startDate = newStartDate;
      this.available.endDate = newEndDate;
      this.available.availability = true;
      console.log(this.available);
      console.log(this.available.physicianId);
      
      this.myService.updatePhysician(this.available.physicianId,this.available).subscribe({
        next:(res)=>{
            console.log("Updated succesfully");
            
        },
        error:(err)=>{
          console.log("Error occured Updating");
          
        }
      });
      this.closeDialog();
    }
 }
}




