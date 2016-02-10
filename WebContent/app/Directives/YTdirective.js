
(function(){
	var app = angular.module("YTapp");
	var syYoutubeSwap = function(){
		return {
			restrict: 'A',
			link: function(scope, element, attrs, controller){
					var params = attrs['syYoutubeSwap'].split(' ');
					scope.$watch(attrs[params[1]],function(newVal,oldVal){
						if(!newVal){
							attrs.$set(params[2],attrs[params[0]]);
						}
					});
				}
			};
		};
	app.directive("syYoutubeSwap",syYoutubeSwap);

})();