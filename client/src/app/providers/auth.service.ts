import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  private isAuth: boolean = false;
  private isAdmin: boolean = false;
  private uniqueId: number;

  setAuthStatus(status: boolean) {
    this.isAuth = status;
  }

  getAuthStatus() {
    return this.isAuth;
  }

  setAdminStatus(status: boolean) {
    this.isAdmin = status;
  }

  getAdminStatus() {
    return this.isAdmin;
  }

  setUniqueId(id: number) {
    this.uniqueId = id;
  }

  getUniqueId() {
    return this.uniqueId;
  }
}