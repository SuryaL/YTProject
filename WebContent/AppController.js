(function(){

	var app = angular.module("YTapp");
	
	var AppController = function($rootScope,$scope,$controller,navigateTabs){
		$scope.useful = {};
		$scope.list={};
		$rootScope.favs={};
        // $rootScope.favs.list =['sawyer7mage','Alpha2late17','startalkradio','TEDEducation','minutephysics','destinws2','AsapSCIENCE','c0defap','Rdilui2'];
		$rootScope.favs.list=[];
		$scope.closeUser = function(username){
			navigateTabs.redirect($scope.list,username);
			delete $scope.list[username];
			$scope.$apply();			
		}
		$scope.isActive= function(datalist){
			return datalist === $scope.useful.currentUsername;
		}

		$scope.bookmark = function(username){
			var arr = $rootScope.favs.list;
			
			if(arr.indexOf(username)!==-1){
				console.log(arr.indexOf(username));
				alert("Bookmark removed!");
				arr.splice(arr.indexOf(username),1);
				console.log(arr);
			}else{
				console.log(arr.indexOf(username));
				alert("Bookmarked!");
				arr.push(username);
				console.log(arr);
			}

			var ArrStr = JSON.stringify($rootScope.favs.list);
			localStorage.setItem('favsCache',ArrStr);
			var favs =JSON.parse(localStorage.getItem('favsCache'));


		}
	};
	
	app.controller("AppController",AppController);
	
}());
