(function(){

	var app = angular.module("YTapp");
	var syBookmarkTag = function(){
		return{
			restrict: 'A',
			scope: {
				fn: "&syBookmarkTag"
			},
			link: function(scope,element,attrs){
				element.on("click",function(){
				scope.fn();
				});
			}
		}

	};
	app.directive("syBookmarkTag",syBookmarkTag);

})();