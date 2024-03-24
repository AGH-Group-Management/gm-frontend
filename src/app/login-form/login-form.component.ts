import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { emailValidator } from './validators/email-validator';
import { passwordValidator } from './validators/password-validator';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import  {Observable } from "rxjs";

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
  baseUrl = 'http://localhost:8080/login';
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', emailValidator],
      password: ['', passwordValidator]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user = { userName: this.loginForm.value.email, password: this.loginForm.value.password };
      this.http.post<Observable<boolean>>(this.baseUrl, user).subscribe(isValid => {
        if (isValid) {
          sessionStorage.setItem(
            'token',
            btoa(this.loginForm.value.email + ':' + this.loginForm.value.password)
          );
          alert("Authentication Success")
        } else {
          alert("Authentication failed.")
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
