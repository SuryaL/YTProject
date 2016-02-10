(function(){
	var app = angular.module("YTapp");

	var sidebar = function(){
	return{
		restrict: 'E',
		replace:true,
		templateUrl: '../../Views/sideBar.html',

		controller:function($scope,$rootScope){
			
		
			$scope.isBookmarked = function(i)
			{
				if($rootScope.favs.indexOf(i) == -1)
					return false;
				else
					return true;
			}

		}	
		};


	}

	app.directive("sidebar",sidebar);


})();