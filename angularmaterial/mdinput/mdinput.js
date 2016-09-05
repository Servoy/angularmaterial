angular.module('angularmaterialMdinput',['servoy','ngMaterial']).directive('angularmaterialMdinput', function($svyProperties,$sabloConstants) {  
    return {
      restrict: 'E',
      scope: {
		  model: '=svyModel',
		  handlers: "=svyHandlers",
	      api: "=svyApi",
		  svyServoyapi: "="
      },
      link: function($scope, $element, $attrs) {
			var tooltipState = null;
			var formatState = null;
			var className = null;
			// var input = $element.find('input')
    	  
			Object.defineProperty($scope.model,$sabloConstants.modelChangeNotifier, {configurable:true,value:function(property,value) {
				var input;
				switch(property) {
					case "styleClass":
//						if (className) $element.removeClass(className);
//						className = value;
//						if(className) $element.addClass(className);
						break;
					case "enabled":
						input = getInputElement();
						if (!isDisabled()) input.removeAttr("disabled");
						else input.attr("disabled","disabled");
						break;
					case "readOnly":
						input = getInputElement();
						if (!isDisabled()) input.removeAttr("disabled");
						else input.attr("disabled","disabled");
						break;
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
			
			function isDisabled() {
				return ($scope.model.readOnly == true) || !$scope.model.enabled;
			}
      },
      templateUrl: 'angularmaterial/mdinput/mdinput.html'
    };
  })