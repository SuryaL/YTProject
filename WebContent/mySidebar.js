(function(){
	var app = angular.module("YTapp");

	var mySidebar = function(){
	return{
		restrict: 'E',
		replace:true,
		templateUrl: 'sideBar.html'

		};

	}

	app.directive("mySidebar",mySidebar);


})();