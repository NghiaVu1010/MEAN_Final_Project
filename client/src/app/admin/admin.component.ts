import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth.service';
import { UserService } from '../providers/user.service';

import { User } from '../models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: Array<User> = [];

  constructor(
    private userService: UserService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      data.forEach((user, index) => {
        this.users.push(new User(user.ID, user.username, user.email, user.password));
      })
    });
  }
}
