
(function(){
	
	var app = angular.module("YTapp");
	
	function ytDisplayService(){
		
		function display(userObject){
		
			console.log(userObject)
			var vidlist = userObject.vidlist;
			var thumbs = userObject.thumbnailUrl;
			
		}
		
		return {
			display: display
		}
	};
	
	
	app.factory("ytDisplayService",ytDisplayService);
	
})();