import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

//welcome 
// we can add condition when this routes can be activated 
//Using NEW SERVICE which imolemet CanActivate(Custom service to create for handling )

const routes: Routes = [
{path:'',component: LoginComponent}, //CanActivate,RouteGuardService
{path:'login',component: LoginComponent},
{path:'welcome/:name',component: WelcomeComponent,canActivate:[RouteGuardService]},// only login user will access this route , if not logged in then redirect to login page
{path:'todos',component: ListTodosComponent,canActivate:[RouteGuardService]}, // only login user will access this route , if not logged in then redirect to login page
{path:'logout',component: LogoutComponent,canActivate:[RouteGuardService]}, // only login user will access this route , if not logged in then redirect to login page

{path:'**',component: ErrorComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
