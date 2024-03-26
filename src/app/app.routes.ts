import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { CoursesAssignedComponent } from './courses-assigned/courses-assigned.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeanRequestsListComponent } from './dean-requests-list/dean-requests-list.component';
import { RequestCreationComponent } from './request-creation/request-creation.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'courses-assigned', component: CoursesAssignedComponent },
    { path: 'requests', component: DeanRequestsListComponent},
    { path: 'request-creation', component: RequestCreationComponent},
    { path: '**', component: PageNotFoundComponent }
]