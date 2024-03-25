import { Injectable } from '@angular/core';
import { User } from '../../models/User.model';
import { HttpClient } from '@angular/common/http';
import { env } from '../../../env/env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl: string = env.baseApiUrl;
  user?: User; 

  constructor(private http: HttpClient) { }

  public saveUser(user: User) {
    this.user = user;
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  public saveToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseApiUrl}/users`);
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseApiUrl}/users/${id}`);
  }

  public getLoggedInUser(): User {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (user) {
      this.user = user;
    }
    return user;
  }

  public login(user: User) {
    return this.http.post(`${this.baseApiUrl}/login`, user);
  }

  public logout() {
    this.user = undefined;
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }
}
