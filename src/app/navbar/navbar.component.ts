import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.getLoggedInUser();
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  get loggedInUser(): boolean {
    return this.auth.isUserLoggedIn();
  }
}
