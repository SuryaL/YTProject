(function(){
var app = angular.module("YTapp");

	var HeaderController = function($scope,$interval,YTservice,$location){
		function init(){
	
			var favs =['sawyer7mage','vikkstar123HD','Aureylian','Graser8','markiplierGAME','PrestonPlayz','MrWoofless','ThatMumboJumbo','Rdilui2'];
				var i =0;
				$interval(function(){
					$scope.Search(favs[i]);
					i++;
				},1,favs.length)

		}


		
		$scope.Search = function(username)
		{	
			$location.path("/users/"+username);
		}
		
		init();
		
	};
	
app.controller("HeaderController",["$scope","$interval","YTservice","$location",HeaderController]);
	
}());