const usersModel = require('./users.model.js');

let usersController = {};

usersController.getAll = function(req, res) {
  res.end('userController getAll');
};

usersController.loginSuccess = function(req, res) {
  console.log('aha');
}

module.exports = usersController;