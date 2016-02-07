(function(){

	var app = angular.module("YTapp");
	var myCloseTag = function(){
		return{
			restrict: 'A',
			scope: {
				fn: "&myCloseTag"
			},
			link: function(scope,element,attrs){
				element.on("click",function(){
					scope.fn();
				});
			}
		}

	};


	app.directive("myCloseTag",myCloseTag);

})(); 