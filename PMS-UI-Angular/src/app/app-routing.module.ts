import { PatientProfileComponent } from './nurse-admin/nurse-components/patient-profile/patient-profile.component';
import { PreviousRecordsComponent } from './physician-admin/patient-diagnostics/previous-records/previous-records.component';
import { PendingAppointmentsComponent } from './physician-admin/pending-appointments/pending-appointments.component';
import { HealthInfoComponent } from './physician-admin/patient-diagnostics/health-info/health-info.component';
import { TodayAppointmentsComponent } from './physician-admin/patient-diagnostics/today-appointments/today-appointments.component';
import { PhysicianNavbarComponent } from './physician-admin/physician-navbar/physician-navbar.component';
import { PrescriptionService } from './physician-admin/patient-diagnostics/prescription/prescription.service';
import { AppoinmentsComponent } from './patient-info/patient-home/appoinments/appoinments.component';
import { PatientHomeComponent } from './patient-info/patient-home/patient-home.component';
import { NurseSidebarComponent } from './nurse-admin/nurse-dashboard/nurse-sidebar/nurse-sidebar.component';

import { LoginFormComponent } from './homepage/login-form/login-form.component';
import { AppointmentComponent } from './admin/home/appointment/appointment.component';
import { AboutComponent } from './admin/home/about/about.component';
import { PhysicianComponent } from './admin/home/physician/physician.component';
import { PatientComponent } from './admin/home/patient/patient.component';
import { NurseComponent } from './admin/home/nurse/nurse.component';
import { HomeComponent } from './admin/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { RegistrationFormComponent } from './homepage/registration-form/registration-form.component';
import { DashboardPComponent } from './patient-info/dashboard-p/dashboard-p.component';
import { NurseHomeComponent } from './nurse-admin/nurse-dashboard/nurse-home/nurse-home.component';
import { AllAppointmentsComponent } from './nurse-admin/nurse-components/all-appointments/all-appointments.component';
import { MedicalRecordsComponent } from './patient-info/patient-home/medical-records/medical-records.component';
import { PrescribedComponent } from './physician-admin/patient-diagnostics/prescribed/prescribed.component';
import { PrescriptionsComponent } from './patient-info/patient-home/prescriptions/prescriptions.component';
import { UpdateAppointmentComponent } from './physician-admin/patient-diagnostics/update-appointment/update-appointment.component';
import { UpdateComponent } from './patient-info/patient-home/update/update.component';
import { TypeEmailComponent } from './patient-info/forget-password/type-email/type-email.component';
import { EnterOtpPageComponent } from './patient-info/forget-password/enter-otp-page/enter-otp-page.component';
import { ConfirmPasswordComponent } from './patient-info/forget-password/confirm-password/confirm-password.component';
import { HomeUiComponent } from './patient-info/patient-home/home-ui/home-ui.component';
import { AllAppointmentComponent } from './patient-info/patient-home/all-appointment/all-appointment.component';
import { AdminDetailsComponent } from './admin/home/admin-details/admin-details.component';
import { RouteGuard } from './route.guard';
import { TodayAppointmentComponent } from './nurse-admin/nurse-components/today-appointment/today-appointment.component';
// import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [

  {  path: '',
    component: NavbarComponent},

    // <-----Nurse-Routing----->
    {
      path: 'nurse-home',
      component: NurseHomeComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'all-appointments'
        },
        {
          path: 'all-appointments',
          component: AllAppointmentsComponent
        },
        {
          path: 'today-appointment',
          component: TodayAppointmentComponent
        },
        {
          path: 'patient-profile',
          component: PatientProfileComponent
        }
      ]
    },
            
    // <-----Admin-Routing----->
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'home'
        },
        {
          path: 'home', component: HomeComponent
        },
        {
          path: 'nurse', component: NurseComponent
        },
        {
          path: 'patient', component: PatientComponent
        },
        {
          path: 'physician', component: PhysicianComponent
        },
        {
          path: 'about', component: AboutComponent
        },
        {
          path: 'appointment', component: AppointmentComponent
        },
        { path : 'admins-detail', component: AdminDetailsComponent}

      ]
    },
    
    // canActivate:[RouteGuard],
   // <-----Patient-Routing----->
    { 
      path: 'dashboard-p',
      component: DashboardPComponent, 
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'home-ui'
        },
        {
          path: 'home-ui',
          component: HomeUiComponent
        },
        { path: 'appoinments', component: AppoinmentsComponent },
        { path: 'medical-records', component: MedicalRecordsComponent },
        { path: 'all-appointments', component: AllAppointmentComponent },
        { path: 'update', component: UpdateComponent },  ]
    },
    
    // <-----Physician-Routing----->
    {
      path: 'physician-dashboard',
      component: PhysicianNavbarComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'today-appointments'
        },
        {
          path: 'today-appointments',
          component: TodayAppointmentsComponent
        },
        {
          path: 'health-info/:id',
          component: HealthInfoComponent
        },
        {
          path: 'pending-appointments',
          component: PendingAppointmentsComponent
        },
        {
          path: 'previous-records',
          component: PreviousRecordsComponent
        }
      ]
    },
    
      
      {path: 'registration-form',component:RegistrationFormComponent},
      {path:'login-form',component:LoginFormComponent},
      { path :'confirmEmail', component: TypeEmailComponent},
      { path : 'verifyOTP', component : EnterOtpPageComponent},
      { path : 'newPassword', component: ConfirmPasswordComponent},
 

    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
