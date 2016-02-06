(function(){
	var app = angular.module('YTapp');
	var navigateTabs = function($routeParams,$location){

		var redirect= function(userList,username){
			// var userList = list;
			var userArr = Object.keys(userList);
			var userLen = userArr.length;
			var userIndex = userArr.indexOf(username);

			var prevUser = userArr[userIndex-1];
			var nextUser = userArr[userIndex+1];

			var activeUser = $routeParams.username;

			// document.getElementsByClassName('redit')[0].parentElement.className = '';
			// document.getElementsByClassName(activeUser)[0].parentElement.className = 'selectedTag';

			if(userLen>1){
				if(activeUser === username){
					if(!!nextUser){
						$location.path("/users/"+nextUser);
						// document.getElementsByClassName('redit')[0].parentElement.className = '';
						// document.getElementsByClassName(nextUser)[0].parentElement.className = 'selectedTag';
					}else if(!!prevUser){
						$location.path("/users/"+prevUser);
						// document.getElementsByClassName('redit')[0].parentElement.className = '';
						// document.getElementsByClassName(prevUser)[0].parentElement.className = 'selectedTag';

					}
				}
			} else{
				$location.path("/main");
				// document.getElementsByClassName('redit')[0].parentElement.className = '';
			}
			// console.log(userIndex);
		}

	return{redirect:redirect};

	}

	app.factory("navigateTabs",navigateTabs);
})();