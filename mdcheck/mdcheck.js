angular.module('angularmaterialMdcheck',['servoy','ngMaterial']).directive('angularmaterialMdcheck', ['$utils', '$timeout', function($utils, $timeout) {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
		  handlers: "=svyHandlers",
	      api: "=svyApi",
		  svyServoyapi: "="
      },
      controller: function($scope, $element, $attrs) {
    	  
      	  $scope.checkData = {};
      	  
      },
      link: function($scope, $element, $attrs) {
    	  
    	  // filter out empty values
    	  $scope.notNullOrEmpty = $utils.notNullOrEmpty;
    	  
    	  // check if value is empty
    	  function notNullOrEmpty(value) {
    		  return !(value === null || value === '')
    	  }
    	  
    	  function hasEmptyValue() {
    		  if ($scope.model.valuelistID) {
    		  		return $scope.model.valuelistID.length && !notNullOrEmpty($scope.model.valuelistID[0].realValue);
    		  } 
    		  return true
    	  }
    	  
    	  // Select the item and push the value to server
    	  $scope.selectItem = function(event, realValue, isRightClick, index) {
    		  
    		  // Push to data provider
    		  if ($scope.model.enabled) {
    			  
    			  var result = '';
    			  for (var i in $scope.checkData) {
    				  result += ((result && $scope.checkData[i] ? '\n' : '') + $scope.checkData[i]);
    			  }
    			  
    			  // if empty value do not allow data change
    			  if (!notNullOrEmpty(result) && !hasEmptyValue()) {
					  setCheckData();
    			  } else {
    	    		  $scope.model.dataProviderID = result;
    	    		  $scope.svyServoyapi.apply('dataProviderID');
    			  }
    		  
    			  // generate MouseEvent programmaticaly since ng-change does not give any info on DOM
    			  if (!event) {
    				  event = getEvent();
    			  }
    			  
	    		  // Trigger on action handler
	    		  if (!isRightClick && $scope.handlers.onActionMethodID) {
	    			  $scope.handlers.onActionMethodID(event);
	    		  }
//    			  if ($scope.handlers.onFocusLostMethodID) {
//	    			  $scope.handlers.onFocusLostMethodID(event);
//    			  }
    		  }
    	  }
    	  
    	  // Save the dataprovider
    	  $scope.saveData = function(event) {
    		  $scope.svyServoyapi.apply('dataProviderID');
    		  
    		  // Trigger on action handler
    		  if ($scope.handlers.onActionMethodID) {
    			  if (!event) {
    				  event = getEvent();
    			  }
    			  $scope.handlers.onActionMethodID(event);
    		  }
    	  }
    	  
		  // generate MouseEvent programmaticaly
    	  function getEvent() {
				// get element offset
				var element = $("#" + $scope.model.svyMarkupId);
				var offset = element.offset();
				var x = offset.left;
				var y = offset.top;
				  
				var event = document.createEvent("MouseEvents");
				event.initMouseEvent("click", false, true, window, 1, x, y, x, y);
				return event
    	  }
    	  
    	  // set check data to the same value of model.dataProviderID
    	  function setCheckData() {
			  // When dataprovider value is changed
			  if ($scope.model.valuelistID) {
				  
				  // if dataprovider is undefined uncheck all 
				  if ($scope.model.dataProviderID == null || $scope.model.dataProviderID == '' || $scope.model.dataProviderID == undefined) {
					  if ($scope.model.valuelistID) {
						  for (var i in $scope.model.valuelistID) {
							  $scope.checkData[i] = '';
						  }
					  }
				  } else {
					  // for each value
					  var values = $scope.model.dataProviderID.toString().split('\n');
					  var item;
					  var checkIdx = 0;
					  
					  for (i in $scope.model.valuelistID) {
						  var item = $scope.model.valuelistID[i];
						  if (!notNullOrEmpty(item.realValue)) {
							  continue
						  }

						  // set checkdata if value is selected
						  $scope.checkData[checkIdx] = isValueSelected(i, values) ? item.realValue : ''; 
						  checkIdx++;
					  }
				  }
			  }
			  
			  // is the value in valuelistID being selected ?
			  function isValueSelected(idx, selectedValues) {
				  if ($scope.model.valuelistID) {
				  		if (selectedValues) {
				  			for (var v = 0; v < selectedValues.length; v++) {
				  				if ($scope.model.valuelistID[idx].realValue == selectedValues[v]) {
				  					return true;
				  				}
				  			}
				  		}
				  }
				  return false;
			  }
    	  }
    	  
    	  // Watch dataprovider changes
    	  $scope.$watch('model.dataProviderID', function(newVal, oldVal) {
    		  	setCheckData();
    	  });
      },
      templateUrl: 'angularmaterial/mdcheck/mdcheck.html'
    };
  }])