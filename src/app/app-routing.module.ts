import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//LOgin Neww
import { UserComponent } from './login/user/user.component'
import { SignUpComponent } from './login/user/sign-up/sign-up.component';
import { SignInComponent } from './login/user/sign-in/sign-in.component';
import { UserProfileComponent } from './login/user-profile/user-profile.component';
import { AuthGuard } from './login/auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
