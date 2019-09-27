import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  private isAuth: boolean;
  private isAdmin: boolean;

  setAuthStatus(status: boolean) {
    this.isAuth = status;
  }

  getAuthStatus() {
    console.log("AUTH SERVICE"+this.isAuth);
    return this.isAuth;
  }

  setAdminStatus(status: boolean) {
    this.isAdmin = status;
  }

  getAdminStatus() {
    console.log("ADMIN SERVICE"+this.isAdmin);
    return this.isAdmin;
  }
}
