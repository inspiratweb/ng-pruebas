(function(){
	angular
		.module('FS')
		.config(function($routeProvider){
			$routeProvider
				//development page index (remove after testing)
				.when('/', {
					templateUrl: 'templates/pages/index.html'
				})
				.when('/index2', {
					templateUrl: 'templates/pages/index2.html'
				})
				.otherwise({
					redirectTo: '/'
				});
		})
})();
