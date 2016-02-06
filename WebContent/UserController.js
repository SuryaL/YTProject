(function() {

	var app = angular.module("YTapp");
	var UserController =
	function($scope, $routeParams, $sce, $timeout, YTservice, YTchannel) {

				var username = $routeParams.username;
				checkIfExists();
				function getUploads() {

					YTservice
							.getUserId(username)
							.then(function(response) {
								var uid =
										response.data.items[0].contentDetails.relatedPlaylists.uploads;
								$scope.list[username] =
									{
										userId : uid
									};
								YTservice
										.getVideoIds(uid, 10)
										.then(function(response) {

											$scope.list[username].vidlist = [];
											$scope.list[username].vidlist2 = [];
											$scope.list[username].thumbnailUrl = [];
											$scope.list[username].showThumbs = [];
											angular
													.forEach(response.data.items, function(item, i)
													{

														var sr =
																"https://www.youtube.com/embed/" + item.snippet.resourceId.videoId + "?autoplay=1&autohide=1&border=0&enablejsapi=1&controls=1&showinfo=0&vq=hd720";
														var src = $sce.trustAsResourceUrl(sr);
														$scope.list[username].vidlist.push(src);
														$scope.list[username].vidlist2.push("");
														$scope.list[username].thumbnailUrl
																.push(item.snippet.thumbnails.medium.url);
														$scope.list[username].showThumbs.push(true);
													});
											var userObj = $scope.list[username];
											YTchannel.display(userObj);
											$scope.current = $scope.list[username];
										});
							});
				}
				function checkIfExists() {

					if (!($scope.list)) {
						$scope.list = {};
						console.log($scope.list)
					}
					if ($scope.list.hasOwnProperty(username)) {
						console.log(username + " already there");
						var userObj = $scope.list[username];
						YTchannel.display(userObj);
						$scope.current = $scope.list[username];
					}
					else
						getUploads();
				}
				$scope.replaceMe = function(index) {

				//	$scope.current.vidlist2[index] = $scope.current.vidlist[index];
					// $timeout(function() {
						$scope.current.showThumbs[index] = false;
					// }, 500);
				}
				//
				return ({ getUploads: getUploads })
};     app.controller("UserController", UserController); }());
