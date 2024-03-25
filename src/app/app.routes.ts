import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { CoursesAssignedComponent } from './courses-assigned/courses-assigned.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeanRequestsListComponent } from './dean-requests-list/dean-requests-list.component';
import {authGuard} from "./services/auth/auth.guard";

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'courses-assigned', component: CoursesAssignedComponent , canActivate: [authGuard]},
  { path: 'requests', component: DeanRequestsListComponent, canActivate: [authGuard]},
  { path: '**', component: PageNotFoundComponent}
]
