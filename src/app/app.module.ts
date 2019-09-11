import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MobiliariosComponent } from './components/mobiliarios/mobiliarios.component';
import { RouteModule } from "./components/route/route.module";
import { LibrosComponent } from './components/libros/libros.component';
import { LecturaComponent } from './components/lectura/lectura.component';
import { IntendenciasComponent } from './components/intendencias/intendencias.component';
//import { LoginComponent } from './components/auth/login/login.component'
//import { RegisterComponent } from './components/auth/register/register.component'
import { CommonModule } from '@angular/common';
//import { AuthService } from './services/auth.service';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DonaComponent } from './components/dona/dona.component';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgFallimgModule } from 'ng-fallimg';

//Login newww
// built-in

import { RouterModule } from '@angular/router';
// components

import { UserComponent } from './login/user/user.component';
import { SignUpComponent } from './login/user/sign-up/sign-up.component';
//routes
import { UserProfileComponent } from './login/user-profile/user-profile.component';
import { SignInComponent } from './login/user/sign-in/sign-in.component';
import { UserService } from './login/shared/user.service';
//other
import { AuthGuard } from './login/auth/auth.guard';
import { AuthInterceptor } from './login/auth/auth.interceptor';
import { ChartsModule } from "ng2-charts";



@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    MobiliariosComponent,
    LibrosComponent,
    LecturaComponent,
    DonaComponent,
    IntendenciasComponent,
    ButtonsComponent,
    EmployeeComponent,
    //login
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouteModule,
    AppRoutingModule,
    CommonModule,
    NgxSpinnerModule,
    ChartsModule,
    MDBBootstrapModule.forRoot(),
    NgFallimgModule.forRoot({
      default: '/assets/usuarios.png'
     }),
    //login
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
