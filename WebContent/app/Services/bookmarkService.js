(function(){

	var app = angular.module("YTapp");
	

		function bookmarkService($rootScope){

			// Checks whether the current index item is bookmarked in the local storage
			var isBookmarked = function(i)
			{	return ($rootScope.favs.indexOf(i) == -1)? false:true;  }
				
			// Toggle the bookmark for that user
			var bmarkToggle = function(username){
				var index = searchBookmarkInStorage(username);
				if(index != -1)
					$rootScope.favs.splice(index,1);
				else
					$rootScope.favs.push(username)
			
				localStorage.setItem("bookmarks",JSON.stringify($rootScope.favs));	
			}

			// return the index of the user from the list
			function searchBookmarkInStorage(username)
			{	return $rootScope.favs.indexOf(username); }	


		return{
			isBookmarked : isBookmarked,
			bmarkToggle : bmarkToggle,
			searchBookmarkInStorage : searchBookmarkInStorage
			
		}

	};
	app.factory("bookmarkService",bookmarkService);

})();