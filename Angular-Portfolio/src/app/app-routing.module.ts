import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {path:"\login",component:LoginFormComponent},
  {path:"\signup",component:RegistrationFormComponent},
  {path:"\portfolio",component:MyPortfolioComponent},
  {path:"",redirectTo:"\login",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
