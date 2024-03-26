import { Component, OnInit } from '@angular/core';
import {
  MatSelect,
  MatFormField,
  MatLabel,
  MatOption
} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AuthService } from '../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-request-creation',
  templateUrl: './request-creation.component.html',
  styleUrls: ['./request-creation.component.scss'],
  standalone: true,
  imports: [
    MatSelect,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class RequestCreationComponent implements OnInit {
  requestForm!: FormGroup;
  requestTypesMap: { [key: string]: string } = {
    'vacation': 'O wakacje',
    'change': 'O zmianę',
    'other': 'Inny'
  };
  user_id: number | undefined;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const loggedInUser = this.authService.getLoggedInUser();

    if (loggedInUser) {
      this.user_id = loggedInUser.id;
    } else {
      console.error('Użytkownik niezalogowany.');
    }

    this.requestForm = this.formBuilder.group({
      requestType: ['', Validators.required],
    });

    this.requestForm.get('requestType')?.valueChanges.subscribe((value) => {
      Object.keys(this.requestForm.controls).forEach((key) => {
        if (key !== 'requestType') {
          this.requestForm.removeControl(key);
        }
      });
      this.requestForm.addControl('user_id', this.formBuilder.control(this.user_id, Validators.required));
      this.requestForm.addControl('createdOn', this.formBuilder.control(new Date().toISOString().split('T')[0], Validators.required));
      this.requestForm.addControl('modifiedOn', this.formBuilder.control(new Date().toISOString().split('T')[0], Validators.required));
      this.requestForm.addControl('progress', this.formBuilder.control("Otrzmano", Validators.required));
      const requestTypeKey = this.requestForm.get('requestType')?.value.key;
      this.requestForm.addControl('requestTypeValue', this.formBuilder.control(requestTypeKey, Validators.required));
      const selectedRequestType = value.key;
      switch (selectedRequestType) {
        case 'vacation':
          this.requestForm.addControl('description', this.formBuilder.control('', Validators.required));
          this.requestForm.addControl('startDate', this.formBuilder.control('', Validators.required));
          this.requestForm.addControl('endDate', this.formBuilder.control('', Validators.required));
          break;
        case 'change':
          this.requestForm.addControl('description', this.formBuilder.control('', Validators.required));
          this.requestForm.addControl('subjectFrom', this.formBuilder.control('', Validators.required));
          this.requestForm.addControl('subjectTo', this.formBuilder.control('', Validators.required));
          break;
        case 'other':
          this.requestForm.addControl('description', this.formBuilder.control('', Validators.required));
          break;
        default:
          break;
      }
    });
  }

  getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  isPastStartDate(): boolean {
    const startDate = this.requestForm.get('startDate')?.value;
    const today = new Date().toISOString().split('T')[0];
    return startDate < today;
  }

  isPastEndDate(): boolean {
    const endDate = this.requestForm.get('endDate')?.value;
    const today = new Date().toISOString().split('T')[0];
    return endDate < today;
  }


  isInvalidEndDate(): boolean {
    const startDate = this.requestForm.get('startDate')?.value;
    const endDate = this.requestForm.get('endDate')?.value;

    if (startDate && endDate) {
      return new Date(endDate) < new Date(startDate);
    }

    return false;
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Zamknij', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  onSubmit(): void {
    if (this.requestForm.valid) {
      if (this.isPastStartDate()) {
        this.openSnackBar('Data rozpoczęcia nie może być wcześniejsza niż dzisiejsza data.');
        return;
      }
      if (this.isPastStartDate()) {
        this.openSnackBar('Data zakończenia nie może być wcześniejsza niż dzisiejsza data.');
        return;
      }
      if (this.isInvalidEndDate()) {
        this.openSnackBar('Data zakończenia nie może być wcześniejsza niż data rozpoczęcia!');
        return;
      }

      console.log(this.requestForm.value);
      this.requestForm.reset();
    } else {
      console.error('Formularz jest nieprawidłowy.');
    }
  }
}