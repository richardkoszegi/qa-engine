import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../service/user.service';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html'
})
export class LoginDialogComponent {

  /**
   * The constructor.
   * @param {Router} router Injected router service.
   * @param {UserService} userService Injected {@link UserService}.
   */
  constructor(private router: Router,
              private userService: UserService,
              private dialogRef: MatDialogRef<LoginDialogComponent>) {}

  /**
   * Calls the {@link UserService}'s login method with the given username to log the user in, then navigates to the home page.
   * @param {string} userName The provided username.
   */
  login(userName: string) {
    this.userService.login(userName);
    this.dialogRef.close();
    this.router.navigate(['/home']);
  }
}
