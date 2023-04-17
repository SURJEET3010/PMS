import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';


@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent {
  patientCount = 0;
  doctorCount = 0;
  appointmentCount = 0;
  nurseCount =0;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan.`;

  ngOnInit() {
    setInterval(() => {
      this.patientCount = Math.floor(Math.random() * 100);
      this.doctorCount = Math.floor(Math.random() * 20);
      this.appointmentCount = Math.floor(Math.random() * 50);
      this.nurseCount = Math.floor(Math.random() * 40);
    }, 1000);
   
  }
  patientName: string = 'John Doe';
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.';
  
}