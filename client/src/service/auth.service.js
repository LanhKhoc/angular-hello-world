import BaseService from '../base/base.service';

class AuthService extends BaseService {
  // get(params) {
  //   let res = {};


  //   if (params) {
  //     if (params['username'] === 'admin' && params['password'] === '123') {
  //       res.status = 200;
  //       res.message = 'Login successfull';
  //       res.data = {
  //         token: params.username + '/' + params.password,
  //         user_info: {
  //           username: params.username
  //         }
  //       };
  //     } else {
  //       res.status = 401;
  //       res.message = 'Your login information was incorrect!';
  //       res.data = {};
  //     }
  //   }
  //   return {
  //     status: 401,
  //     message: "Your login information was incorrect!",
  //     error: []
  //   }
  // }

  login(data) {
    this.get('/src/json/users.json')
      .then((response) => {
        console.log(response);
      })
  }
}

export default AuthService;