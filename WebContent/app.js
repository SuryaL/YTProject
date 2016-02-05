
(function(){
	
var app = angular.module("YTapp",["ngRoute","ngSanitize"]);

app.config(function($routeProvider){
	$routeProvider
				.when("/users/:username",{
					templateUrl: 'user.html',
					controller:'UserController'
				})
				
				.otherwise({redirectTo:"/main"});
	
});

}());