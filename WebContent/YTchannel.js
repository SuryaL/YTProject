
(function(){
	
	var app = angular.module("YTapp");
	
	function YTchannel(){
		
		function display(userObject){
			console.log(userObject);
			
			var vidlist = userObject.vidlist;
			var thumbs = userObject.thumbnailUrl;
			
			
			
		}
		
		return {
			display: display
		}
	};
	
	
	app.factory("YTchannel",YTchannel);
	
})();