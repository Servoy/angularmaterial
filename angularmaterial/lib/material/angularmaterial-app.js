angular.module('amdUtils', ['servoy']).directive('amdReady', function() {
		return {
			restrict: 'A',
			priority: 0,
			link: function($scope, $element, $attr) {
				var callback = $scope.$parent[$attr.amdReady];
				callback();
			}
		}
	}).run(function() { // instance-injector
	// This is an example of a run block.
	// You can have as many of these as you want.
	// You can only inject instances (not Providers)
	// into run blocks
	}).factory('$amdUtils',['$utils', '$compile', function($utils, $compile) {
	return {
		attachEventHandler: function(element, scope, fn, domEvent, functionFilter) {
			element.on(domEvent, function(event) {

					function executeHandler() {
						fn(event);
					};
					
					// always use timeout or evalAsync because this event could be triggered by a angular call (requestFocus) thats already in a digest cycle.
					if (!functionFilter || functionFilter(event)) {
						scope.$evalAsync(executeHandler);
					}
					return true;
				});
		},
		attachOnFocusGained: function(element, scope, fn) {
			if (fn && element && element !== []) {
				this.attachEventHandler(element, scope,  fn, 'focus');
			}
		},
		attachOnFocusLost: function(element, scope, fn) {
			if (fn && element && element !== []) {
				this.attachEventHandler(element, scope,  fn, 'blur');
			}
		},
		attachOnEnter: function(element, scope, fn) {
			if (fn && element && element !== []) {
				this.attachEventHandler(element, scope,  fn, 'keydown', $utils.testEnterKey);
			}
		},
		addTabSeq: function (input, scope, tabSeq) {
			if (input && input !== []) {
				if (!isNaN(tabSeq) && tabSeq > -1 ) {
					input.attr("sablo-tabseq", tabSeq); 
					$compile(input)(scope);
				}
			}
		}
	}
}]);