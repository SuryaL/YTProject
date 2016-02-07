(function(){
	var app = angular.module("YTapp");

	var mySidebar = function(){
	return{
		restrict: 'E',
		replace:true,
// <<<<<<< HEAD
// 		templateUrl: 'sideBar.html'
// =======
		templateUrl: 'sideBar.html',

		controller:function($scope,$rootScope){
			
		
			$scope.isBookmarked = function(i)
			{
				if($rootScope.favs.indexOf(i) == -1)
					return false;
				else
					return true;
			}

		}	
// >>>>>>> 09e47645e61b29416b22a28eb980f5b0aba6bfb2
		};


	}

	app.directive("mySidebar",mySidebar);
})();