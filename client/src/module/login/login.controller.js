class LoginController {
  constructor(AuthService) {
    this.authService = AuthService;

    this.input = {
      username: '',
      password: ''
    }
  }

  handleLogin(fLogin) {
    if (fLogin.$valid) {
      this.authService.login({
        username: this.input.username,
        password: this.input.password
      });
    }
  }
}

LoginController.$inject = ['AuthService'];
export default LoginController;