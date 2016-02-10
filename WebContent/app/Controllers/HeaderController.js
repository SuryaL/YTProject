(function(){
var app = angular.module("YTapp");

	var HeaderController = function($rootScope,$scope,$interval,$location){
		
		
		function init(){
			$rootScope.favs = [];
			run();
		}

		function run()
		{
			// localStorage.removeItem("bookmarks")
			console.log(JSON.parse(localStorage.getItem("bookmarks")))
			if(angular.isDefined(localStorage.bookmarks) == false)
			{
				localStorage.setItem("bookmarks",JSON.stringify($rootScope.favs));
				console.log(localStorage.getItem("bookmarks"))
			}
			else
			{
				$rootScope.favs = JSON.parse(localStorage.getItem("bookmarks"));
			}	
			

			console.log($rootScope.favs)
			if(($rootScope.favs.length)!=0)			
				checkAndSearch();	
		}

		function checkAndSearch(){

			var i =0;
			
			$interval(function(){
				$scope.Search($rootScope.favs[i]);
				console.log($rootScope.favs[i])
				i++;
			},50,$rootScope.favs.length);
		}

		
		$scope.Search = function(username)
		{	
			$location.path("/users/"+username);
		}
		
		$rootScope.bmarkToggle = function(username){
			var index = searchBookmarkInStorage(username);
			console.log("index",index, typeof $rootScope.favs)
			if(index != -1)
			{
				console.log("removing bookmark " + username )
				$rootScope.favs.splice(index,1);
			}
			else
			{
				console.log("adding bookmark " + username)
				$rootScope.favs.push(username)
			}

			localStorage.setItem("bookmarks",JSON.stringify($rootScope.favs));
		}

		function searchBookmarkInStorage(username)
		{	
			console.log(typeof $rootScope.favs)
			console.log($rootScope.favs)
			return $rootScope.favs.indexOf(username);
		}

		
		init();



	};
	
app.controller("HeaderController",["$rootScope","$scope","$interval","$location",HeaderController]);
	
}());