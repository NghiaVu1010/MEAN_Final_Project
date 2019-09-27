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

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  onDelete(userId: number): void {
    // Call UserService to delete User
    this.userService.deleteUser(userId).subscribe(data => {
      //this.router.navigate(['home']);
      window.location.reload();
    });
  }
}
