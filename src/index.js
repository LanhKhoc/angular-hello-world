import angular from 'angular';
import 'angular-ui-router';
import './assets/scss/main.scss';

import './login';

const requires = [
  'ui.router',
  'app.login'
];

let appModule = angular.module('root', requires);

appModule.config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  // $urlRouterProvider.otherwise('/');
}])