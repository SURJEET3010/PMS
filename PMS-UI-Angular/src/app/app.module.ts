import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { HomeComponent } from './admin/home/home.component';
import { PhysicianComponent } from './admin/home/physician/physician.component';
import { NurseComponent } from './admin/home/nurse/nurse.component';
import { PatientComponent } from './admin/home/patient/patient.component';
import { AppointmentComponent } from './admin/home/appointment/appointment.component';
import { AboutComponent } from './admin/home/about/about.component';
// import {MatTableModule} from '@angular/material/table';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { HttpClientModule } from '@angular/common/http';


import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSliderModule } from "@angular/material/slider";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import { MatNativeDateModule } from '@angular/material/core';
import {MatSortModule} from '@angular/material/sort';
// import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MatBadgeModule } from "@angular/material/badge";
import { MatChipsModule } from "@angular/material/chips";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
// import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatListModule } from "@angular/material/list";
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { ImageComponent } from './homepage/image/image.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentFormComponent } from './homepage/appointment-form/appointment-form.component';
import { EditdialogComponent } from './admin/home/physician/editdialog/editdialog.component';
import { ContentComponent } from './homepage/content/content.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { LoginFormComponent } from './homepage/login-form/login-form.component';
import { RegistrationFormComponent } from './homepage/registration-form/registration-form.component';

import { AuthModule } from '@auth0/auth0-angular';
import { DashboardPComponent } from './patient-info/dashboard-p/dashboard-p.component';
import { PatientSideBarComponent } from './patient-info/patient-side-bar/patient-side-bar.component';
import { AppoinmentsComponent } from './patient-info/patient-home/appoinments/appoinments.component';
import { MedicalRecordsComponent } from './patient-info/patient-home/medical-records/medical-records.component';
import { PrescriptionsComponent } from './patient-info/patient-home/prescriptions/prescriptions.component';
import { PhysicianNavbarComponent } from './physician-admin/physician-navbar/physician-navbar.component';
import { PhysicianSidebarComponent } from './physician-admin/physician-sidebar/physician-sidebar.component';
import { EditComponent } from './physician-admin/patient-diagnostics/edit/edit.component';
import { ObservationComponent } from './physician-admin/patient-diagnostics/observation/observation.component';
import { PrescribedComponent } from './physician-admin/patient-diagnostics/prescribed/prescribed.component';
import { PrescriptionComponent } from './physician-admin/patient-diagnostics/prescription/prescription.component';
import { PreviousRecordsComponent } from './physician-admin/patient-diagnostics/previous-records/previous-records.component';
import { TestInfoComponent } from './physician-admin/patient-diagnostics/test-info/test-info.component';
import { ViewPrescriptionComponent } from './physician-admin/patient-diagnostics/view-prescription/view-prescription.component';
import { TodayAppointmentsComponent } from './physician-admin/patient-diagnostics/today-appointments/today-appointments.component';
import { UpdateAppointmentComponent } from './physician-admin/patient-diagnostics/update-appointment/update-appointment.component';
import { PendingAppointmentsComponent } from './physician-admin/pending-appointments/pending-appointments.component';
import { HealthInfoComponent } from './physician-admin/patient-diagnostics/health-info/health-info.component';
import { NurseNavbarComponent } from './nurse-admin/nurse-dashboard/nurse-navbar/nurse-navbar.component';
import { NurseSidebarComponent } from './nurse-admin/nurse-dashboard/nurse-sidebar/nurse-sidebar.component';
import { NurseHomeComponent } from './nurse-admin/nurse-dashboard/nurse-home/nurse-home.component';
import { AddTestsComponent } from './nurse-admin/nurse-components/add-tests/add-tests.component';
import { VisitDetailsComponent } from './nurse-admin/nurse-components/visit-details/visit-details.component';
import { AllAppointmentsComponent } from './nurse-admin/nurse-components/all-appointments/all-appointments.component';
import { PatientProfileComponent } from './nurse-admin/nurse-components/patient-profile/patient-profile.component';
import { TestDetailsComponent } from './nurse-admin/nurse-components/test-details/test-details.component';
import { PrescriptionInfoComponent } from './nurse-admin/nurse-components/prescription-info/prescription-info.component';
import { DatePipe} from '@angular/common';
import { UpdateComponent } from './patient-info/patient-home/update/update.component';
import { TypeEmailComponent } from './patient-info/forget-password/type-email/type-email.component';
import { EnterOtpPageComponent } from './patient-info/forget-password/enter-otp-page/enter-otp-page.component';
import { ConfirmPasswordComponent } from './patient-info/forget-password/confirm-password/confirm-password.component';
import { HomeUiComponent } from './patient-info/patient-home/home-ui/home-ui.component';
import { AllAppointmentComponent } from './patient-info/patient-home/all-appointment/all-appointment.component';
import { AllPrescriptionComponent } from './patient-info/patient-home/all-prescription/all-prescription.component';
import { AllTestComponent } from './patient-info/patient-home/all-test/all-test.component';
import { AdminDetailsComponent } from './admin/home/admin-details/admin-details.component';
import { TodayAppointmentComponent } from './nurse-admin/nurse-components/today-appointment/today-appointment.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HomeComponent,
    PhysicianComponent,
    NurseComponent,
    PatientComponent,
    AppointmentComponent,
    AboutComponent,
    ImageComponent,
    NavbarComponent,
    AppointmentFormComponent,
    EditdialogComponent,
    ContentComponent,
    FooterComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    DashboardPComponent,
    PatientSideBarComponent,
    AppoinmentsComponent,
    MedicalRecordsComponent,
    PrescriptionsComponent,
    PhysicianNavbarComponent,
    PhysicianSidebarComponent,
    EditComponent,
    ObservationComponent,
    PrescribedComponent,
    PrescriptionComponent,
    PreviousRecordsComponent,
    TestInfoComponent,
    ViewPrescriptionComponent,
    TodayAppointmentsComponent,
    UpdateAppointmentComponent,
    PendingAppointmentsComponent,
    HealthInfoComponent,
    NurseNavbarComponent,
    NurseSidebarComponent,
    NurseHomeComponent,
    AddTestsComponent,
    VisitDetailsComponent,
    AllAppointmentsComponent,
    PatientProfileComponent,
    TestDetailsComponent,
    PrescriptionInfoComponent,
    UpdateComponent,
    TypeEmailComponent,
    EnterOtpPageComponent,
    ConfirmPasswordComponent,
    HomeUiComponent,
    AllAppointmentComponent,
    AllPrescriptionComponent,
    AllTestComponent,
    AdminDetailsComponent,
    TodayAppointmentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTableModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSliderModule,
    MatCheckboxModule,
    MatTabsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatMenuModule,
    MatGridListModule,
    MatNativeDateModule,
    MatProgressBarModule,   
    MatExpansionModule,
    MatDialogModule,
    MatSortModule,
    MatBadgeModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatListModule,
    MatSelectModule,
    LayoutModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
          domain: 'dev-pcd04nnlapmaf0sb.us.auth0.com',
          clientId: '9rA4ZsJCmhtJUw6O8Q4YyKtgcVhznaQK',
          authorizationParams: {
            redirect_uri: window.location.origin
          }
        }),
    
     
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
