(function(){
var app = angular.module("YTapp");

	var HeaderController = function($scope,YTservice,$location){
		$scope.username = 'sawyer7mage';
		$scope.Search = function(username)
		{	
			$location.path("/users/"+username);
		}
		
		
	};
	
app.controller("HeaderController",["$scope","YTservice","$location",HeaderController]);
	
}());