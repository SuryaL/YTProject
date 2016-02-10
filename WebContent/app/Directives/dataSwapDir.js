(function() {

	var app = angular.module("YTapp");
	app.directive("swapData", swapData);
	function swapData($compile) {

		return ({
			restrict : "A",
			
			link : function(scope, ele, attrs) {

				var arg = attrs["swapData"];
				var params = arg.split(" ");

				scope.$watch(attrs[(params[0])], function(newVal, oldVal){
					if(!newVal){
					attrs.$set(params[2],attrs[params[1]]);
						//angular.element(ele).attr(params[2],attrs[params[1]]);
						 //scope.$apply(function(){ ele.attr(params[2],attrs[params[1]]);
						//console.log(ele.attr(params[2])) });
					}
				});
				
				
				
			}
			});
	}
	;
}());
