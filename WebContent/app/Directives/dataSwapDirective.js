(function() {

	var app = angular.module("YTapp");
	app.directive("dataSwap", dataSwap);
	function dataSwap($compile) {

		return ({
			restrict : "A",
			
			link : function(scope, ele, attrs) {

				var arg = attrs["dataSwap"];
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
