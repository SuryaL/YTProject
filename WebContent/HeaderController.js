(function(){
var app = angular.module("YTapp");

	var HeaderController = function($rootScope,$scope,$interval,$timeout,YTservice,$location,$cacheFactory){

		function init(){
			if(!!JSON.parse(localStorage.getItem('favsCache'))){
				var favs =JSON.parse(localStorage.getItem('favsCache'));
			}else{
				var favs = $rootScope.favs.list;
			}
				var i =0;
				$interval(function(){
					$scope.Search(favs[i]);				
					i++;
				},10,favs.length);
				
		}

		$scope.submitForm = function(username){
			$scope.Search(username);
		}

		$scope.Search = function(username){
			if(!!username){
			$location.path("/users/"+username);
			}else{
				$location.path("/main");
			}
		}
		
		init();
		$timeout(function(){
			$location.path('/main');
			$scope.useful.currentUsername=' ';
		},9000)
		
	};
	
app.controller("HeaderController",HeaderController);
	
}());