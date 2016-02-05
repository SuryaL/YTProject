
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
// console.log(app);

	// app.directive("ngDirective",function(){
	// 	console.log("help");
	// 	return ({
	// 		restrict: 'A',
	// 		template: "<input/>"
	// 		})
	// });

}());