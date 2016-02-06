
(function(){
	
	var app = angular.module("YTapp");
	
	function YTchannel(){
		
		function display(userObject){			
			var vidlist = userObject.vidlist;
			var thumbs = userObject.thumbnailUrl;
			var tits = userObject.titles;		
			}
		
		return {
			display: display
		}
	};
	
	
	app.factory("YTchannel",YTchannel);
	
})();