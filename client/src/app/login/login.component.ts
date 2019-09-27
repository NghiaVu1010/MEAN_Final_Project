import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth.service';
import { UserService } from '../providers/user.service';

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
    private userService: UserService, 
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
      this.userService.login(this.userName, this.password).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Login unsuccessful.';
          this.error = true;
          this.authService.setAuthStatus(false);
          this.authService.setUniqueId(0);
        } 
        else {
          if(data["is_admin"] == 1) {
            this.authService.setAdminStatus(true);
          }
          this.authService.setAuthStatus(true);
          this.authService.setUniqueId(data["id"]);
          this.router.navigate(['teams']);
        }
      });
    }
  }

  goHere(route: string) : void {
    this.router.navigate([route]);
  }
}
