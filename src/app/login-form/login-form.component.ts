import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { emailValidator } from './validators/email-validator';
import { passwordValidator } from './validators/password-validator';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../models/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', emailValidator],
      password: ['', passwordValidator]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user = { userName: this.loginForm.value.email, password: this.loginForm.value.password };
      this.auth.login(user as unknown as User).subscribe(result => {
        if (result) {
          this.auth.saveUser(result as User);
          //this.auth.saveToken(result.token);
          if (this.loggedInUser && this.loggedInUser.roleid === 1) {
            //TODO: After merge new view, change to /requests
            this.router.navigate(['']);
          } else {
            this.router.navigate(['/courses-assigned']);
          }
        } else {
          console.log('Invalid credentials');
          return;  
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  get loggedInUser(): User | undefined {
    return this.auth.getLoggedInUser();
  }
}
