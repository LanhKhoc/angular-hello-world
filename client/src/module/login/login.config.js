function LoginConfig($stateProvider) {
	$stateProvider
		.state({
			name: 'login',
			url: '/login',
			controller: 'LoginController',
			controllerAs: 'LoginCtrl',
			templateUrl: '/src/module/login/login.template.html',
		})
}

LoginConfig.$inject = ['$stateProvider'];
export default LoginConfig;