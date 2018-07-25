/**
 * The User service. It contains the logged in user's name and provides the user handling functionality.
 */
export class UserService {

  /**
   * The logged in user's name.
   */
  userName: string;

  /**
   * Checks if the user logged in. Returns true if the {@link userName} not null.
   * @returns {boolean} Is user logged in?
   */
  isUserLoggedIn(): boolean {
    return this.userName != null;
  }

  /**
   * Sets the {@link userName} to the provided value.
   * @param {string} userName The logged in user's name.
   */
  login(userName: string) {
    this.userName = userName;
  }

  /**
   * Logs out the user. Sets the {@link userName} to null.
   */
  logout() {
    this.userName = null;
  }
}
