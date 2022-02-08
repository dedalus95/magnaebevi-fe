import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './components/pages/admin-page/admin-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';
import { CambiaPasswordComponent } from './components/pages/cambia-password/cambia-password/cambia-password.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { MostraMenuComponent } from './components/pages/mostra-menu/mostra-menu.component';
import { TabsModule } from 'ngx-tabset';
import { CartComponent } from './components/pages/cart/cart.component';
import { ModalComponent } from './components/common/modale/modale.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPageComponent,
    HomepageComponent,
    ResetPasswordComponent,
    CambiaPasswordComponent,
    NavbarComponent,
    MostraMenuComponent,
    CartComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
