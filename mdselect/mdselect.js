angular.module('angularmaterialMdselect',['servoy','ngMaterial']).directive('angularmaterialMdselect', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
		  handlers: "=svyHandlers",
	      api: "=svyApi",
		  svyServoyapi: "="
      },
      link: function($scope, $element, $attrs) {
    	  // On action handler
    	  $scope.onChange = function() {
    		  $scope.svyServoyapi.apply('dataProviderID');
    	  }    	  
      },
      templateUrl: 'angularmaterial/mdselect/mdselect.html'
    };
  })