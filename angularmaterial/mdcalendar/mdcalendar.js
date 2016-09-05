angular.module('angularmaterialMdcalendar',['servoy', 'amdUtils'])
.directive('angularmaterialMdcalendarContainer', ["$amdUtils", "$compile", function($amdUtils, $compile) {
	return {
		restrict: 'E',
	      scope: {
			  model: '=svyModel',
			  handlers: "=svyHandlers",
		      api: "=svyApi",
			  svyServoyapi: "="
	      },
		link: function($scope) {
			console.log("render the div");
		},
		template: '<data-angularmaterial-mdcalendar-template ng-if="model.visible" svy-model="model" svy-handlers="handlers" svy-api="api" svy-servoyapi="svyServoyapi"/>'
	}
}])
.directive('angularmaterialMdcalendar', ['$amdUtils', '$svyProperties', '$sabloConstants', function($amdUtils, $svyProperties,$sabloConstants) {  
    return {
      restrict: 'E',
      scope: {
		  model: '=svyModel',
		  handlers: "=svyHandlers",
	      api: "=svyApi",
		  svyServoyapi: "="
      },
      link: function($scope, $element, $attrs) {
    	  
			Object.defineProperty($scope.model,$sabloConstants.modelChangeNotifier, {configurable:true,value:function(property,value) {
				var input;
				switch(property) {
//					case "styleClass":
//						if (className) $element.removeClass(className);
//						className = value;
//						if(className) $element.addClass(className);
//						break;
//					case "enabled":
//						break
//						input = getInputElement();
//						if (!isDisabled()) input.removeAttr("disabled");
//						else input.attr("disabled","disabled");
//						$compile($element.contents())($scope);
//						break;
//					case "readOnly":
//						break
//						input = getInputElement();
//						if (!isDisabled()) input.removeAttr("disabled");
//						else input.attr("disabled","disabled");
//						$compile($element.contents())($scope);
//						break;
//					case "toolTipText":
//						if (tooltipState)
//							tooltipState(value);
//						else tooltipState = $svyProperties.createTooltipState($element,value);
//					    break;
				}
			}});
			var destroyListenerUnreg = $scope.$on("$destroy", function() {
				destroyListenerUnreg();
				delete $scope.model[$sabloConstants.modelChangeNotifier];
			});
			// data can already be here, if so call the modelChange function so that it is initialized correctly.
			var modelChangFunction = $scope.model[$sabloConstants.modelChangeNotifier];
			for (key in $scope.model) {
				modelChangFunction(key,$scope.model[key]);
			}
			
			function getInputElement() {
				return $element.find('input');
			}
			
			$scope.initInput = function() {
				var input = getInputElement()
				if (!input || !input.length) {
					console.log("warning: can't find input field in md-autocomplete");
					return;
				}
				
				// add tabSequence
				$amdUtils.addTabSeq(input, $scope, $scope.modelTabSeq);				
				$amdUtils.attachOnEnter(input, $scope, $scope.handlers.onActionMethodID);
				$amdUtils.attachOnFocusGained(input, $scope, $scope.handlers.onFocusGainedMethodID);
				$amdUtils.attachOnFocusLost(input, $scope, $scope.handlers.onFocusLostMethodID);
			};
			
			
			$scope.$watch("model.dataProviderID", function (newValue, oldValue) {
				$scope.svyServoyapi.apply("dataProviderID");
			});
      },
      templateUrl: 'angularmaterial/mdcalendar/mdcalendar.html'
    };
  }])