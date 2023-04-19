import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    FileUploadComponent,
    CreateProfileComponent,
    AllProfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
