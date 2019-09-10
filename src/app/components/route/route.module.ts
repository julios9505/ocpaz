import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { MobiliariosComponent } from '../mobiliarios/mobiliarios.component';
import { LibrosComponent } from '../libros/libros.component';
import { EmployeeComponent } from '../employee/employee.component';

import { IntendenciasComponent } from '../intendencias/intendencias.component';
//import { LoginComponent } from '../auth/login/login.component';
//import { RegisterComponent } from '../auth/register/register.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { LecturaComponent } from '../lectura/lectura.component';

//LOgin Neww
import { UserComponent } from '../../login/user/user.component'
import { SignUpComponent } from '../../login/user/sign-up/sign-up.component';
import { SignInComponent } from '../../login/user/sign-in/sign-in.component';
import { UserProfileComponent } from '../../login/user-profile/user-profile.component';
import { AuthGuard } from '../../login/auth/auth.guard';
const routes: Routes = [

  { path: 'route', component: AppComponent },
   { path: 'lectura', component: LecturaComponent },
   { path: 'mobiliarios', component: MobiliariosComponent },
  { path: 'usuarios', component: UsuariosComponent },
   { path: 'libros', component: LibrosComponent },
  { path: 'employee', component: EmployeeComponent },
   { path: 'intendencias', component: IntendenciasComponent },
  //{ path: 'register', component: RegisterComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'signup', component: UserComponent, children: [{ path: '', component: SignUpComponent }]},
  { path: 'login', component: UserComponent, children: [{ path: '', component: SignInComponent }]},
  { path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class RouteModule { }
