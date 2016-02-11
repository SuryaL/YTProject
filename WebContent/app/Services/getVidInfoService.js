(function(){

	var app = angular.module("YTapp");
	

		function getVidInfoService($stateParams,$sce,ytGetService,ytDisplayService){
			var infoObject={};
			var username;
			var maxVids;
			function getUploads(uname,maxVideos)
			{
			 username = uname;
			 maxVids = maxVideos;
			 // console.log(un)
			 

			 return ytGetService
			 			.getUserId(username)
						.then(function(response)
							{ UserIdProcess(response);
						}) 
						.then(function(){ return infoObject })
			 
					
			}

			
			function UserIdProcess(response){
				 // console.log(response)
				var uid = response.data.items[0].contentDetails.relatedPlaylists.uploads;
				infoObject[username]={userId:uid};

				
				ytGetService
						.getChannelThumbnail(username)
						.then(function(response){getThumbnail(response)});
				
				ytGetService
						.getVideoIds(uid,maxVids)
						.then(function(response){extractVideos(response)});
				
			}


			function getThumbnail(response){
					// console.log(infoObject[username])
					infoObject[username].channelThumbnail 
								= response.data.items[0].snippet.thumbnails.default.url;
				}


			function extractVideos(response){

					infoObject[username].vidlist=[];
					infoObject[username].thumbnailUrl=[];
					infoObject[username].titles=[];
					infoObject[username].showThumbs =[];

					angular.forEach(response.data.items,function(item,i){
						var sr= "https://www.youtube.com/embed/" + item.snippet.resourceId.videoId + "?autoplay=1&autohide=1&border=0&enablejsapi=1&controls=1&showinfo=0&vq=hd720";
						var src= $sce.trustAsResourceUrl(sr);
						infoObject[username].vidlist.push(src);
						infoObject[username].thumbnailUrl.push(item.snippet.thumbnails.medium.url);
						infoObject[username].showThumbs.push(true);
						infoObject[username].titles.push(item.snippet.title);
						
					});

			
				}

				return ({
					getUploads : getUploads
				});

	};

	app.factory("getVidInfoService",getVidInfoService);

})();