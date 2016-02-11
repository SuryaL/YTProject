(function() {

	var app = angular.module("YTapp");
	
	var UserController = function($scope,$stateParams,$sce,ytGetService,ytDisplayService,getInfoService){
		
		var username = $stateParams.username;
		checkIfExists();
		var maxVids = 15;
		
		function getUploads()
		{
			getInfoService.getInformation($scope,username);
		}
		
		function checkIfExists(){
			if(!($scope.list))
			{
				$scope.list = {};
				console.log($scope.list)
			}
		
			if($scope.list.hasOwnProperty(username)){
				console.log(username + " has already loaded");
					$scope.current = $scope.list[username];
					$scope.useful.currentUsername = username;
				}else
				getUploads();
		}	
		
		$scope.replaceMe = function(index){

				$scope.current.showThumbs[index] = false;

		}
		
		// return {getUploads:getUploads,currentlyActive : $scope.current }
	};
	
	
	
	app.controller("UserController",UserController);
	
}());
