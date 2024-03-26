import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";
import {User} from "../../models/User.model";

export const authGuard: CanActivateFn = (route, state) => {
  if (!inject(AuthService).isUserLoggedIn()){
    inject(Router).navigate(['/login'])
  }
  return true
};
