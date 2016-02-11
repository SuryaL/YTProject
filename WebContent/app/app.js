
(function(){
	
var app = angular.module("YTapp",["ngSanitize","ui.router",'ngRoute']);

app.config(function($urlRouterProvider,$stateProvider){
// 
	$urlRouterProvider.otherwise("/");

			$stateProvider
					.state("user",{
						url:"/users/:username",
						templateUrl: './user.html',
						controller:'UserController'
					})
					.state("main",{
						url:"/",
						template:"<h1> MAIN PAGE </h1>"
						//templateUrl: './index.html',
						//controller:'UserController'
					});
				// .when("/users/:username",{
				// 	templateUrl: './user.html',
				// 	controller:'UserController'
				// })
				
				
	
});


// app.config(['$httpProvider', function($httpProvider) {
//   $httpProvider.defaults.withCredentials = true;
// }])

}());