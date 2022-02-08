import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/pages/admin-page/admin-page.component';
import { CambiaPasswordComponent } from './components/pages/cambia-password/cambia-password/cambia-password.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin-page', component: AdminPageComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'cambia-password', component: CambiaPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
