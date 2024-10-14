import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AdminDashboardComponent } from './component/admindashboard/admindashboard.component';
import { AddAnnouncementComponent } from './component/announcement/addannouncement/addannouncement.component';
import { AnnouncementListComponent } from './component/announcement/announcement-list/announcement-list.component';
import { UpdateAnnouncementComponent } from './component/announcement/updateannouncement/updateannouncement.component';
import { ForgetPasswordComponent } from './component/forgetpassword/forgetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    AddAnnouncementComponent,
    AnnouncementListComponent,
    UpdateAnnouncementComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
