import { Validators } from '@angular/forms';

export const emailValidator = [
  Validators.required,
  Validators.email
];