(function() {

	var app = angular.module("YTapp");
	
	var UserController = function($scope,$stateParams,$sce,ytGetService,ytDisplayService,getVidInfoService){
		
		var username = $stateParams.username;
		
		var maxVids = 15;
		checkIfExists(username);
		
		
		function getUploads(username2) {
			
			var xx = getVidInfoService.getUploads(username2,maxVids)
						.then(function(r)
							{
								//console.log("itsme",r);
								$scope.list[username2] = r[username2];
								console.log("itsme",r,$scope.list);
							}).then(function(){after(username2);})


				function after(username2){
					//$scope.list.useful ="";
					var userObj = $scope.list[username2];
					console.log($scope.list,$scope.list[username2],userObj,username2)
					ytDisplayService.display(userObj);
					$scope.list.current = $scope.list[username2];
					$scope.list["useful"]={currentUsername : username2};
				}
			
		}

		
		function checkIfExists(username2){
			if(!($scope.list))
			{
				$scope.list = {};
				console.log($scope.list)
			}
		
			if($scope.list.hasOwnProperty(username2)){
				//console.log(username2 + " has already loaded");
					$scope.current = $scope.list[username2];
					$scope.useful.currentUsername = username2;
				}else
				{getUploads(username2);}
		}	
		
		$scope.replaceMe = function(index){

				$scope.current.showThumbs[index] = false;

		}
		
		
	};
	
	
	
	app.controller("UserController",UserController);
	
}());
