import angular from 'angular';
import 'angular-ui-router';
import './assets/scss/main.scss';

import './service';
import './module/login';

const requires = [
  'ui.router',
  'service',
  'app.login'
];

let appModule = angular.module('root', requires);