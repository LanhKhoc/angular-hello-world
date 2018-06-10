import angular from 'angular';

import loginConfig from './login.config';
import LoginController from './login.controller';

let loginModule = angular.module('app.login', []);
loginModule.config(loginConfig);
loginModule.controller('LoginController', LoginController);

export default loginModule;