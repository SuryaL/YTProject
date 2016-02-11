(function(){
var app = angular.module("YTapp");

	var HeaderController = function($scope,$rootScope,$interval,navigateTabsService){
		
		init();


		// Only function to be run by this controller
		function init(){
			$rootScope.favs = [];
			run();
		}

		// Loads favorites from local storage
		function run()
		{
			if(!(angular.isDefined(localStorage.bookmarks)))
				localStorage.setItem("bookmarks",JSON.stringify($rootScope.favs));
			 else
			 	$rootScope.favs = JSON.parse(localStorage.getItem("bookmarks"));
				

			if(($rootScope.favs.length)!=0)			
				checkAndSearch();	
		}


		// triggers searches for all users in bookmarks
		function checkAndSearch(){
			var i =0;		
			$interval(function(){
				navigateTabsService.search($rootScope.favs[i]);
				i++;
			},50,$rootScope.favs.length)
			
		}



	};
	
app.controller("HeaderController",HeaderController);
	
}());