import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { DeanRequestsListComponent } from "./dean-requests-list/dean-requests-list.component";
import { CoursesAssignedComponent } from './courses-assigned/courses-assigned.component';
import { HomeComponent } from './home/home.component';
import { StudentPreferencesComponent } from './student-preferences/student-preferences.component';
import { CourseStudentTableComponent } from './course-student-table/course-student-table.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,
      RouterLink,
      HomeComponent,
      LoginComponent,
      NavbarComponent,
      CoursesAssignedComponent,
      StudentPreferencesComponent,
      CourseStudentTableComponent,
      DeanRequestsListComponent]
})
export class AppComponent {
  title = 'gm-frontend';
}
