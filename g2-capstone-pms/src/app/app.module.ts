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
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSliderModule } from "@angular/material/slider";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { MatInputModule } from "@angular/material/input";
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import { MatNativeDateModule } from '@angular/material/core';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field'
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

import { NavbarComponent } from './homepage/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentFormComponent } from './homepage/appointment-form/appointment-form.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './homepage/registration/registration.component';
import { LoginFormComponent } from './homepage/login-form/login-form.component';

import {FlexLayoutModule} from "@angular/flex-layout";
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms';

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
    NavbarComponent,
    AppointmentFormComponent,
    RegistrationComponent,
    LoginFormComponent,
    
    

  
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
    FlexLayoutModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'kushwah09.us.auth0.com',
      clientId: 'y1BoJ6izuL5av06F0ChiKstW8fpC29Gi',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
