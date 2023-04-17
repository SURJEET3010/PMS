import { Component } from '@angular/core';

@Component({
  selector: 'app-home-ui',
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.css']
})
export class HomeUiComponent {
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

   userStr:any = sessionStorage.getItem('user')

   user = JSON.parse(this.userStr)



  
  patientName = this.user.firstName+" "+this.user.lastName
  description: string = '';
  
}
