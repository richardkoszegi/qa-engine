import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../service/user.service';

/**
 * The login component. That component is displayed if the user not logged in yet.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /**
   * The constructor.
   * @param {Router} router Injected router service.
   * @param {UserService} userService Injected {@link UserService}.
   */
  constructor(private router: Router, private userService: UserService) {}

  /**
   * Calls the {@link UserService}'s login method with the given username to log the user in, then navigates to the home page.
   * @param {string} userName The provided username.
   */
  login(userName: string) {
      this.userService.login(userName);
      this.router.navigate(['/home']);
  }
}
