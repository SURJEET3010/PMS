import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  patientCount = 0;
  doctorCount = 0;
  appointmentCount = 0;

  ngOnInit() {
    setInterval(() => {
      this.patientCount = Math.floor(Math.random() * 100);
      this.doctorCount = Math.floor(Math.random() * 20);
      this.appointmentCount = Math.floor(Math.random() * 50);
    }, 1000);
  }

}
