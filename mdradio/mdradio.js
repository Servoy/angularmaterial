angular.module('angularmaterialMdradio',['servoy','ngMaterial']).directive('angularmaterialMdradio', function($utils) {  
    return {
      restrict: 'E',
	  scope: {
    	  model: '=svyModel',
		  handlers: "=svyHandlers",
	      api: "=svyApi",
		  svyServoyapi: "="
      },
      link: function($scope, $element, $attrs) {
    	  
    	  // filter out empty values
    	  $scope.notNullOrEmpty = $utils.notNullOrEmpty;
    	  $scope.flagChanged;
    	  
    	  // check if value is empty
    	  function notNullOrEmpty(value) {
    		  return !(value === null || value === '')
    	  }
    	  
    	  // apply change
    	  $scope.onChange = function () {
    		  // set flag changed
        	  $scope.flagChanged = true;
			  $scope.svyServoyapi.apply('dataProviderID');
    	  }
    	  
      	  // Select the item and push the value to server
    	  $scope.selectItem = function(event, realValue, isRightClick) {    		  
    		  // deselect item
    		  if (!$scope.flagChanged) {	// remove selection if valuelistID allow empty value
    		  		if (!notNullOrEmpty($scope.model.valuelistID[0].realValue)) {
    		  			$scope.model.dataProviderID = null;
    					$scope.svyServoyapi.apply('dataProviderID');
    				}
    		  }
    		  
    		  // reset flag
			  $scope.flagChanged = false;    		  
    		  
       		  // Trigger on action handler
    		  if ($scope.handlers.onActionMethodID) {
    			  $scope.handlers.onActionMethodID(event);
    		  }
    	  }
      },
      templateUrl: 'angularmaterial/mdradio/mdradio.html'
    };
  });