import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AppointmentComponent } from 'src/app/admin/home/appointment/appointment.component';
import { AddVisitService } from 'src/app/services/add.visit.service';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.css'],
})
export class VisitDetailsComponent {
  appointmnetId: any;

  //allergies = new FormControl('');
  allergyList: string[] = [ ];

  bloodGroupList: string[] = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  visitForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sharedData: SharedDataService,
    private addVisitService: AddVisitService,
    private dialogRef: MatDialogRef<VisitDetailsComponent>
  ) {}


  allergy:any = sessionStorage.getItem('allergiesObj')

  allergyObj = JSON.parse(this.allergy)
  ngOnInit(): void {

    // console.log(this.allergyObj.allergyId);
    
    


    this.visitForm = this.formBuilder.group({
      // height: ['', Validators.required ,Validators.min(50), Validators.max(250)],
      // weight: ['', Validators.required],
      height: ['', [Validators.required, Validators.min(30), Validators.max(250)]],
      weight: ['', [Validators.required, Validators.min(2), Validators.max(300)]],
      bloodGroup: ['', Validators.required],
      allergy: ['', Validators.required],
      bodyTemperature: ['', Validators.required],
      respirationRate: ['', [Validators.required, Validators.min(10), Validators.max(30)]],
      bpSystollic: ['', Validators.required],
      bpDiastolic: ['', Validators.required],
      keyNotes: ['', Validators.required],
      appointmentId: [sessionStorage.getItem('appointmentId')]

      // nurseEmail: ['nur@mail'],
      // physicianEmail: ['doc@mail'],
      // createdDate: ['03-04-2023'],
      // modifiedDate: ['2023-03-25'],
      // visitId: ['25'],
      // patientId: ['1'],
    });

    this.allAllergiesList();
  }

  // allergy!: string[] | any;
  allAllergiesList() {
    let allergy:any = sessionStorage.getItem('allergiesObj');
    let allergyObj = JSON.parse(allergy)
    for (let allergy of allergyObj) {
      this.allergyList.push(allergy.allergyName)
    }    
  }




 // patientName!: string


 
//  patientName = this.user.firstName+" "+this.user.lastName

  //isButtonDisabled: boolean = false;
  saveVisit() {
    let patientId = sessionStorage.getItem('patientId'); //this.sharedData.getPatientId();
    if (this.visitForm.valid) {
      let data = this.visitForm.value;
      console.log(data);
      this.addVisitService.postVisitData(patientId, data).subscribe({
        next: () => {
          this.addVisitService.dataAdded.next(true);
          alert('Added Visit Details Successfully');
          // this.isButtonDisabled = true;
          this.visitForm.reset();
          this.dialogRef.close();
          //    this.sharedData.setButtonState(this.isButtonDisabled);
        },
        error: (err) => {
          alert('Error adding visit details\n');
          console.error();
          // this.isButtonDisabled = false;
          // this.sharedData.setButtonState(this.isButtonDisabled);
        },
      });
    }
  }
}
