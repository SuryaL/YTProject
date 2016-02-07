
(function(){
	
	var app = angular.module("YTapp");
	
	function YTchannel(){
		
		function display(userObject){

			
			var vidlist = userObject.vidlist;
			var thumbs = userObject.thumbnailUrl;
			
		}
		
		return {
			display: display
		}
	};
	
	
	app.factory("YTchannel",YTchannel);
	
})();