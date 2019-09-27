import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Login";
  userName: string = "";
  password: string = "";

  error: boolean = false;
  errMsg: string = "";

  constructor(
    private authService: AuthService, 
    private router: Router) {}

  ngOnInit() {}

  onLogin(): void {
    if (this.userName == "") {
      this.errMsg = "User name is required.";
      this.error = true;
    }
    else if (this.password == "") {
      this.errMsg = "Password is required.";
      this.error = true;
    }
    else {
      this.error = false;
      this.errMsg = "";

      // Call AuthService to authenticate
      this.authService.login(this.userName, this.password).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Login unsuccessful.';
          this.error = true;
        } 
        else {
          this.router.navigate(['teams'], {queryParams: {username: this.userName}});
        }
      });
    }
  }
}
