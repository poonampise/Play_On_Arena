import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path :'SignUp', component :RegisterComponent},
      {path :'SignIn', component:LoginComponent},
      {path :'About Us', component: AboutusComponent},
      {path: 'Contact Us', component :ContactusComponent},
       

    ],

  
  },
  {path:'', redirectTo:'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
  
})
export class AppRoutingModule { }
