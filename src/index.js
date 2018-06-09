import angular from 'angular';
import 'angular-ui-router';
import './assets/scss/main.scss';

import './module/login';

const requires = [
  'ui.router',
  'app.login'
];

let appModule = angular.module('root', requires);