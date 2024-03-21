import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CoursesAssignedComponent } from './courses-assigned/courses-assigned.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LoginComponent, NavbarComponent, CoursesAssignedComponent]
})
export class AppComponent {
  title = 'gm-frontend';
}
