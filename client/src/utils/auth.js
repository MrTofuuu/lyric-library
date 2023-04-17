import decode from "jwt-decode";

class AuthService {
  getProfile() {
    if (this.getToken() === null) {
      return null;
    } else {
      return decode(this.getToken());
    }
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("token");
      return true;
    }
    return false;
  }

  getToken() {
    if (!localStorage.getItem("token")) {
      return null;
    }
    return localStorage.getItem("token");
  }

  login(idToken) {
    localStorage.setItem("token", idToken);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("token");
    window.location.reload();
  }
}

export default new AuthService();
