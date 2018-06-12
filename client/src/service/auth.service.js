import BaseService from '../base/base.service';

class AuthService extends BaseService {
  login(data) {
    return this.post('/users/login', data);
  }
}

export default AuthService;