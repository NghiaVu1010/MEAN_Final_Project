import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  // Grab auth status for links
  getAuth(): boolean {
    return this.authService.getAuthStatus();
  }
  // Grab admin status for link
  getAdmin(): boolean {
    return this.authService.getAdminStatus();
  }

  // On logout, reset both auth and admin status
  onLogout(): void {
    this.authService.setAuthStatus(false);
    this.authService.setAdminStatus(false);
    this.router.navigate([""]);
  }
}
