import angular from 'angular';

import loginConfig from './login.config';

let loginModule = angular.module('app.login', []);
loginModule.config(loginConfig);

export default loginModule;