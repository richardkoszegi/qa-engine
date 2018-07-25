import {Component} from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../service/user.service';
import {LocalizationService} from '../../service/localization.service';

/**
 *  The header component. Contains the navigation bar, the app brand and the logout button.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {


  constructor(private router: Router, private userService: UserService, private localizationService: LocalizationService) {}

  /**
   * Calls the {@link UserService}'s isUserLoggedIn() method
   * @returns {boolean} Is User Logged In?
   */
  isUserLoggedIn(): boolean {
    return this.userService.isUserLoggedIn();
  }

  /**
   * Calls {@link UserService}'s logout() method to log the user out and navigates to the root page.
   */
  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  changeLanguage() {
    this.localizationService.switchLanguage();
  }
}
