import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './interfaces/user.interface';
import { environment } from '../../environments/environment';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userSubject = new BehaviorSubject<IUser>(undefined);
  constructor(private readonly _http: HttpClient) { }

  loginUser(username: string, password: string): Promise<IUser> {
    return this._http.post<IUser>(`${environment.apiUrl}/auth/login`, {username, password})
    .pipe<IUser>(map((user) => {
      this.userSubject.next(user);
      console.log('userSubject', this.userSubject.value);
      return user;
    }))
    .toPromise();
  }
}
