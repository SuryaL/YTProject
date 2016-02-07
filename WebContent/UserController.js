(function() {

	var app = angular.module("YTapp");
	
	var UserController = function($scope,$routeParams,$sce,YTservice,YTchannel,navigateTabs){
		
		var username = $routeParams.username;

		checkIfExists();
		var maxVids = 5;
		
		function getUploads()
		{
			YTservice.getUserId(username).then(function(response){
				
				var uid = response.data.items[0].contentDetails.relatedPlaylists.uploads;
				$scope.list[username]={userId:uid};
				YTservice.getChannelThumbnail(username).then(function(response){
					$scope.list[username].channelThumbnail = response.data.items[0].snippet.thumbnails.default.url;
					//console.log($scope.list);
				});
				YTservice.getVideoIds(uid,maxVids).then(function(response){
					$scope.list[username].vidlist=[];
					$scope.list[username].thumbnailUrl=[];
					$scope.list[username].titles=[];
					$scope.list[username].showThumbs =[];
					angular.forEach(response.data.items,function(item,i){
						var sr= "https://www.youtube.com/embed/" + item.snippet.resourceId.videoId + "?autoplay=1&autohide=1&border=0&enablejsapi=1&controls=1&showinfo=0&vq=hd720";
						var src= $sce.trustAsResourceUrl(sr);
						$scope.list[username].vidlist.push(src);
						$scope.list[username].thumbnailUrl.push(item.snippet.thumbnails.medium.url);
						$scope.list[username].showThumbs.push(true);
						$scope.list[username].titles.push(item.snippet.title);
					});
					var userObj = $scope.list[username];
					YTchannel.display(userObj);
					$scope.current = $scope.list[username];
					$scope.useful.currentUsername = username;
				});
				
			});
					
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
