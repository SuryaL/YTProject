(function(){
	var app = angular.module("YTapp");

	var sySidebar = function(){

	return{
		restrict: 'E',
		replace:true,
		templateUrl: '../Views/sidebar.html',

		controller:function($scope,$stateParams,$rootScope,bookmarkService, navigateTabsService){
	
				$scope.bmarkToggle = bookmarkService.bmarkToggle;
				$scope.isBookmarked = bookmarkService.isBookmarked;

				// closes the specified user tab from the sidebar
				$scope.closeUser = function(username){
					navigateTabsService.redirect($scope.list,username);
					delete $scope.list[username];
					$scope.$apply();			
				}

				// Returns whether the specified user is active tab
				$scope.isActive= function(datalist)
				// {	return datalist === $scope.useful.currentUsername }
				{	return datalist === $stateParams.username }
		

			}	
		};


	}

	app.directive("sySidebar",sySidebar);


})();