const usersRouter = require('express').Router();
const passport = require('passport');
const usersController = require('../modules/users/users.controller.js');

// usersRouter.get('/', usersController.getAll);
usersRouter.post('/login',
  (req, res, next) => { console.log('/api/users/login'); next() },
  passport.authenticate('local', { session: false }),
  usersController.loginSuccess
);

module.exports = usersRouter;