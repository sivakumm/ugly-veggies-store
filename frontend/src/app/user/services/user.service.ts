import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { User } from "../../models/user.model";
// import { HttpClient } from "@angular/common/http";
// import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(/*private http: HttpClient*/) { }

  loginUser(username: string, password: string): Observable<User> {
    return of({ username, password, email: 'tbd', currency: 'CHF' });// this.http.post<User>(`${environment.baseUrl}/login`, { username, password });
  }

  registerUser(user: User): Observable<User> {
    return of(user);// this.http.post<User>(`${environment.baseUrl}/register`, user);
  }
}
