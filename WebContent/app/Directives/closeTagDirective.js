(function(){

	var app = angular.module("YTapp");
	var syCloseTag = function(){
		return{
			restrict: 'A',
			scope: {
				fn:"&syCloseTag"
			},
			link: function(scope,element,attrs){
				element.on("click",function(){
					console.log("closing");
					scope.fn();
				});
			}
		}

	};


	app.directive("syCloseTag",syCloseTag);

})();