angular.module('angularmaterialMdtextarea',['servoy','ngMaterial']).directive('angularmaterialMdtextarea', ['$svyProperties', '$sabloConstants', function($svyProperties,$sabloConstants) {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
		  handlers: "=svyHandlers",
	      api: "=svyApi",
		  svyServoyapi: "="
      },
      controller: function($scope, $element, $attrs) {
    	  $scope.style = {
				width: '100%',
				height: '100%',
				'overflow': 'hidden'
			}
    	  $scope.teaxtareastyle = {
				width: '100%',
				height: '100%',
				'overflow-y': 'auto'
			}
    	  
    	  
      },
	  link : function($scope, $element, $attrs) {
		  var tooltipState = null;
			var formatState = null;
			var className = null;
//			var input = $element.find('textarea')
  	  
			Object.defineProperty($scope.model,$sabloConstants.modelChangeNotifier, {configurable:true,value:function(property,value) {
				switch(property) {
					case "styleClass":
//						if (className) $element.removeClass(className);
//						className = value;
//						if(className) $element.addClass(className);
						break;
					case "enabled":
						var input = getInputElement();
						if (!isDisabled()) input.removeAttr("disabled");
						else input.attr("disabled","disabled");
						break;
					case "readOnly":
						var input = getInputElement();
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
				return $element.find('textarea');
			}
			
			function isDisabled() {
				return ($scope.model.readOnly == true) || !$scope.model.enabled;
			}
	  },
      templateUrl: 'angularmaterial/mdtextarea/mdtextarea.html'
    };
  }]).directive('angularmaterialMdtextareaTemplate', ["$compile", function($compile) {
		return {
			restrict: 'E',
			link: function($scope, $element, attrs, ctrl, transclude) {
				// Is not possible to add/remove dinamically attributes from material design template.
				// Therefore the template is compiled at runtime
				function getTemplate() {
						var template = "<textarea type='text' ng-model='model.dataProviderID'\
						sablo-tabseq='model.tabSeq'\
						svy-focusgained='handlers.onFocusGainedMethodID($event)'\
				   		svy-focuslost='handlers.onFocusLostMethodID($event)'";
						if ($scope.model.rows) template += " rows='" + $scope.model.rows + "'";
						if ($scope.model.maxLength) template += " md-maxlength='" + $scope.model.maxLength +"'";
						template +="svy-autoapply />"
						return template
				}

				// set the template and populate it
				$element.html(getTemplate());
				$compile($element.contents())($scope);
			}
		}
	}])