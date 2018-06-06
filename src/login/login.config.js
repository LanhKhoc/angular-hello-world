function LoginConfig($stateProvider) {
	$stateProvider
		.state({
			name: 'login',
			url: '/login',
			template: '<h3>hello world!</h3>'
		})
}

LoginConfig.$inject = ['$stateProvider'];
export default LoginConfig