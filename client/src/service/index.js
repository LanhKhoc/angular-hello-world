import AuthService from './auth.service';

let serviceModule = angular.module('service', []);
serviceModule.service('AuthService', AuthService);

export default serviceModule;