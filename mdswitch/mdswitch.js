angular.module('angularmaterialMdswitch', ['servoy']).directive('angularmaterialMdswitch', function() {
		return {
			restrict: 'E',
			scope: {
				model: '=svyModel',
				handlers: "=svyHandlers",
				api: "=svyApi",
				svyServoyapi: "="
			},
			controller: function($scope, $element, $attrs) {
				
				
				var TYPE = {
					BOOLEAN: "BOOLEAN",
					INTEGER: "INTEGER",
					NUMBER: "NUMBER",
					MEDIA: "MEDIA",
					TEXT: "TEXT"
				}				

				// return the true value
				function getTrueValue() {
					if ($scope.model.hasOwnProperty("trueValue")) {
						return $scope.model.trueValue
					} else {
						if ($scope.model.format) {
							switch ($scope.model.format.type) {
							case TYPE.BOOLEAN:
							case TYPE.MEDIA:
								return true;
							case TYPE.TEXT:
								return '1';
							case TYPE.INTEGER:
							case TYPE.NUMBER:
							default:
								return 1;
							}
						}
					}
					return 1;
				}

				// return false value
				function getFalseValue() {
					if ($scope.model.hasOwnProperty("falseValue")) {
						return $scope.model.falseValue
					} else {
						if ($scope.model.format) {
							switch ($scope.model.format.type) {
							case TYPE.BOOLEAN:
							case TYPE.MEDIA:
								return false;
							case TYPE.TEXT:
								return '0';
							case TYPE.INTEGER:
							case TYPE.NUMBER:
							default:
								return 0;
							}
						}
					}
					return 0;
				}

				$scope.$watch('model.dataProviderID', function() {
						if ($scope.model.dataProviderID == getTrueValue()) {
							$scope.selection = 1;
						} else {
							$scope.selection = 0;
						}
					})

				$scope.changeSelection = function() {
					if ($scope.selection) {
						$scope.model.dataProviderID = getTrueValue();
					} else {
						$scope.model.dataProviderID = getFalseValue();
					}
					$scope.svyServoyapi.apply('dataProviderID')
				}
			},
			templateUrl: 'angularmaterial/mdswitch/mdswitch.html'
		};
	})