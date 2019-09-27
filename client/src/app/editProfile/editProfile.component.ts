import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth.service';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-editProfile',
  templateUrl: './editProfile.component.html',
  styleUrls: ['./editProfile.component.css']
})
export class EditProfileComponent implements OnInit {

  uniqueId: number;
  email: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.uniqueId = this.authService.getUniqueId();

    this.userService.getUserById(this.uniqueId).subscribe(data => {
      this.email = data["email"];
    });
  }
  
  onUpdate(): void {
    // Call UserService to update User
    this.userService.updateUser(this.uniqueId, this.email).subscribe(data => {
      window.location.reload();
    });
  }

  onDelete(userId: number): void {
    // Call UserService to delete User
    this.userService.deleteUser(userId).subscribe(data => {
      //this.router.navigate(['home']);
      window.location.reload();
    });
  }
}
