import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SharedServicesService } from './SharedService/shared-services.service';
import { Router,RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './Components/admin-dashboard/admin-navbar/admin-navbar.component';
import { TrainsComponent } from './Components/trains/trains.component';
import { SaveTrainsComponent } from './Components/admin-dashboard/save-trains/save-trains.component';
import { SidebarComponent } from './Components/admin-dashboard/sidebar/sidebar.component';
import { SaveSeatsComponent } from './Components/admin-dashboard/save-seats/save-seats.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignupComponent,
    AdminNavbarComponent,
    TrainsComponent,
    SaveTrainsComponent,
    SidebarComponent,
    SaveSeatsComponent,
   
  ],
  imports: [
    BrowserModule,
    [ FormsModule, ReactiveFormsModule ],
    RouterModule.forRoot ([
      {path:'home', component:HomeComponent},
      {path:'admin-dashboard', component:AdminDashboardComponent},
      {path:'sign-up', component:SignupComponent},
      {path:'trains', component:TrainsComponent},
      {path:'save-train', component:SaveTrainsComponent},
      
      {path: '', redirectTo: 'home', pathMatch: 'full'}

     ]),
     
     HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDatepickerModule,
    
  ],
  providers: [SharedServicesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
