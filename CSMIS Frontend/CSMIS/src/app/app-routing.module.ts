import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ForgetPasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { AnnouncementListComponent } from './component/announcement/announcement-list/announcement-list.component';
import { AddAnnouncementComponent } from './component/announcement/addannouncement/addannouncement.component';
import { UpdateAnnouncementComponent } from './component/announcement/updateannouncement/updateannouncement.component';
import { AdminDashboardComponent } from './component/admindashboard/admindashboard.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'Forget',component:ForgetPasswordComponent},
  {path:'AdminDashboard',component:AdminDashboardComponent},
  {path:'Announcement/Add',component:AddAnnouncementComponent},
  {path:'Announcement/List',component:AnnouncementListComponent},
  {path:'Announcement/Update',component:UpdateAnnouncementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
