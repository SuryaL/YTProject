(function(){

	var app = angular.module("YTapp");
	var closeTag = function(){
		return{
			restrict: 'A',
			scope: {
				fn:"&closeTagDir"
			},
			link: function(scope,element,attrs){
				element.on("click",function(){
					console.log("closing");
					scope.fn();
				});
			}
		}

	};


	app.directive("closeTag",closeTag);

})();