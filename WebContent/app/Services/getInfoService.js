
angular.module("YTapp").factory("getInfoService",getInfoService);

function getInfoService($sce,ytGetService, ytDisplayService)
{
	var maxVids = 15;

	function getInformation(obj,username){
	ytGetService.getUserId(username).then(function(response){
				
				var uid = response.data.items[0].contentDetails.relatedPlaylists.uploads;
				obj.list[username]={userId:uid};
				ytGetService.getChannelThumbnail(username).then(function(response){
					obj.list[username].channelThumbnail = response.data.items[0].snippet.thumbnails.default.url;
					//console.log(obj.list);
				});
				ytGetService.getVideoIds(uid,maxVids).then(function(response){
					obj.list[username].vidlist=[];
					obj.list[username].thumbnailUrl=[];
					obj.list[username].titles=[];
					obj.list[username].showThumbs =[];
					angular.forEach(response.data.items,function(item,i){
						var sr= "https://www.youtube.com/embed/" + item.snippet.resourceId.videoId + "?autoplay=1&autohide=1&border=0&enablejsapi=1&controls=1&showinfo=0&vq=hd720";
						var src= $sce.trustAsResourceUrl(sr);
						obj.list[username].vidlist.push(src);
						obj.list[username].thumbnailUrl.push(item.snippet.thumbnails.medium.url);
						obj.list[username].showThumbs.push(true);
						obj.list[username].titles.push(item.snippet.title);
					});


					var userObj = obj.list[username];
					ytDisplayService.display(userObj);
					console.log(obj)
					obj["current"] = userObj;
					// obj.useful.currentUsername = username;
				});
				
			});
	}

	return({
		getInformation:getInformation
	})
}