import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { DeanRequestsListComponent } from "./dean-requests-list/dean-requests-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LoginComponent, NavbarComponent, DeanRequestsListComponent]
})
export class AppComponent {
  title = 'gm-frontend';
}
