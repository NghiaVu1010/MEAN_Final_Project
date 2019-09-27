import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private isAuth: boolean = false;
  private isAdmin: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isAuth = this.authService.getAuthStatus();
    this.isAdmin = this.authService.getAdminStatus();

    // console.log(this.isAuth);
    // console.log(this.isAdmin);
  }

  onLogout(): void {
    this.authService.setAuthStatus(false);
    this.authService.setAdminStatus(false);
  }
}
