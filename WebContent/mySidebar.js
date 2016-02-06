(function(){
	var app = angular.module("YTapp");

	var mySidebar = function(){
	return{
		restrict: 'E',
		templateUrl: 'sideBar.html'
		};

	}

	app.directive("mySidebar",mySidebar);


})();