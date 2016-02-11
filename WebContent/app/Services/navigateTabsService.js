(function(){
	var app = angular.module('YTapp');
	var navigateTabsService = function($stateParams,$location,$state){
	
		var search = function(username)
		{	
			//$location.path("/users/"+username);
			//console.log("here")
			$state.go("user",{username:username});
		}


		var redirect= function(userList,username){
			// var userList = list;
			var userArr = Object.keys(userList);
			var userLen = userArr.length;
			var userIndex = userArr.indexOf(username);

			var prevUser = userArr[userIndex-1];
			var nextUser = userArr[userIndex+1];

			var activeUser = $stateParams.username;
			if(userLen>1){
				if(activeUser === username){
					if(!!nextUser){
						$location.path("/users/"+nextUser);
					}else if(!!prevUser){
						$location.path("/users/"+prevUser);
					}
				}
			} else{
				$location.path("/main");
			}
			console.log(userIndex);
		}
	return{redirect:redirect, search:search};

	}

	app.factory("navigateTabsService",navigateTabsService);
})();