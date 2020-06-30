class Auth {
  constructor() {
    if ((localStorage.getItem("auth") === "true") === true) {
      localStorage.setItem("auth", true);
    } else {
      localStorage.setItem("auth", false);
    }
  }

  login(cb) {
    localStorage.setItem("auth", true);
    cb();
  }

  logout(cb) {
    localStorage.setItem("auth", false);
    cb();
  }

  isAuthenticated() {
    return localStorage.getItem("auth") === "true";
  }
}

export default new Auth();
