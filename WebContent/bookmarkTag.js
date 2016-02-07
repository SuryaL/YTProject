(function(){

	var app = angular.module("YTapp");
	var myBookmarkTag = function(){
		return{
			restrict: 'A',
			scope: {
				fn: "&myBookmarkTag"
			},
			link: function(scope,element,attrs){
				element.on("click",function(){
				scope.fn();
				});
			}
		}

	};
	app.directive("myBookmarkTag",myBookmarkTag);

})();