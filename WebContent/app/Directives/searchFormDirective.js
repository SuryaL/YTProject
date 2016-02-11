(function(){

	angular.module("YTapp")
			.directive("sySearchForm",sySearchForm);

	function sySearchForm(navigateTabsService){

		return({
			restrict:"E",
			templateUrl:"../Views/searchForms.html",

			controller:function($scope)
			{
				$scope.submitForm = function(username){
					navigateTabsService.search(username);
				}
			}
		});
	};		


})();