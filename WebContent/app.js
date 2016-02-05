
(function(){
	
var app = angular.module("YTapp",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
				.when("/users/:username",{
					templateUrl: 'user.html',
					controller:'UserController'
				})
				
				.otherwise({redirectTo:"/main"});
	
});

}());