import { AppointmentComponent } from './admin/home/appointment/appointment.component';
import { AboutComponent } from './admin/home/about/about.component';
import { PhysicianComponent } from './admin/home/physician/physician.component';
import { PatientComponent } from './admin/home/patient/patient.component';
import { NurseComponent } from './admin/home/nurse/nurse.component';
import { HomeComponent } from './admin/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: NavbarComponent,
    // path: '',
    // component: DashboardComponent,
    
        // path: 'home',
        // component: HomeComponent,
        children: [
         { path: 'home',
        component: HomeComponent},
          { path: 'nurse', component: NurseComponent },
          { path: 'patient', component: PatientComponent },
          { path: 'physician', component: PhysicianComponent },
          {path:  'about', component: AboutComponent},
          {path: 'appointment',component:AppointmentComponent}
        ]
      },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
