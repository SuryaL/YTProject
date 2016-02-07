(function(){
var app = angular.module("YTapp");

// <<<<<<< HEAD
// 	var HeaderController = function($rootScope,$scope,$interval,$timeout,YTservice,$location,$cacheFactory){

// 		function init(){
// 			if(!!JSON.parse(localStorage.getItem('favsCache'))){
// 				var favs =JSON.parse(localStorage.getItem('favsCache'));
// 			}else{
// 				var favs = $rootScope.favs.list;
// 			}
// 				var i =0;
// 				$interval(function(){
// 					$scope.Search(favs[i]);				
// 					i++;
// 				},10,favs.length);
				
// 		}

// 		$scope.submitForm = function(username){
// 			$scope.Search(username);
// 		}

// 		$scope.Search = function(username){
// 			if(!!username){
// =======
	var HeaderController = function($rootScope,$scope,$interval,YTservice,$location,$timeout){
		
		
		function init(){
			$rootScope.favs = [];
			run();
		}

		function run()
		{
			// localStorage.removeItem("bookmarks")
			console.log(JSON.parse(localStorage.getItem("bookmarks")))
			if(angular.isDefined(localStorage.bookmarks) == false)
			{
				localStorage.setItem("bookmarks",JSON.stringify($rootScope.favs));
				console.log(localStorage.getItem("bookmarks"))
			}
			else
			{
				$rootScope.favs = JSON.parse(localStorage.getItem("bookmarks"));//['sawyer7mage','vikkstar123HD','Aureylian','Graser10','markiplierGAME','PrestonPlayz','MrWoofless','ThatMumboJumbo','Rdilui2'];
			}	
			

			console.log($rootScope.favs)
			if(($rootScope.favs.length)!=0)			
				checkAndSearch();	
		}

		function checkAndSearch(){

			var i =0;
			
			$interval(function(){
				$scope.Search($rootScope.favs[i]);
				console.log($rootScope.favs[i])
				i++;
			},50,$rootScope.favs.length);
		}

		
		$scope.Search = function(username)
		{	
// >>>>>>> 09e47645e61b29416b22a28eb980f5b0aba6bfb2
			$location.path("/users/"+username);
			}else{
				$location.path("/main");
			}
		}
		
// <<<<<<< HEAD
// 		init();
// 		$timeout(function(){
// 			$location.path('/main');
// 			$scope.useful.currentUsername=' ';
// 		},9000)
// =======
		$rootScope.bmarkToggle = function(username){
			var index = searchBookmarkInStorage(username);
			console.log("index",index, typeof $rootScope.favs)
			if(index != -1)
			{
				console.log("removing bookmark " + username )
				$rootScope.favs.splice(index,1);
			}
			else
			{
				console.log("adding bookmark " + username)
				$rootScope.favs.push(username)
			}

			localStorage.setItem("bookmarks",JSON.stringify($rootScope.favs));
		}

		function searchBookmarkInStorage(username)
		{	
			console.log(typeof $rootScope.favs)
			console.log($rootScope.favs)
			return $rootScope.favs.indexOf(username);
		}

// >>>>>>> 09e47645e61b29416b22a28eb980f5b0aba6bfb2
		
		init();



	};
	
// <<<<<<< HEAD
app.controller("HeaderController",HeaderController);
// =======
// app.controller("HeaderController",["$rootScope","$scope","$interval","YTservice","$location","$timeout",HeaderController]);
// >>>>>>> 09e47645e61b29416b22a28eb980f5b0aba6bfb2
	
}());