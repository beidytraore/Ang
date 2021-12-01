import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboards/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SidebarComponent } from './pages/dashboards/sidebar/sidebar.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
// import { AdminGuard } from './services/admin.guard';
// import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  { path: 'register',component:RegisterComponent,pathMatch:'full'},
  { path: 'login',component:LoginComponent,pathMatch:'full'},
  { path: 'navbar',component:NavbarComponent,pathMatch:'full'},
   {
     path: 'admin',
     component:DashboardComponent,
     pathMatch:'full',
    children: [
      {
        path:'profile',
        component:ProfileComponent
      }
    ]},
  { path: 'user-dashboard',component:UserDashboardComponent,pathMatch:'full'},
  { path: 'sidebar',component:SidebarComponent,pathMatch:'full'},

];

// canActivate:[AdminGuard] ,canActivate:[NormalGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
