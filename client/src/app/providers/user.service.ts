import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersEndpoint: string = 'http://localhost:3000/users/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.usersEndpoint}data`, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  login(userName: string, password: string) {
      return this.http.post(`${this.usersEndpoint}login`, {username : userName, password : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  register(userName: string, email: string, password: string) {
      return this.http.post(`${this.usersEndpoint}register`, {username : userName, email : email, password : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  updateUser(userId: number, email: string) {
    return this.http.put(`${this.usersEndpoint}settings/${userId}`, {email: email}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  deleteUser(userId: number) {
    return this.http.delete(`${this.usersEndpoint}settings/${userId}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}