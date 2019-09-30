import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../providers/auth.service';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-editProfile',
  templateUrl: './editProfile.component.html',
  styleUrls: ['./editProfile.component.css']
})
export class EditProfileComponent implements OnInit {
  
  uniqueId: number;
  username: string;
  email: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    // Check to see if user is Auth to be here
    if(!this.authService.getAdminStatus()) {
      this.router.navigate(['login']);
    }

    // Grab stored unique id
    this.uniqueId = this.authService.getUniqueId();

    // Grabs info about user
    this.userService.getUserById(this.uniqueId).subscribe(data => {
      this.username = data["username"];
      this.email = data["email"];
    });
  }
  
  onUpdate(): void {
    // Call UserService to update User
    this.userService.updateUser(this.uniqueId, this.email).subscribe(data => {
      this.router.navigate(["editProfile"]);
    });
  }

  onDelete(): void {
    // Call UserService to delete User
    this.userService.deleteUser(this.uniqueId).subscribe(data => {
      this.router.navigate([""]);
    });
  }

  // Open modal dependant on which button is clicked
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
