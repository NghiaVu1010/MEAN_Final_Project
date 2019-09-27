import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = "Register";
  userName: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  error: boolean = false;
  errMsg: string = "";

  constructor(
    private authService: AuthService, 
    private router: Router) {}

  ngOnInit() {}

  onRegister(): void {
    if (this.userName == '') {
      this.errMsg = 'User name is required.';
      this.error = true;
    } 
    else if (this.email == '') {
      this.errMsg = 'Email Address is required.';
      this.error = true;
    } 
    else if (this.password == '') {
      this.errMsg = 'Password is required.';
      this.error = true;
    } 
    else if (this.password.length < 8) {
      this.errMsg = 'Password must be at least 8 chars.';
      this.error = true;
    } 
    else if (this.confirmPassword == '') {
      this.errMsg = 'Please confirm password.';
      this.error = true;
    } 
    else if (this.password != this.confirmPassword) {
      this.errMsg = 'Passwords do not match';
      this.error = true;
    } 
    else {
      this.error = false;
      this.errMsg = '';

      // Call UserService to Register
      this.authService.register(this.userName, this.email, this.password).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Registration unsuccessful.';
          this.error = true;
        } else {
          this.router.navigate(['login']);
        }
      });
    }
  }
}
