const usersModel = require('./users.model.js');

let usersService = {};

usersService.login = function(userInfo) {
  console.log({userInfo});
  return usersModel.login(userInfo);
}

module.exports = usersService;