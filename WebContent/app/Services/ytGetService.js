
(function()
{
	var app = angular.module("YTapp");
	
	var ytGetService = function($http){
		var baseChannelUrl = "https://www.googleapis.com/youtube/v3/channels";
		var basePlaylistUrl = "https://www.googleapis.com/youtube/v3/playlistItems";
		var key = 'AIzaSyAdTDL8qNbTR8X-mN1bydX9NvCzCmvzK_Q';
		
		//
		var getUserId = function(searchName){
			var sendData = {
					part : 'contentDetails',
					forUsername : searchName,
					key : key
			};
			
			return callYT(baseChannelUrl,sendData);

		};
		
		var getVideoIds = function(userId, maxResults){
			
			var sendData = {
					part : 'snippet',
					maxResults: maxResults,
					playlistId : userId,
					key : key
			};
			
			return callYT(basePlaylistUrl,sendData);
		};

		
		
		var getChannelThumbnail = function(searchName){
			
			var sendData = {
					part : 'snippet',
					forUsername : searchName,
					key : key
			};
			return callYT(baseChannelUrl,sendData);
		};

		
		var callYT = function(url, data){
			
			return $http.get(url,{params:data});
			
		}
		
		
		
		return{ getUserId: getUserId,
			getVideoIds: getVideoIds,
			getChannelThumbnail:getChannelThumbnail}; 
	};
	
	
	app.factory("ytGetService",ytGetService);
	
}());