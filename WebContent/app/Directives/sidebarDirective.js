(function(){
	var app = angular.module("YTapp");

	var sySidebar = function(){
	return{
		restrict: 'E',
		replace:true,
		templateUrl: '../../Views/sidebar.html',

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

	app.directive("sySidebar",sySidebar);


})();