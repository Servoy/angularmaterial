angular.module('angularmaterialMdautocomplete', ['servoy', 'ngMaterial', 'amdUtils']).directive('angularmaterialMdautocomplete', ['$amdUtils', '$timeout', '$q', '$utils', '$parse', '$compile', function($amdUtils, $timeout, $q, $utils, $parse, $compile) {
		return {
			restrict: 'E',
			scope: {
				model: '=svyModel',
				handlers: "=svyHandlers",
				api: "=svyApi",
				svyServoyapi: "="
			},
			controller: function($scope, $element, $attrs) { },
			link: function($scope, $element, $attrs) {
				// TODO to be fixed

				$scope.searchText = null;
				$scope.simulateQuery = false;
				$scope.isDisabled = false;
				$scope.items = [];
				$scope.querySearch = querySearch;
				$scope.selectedItem = getDisplayValue($scope.model.dataProviderID); // fix for editable grid
				$scope.selectedItemChange = selectedItemChange;
				$scope.searchTextChange = searchTextChange;

				$scope.dpChanged = false;

				function initInput() {
					var input = $element.find('input')
					if (!input || !input.length) {
						console.log("warning: can't find input field in md-autocomplete");
						console.log($element[0])
						return;
					}

					// add tabSequence
					$amdUtils.addTabSeq(input, $scope, $scope.modelTabSeq);

					// $amdUtils.attachOnEnter(input, $scope, $scope.handlers.onActionMethodID);
					$amdUtils.attachOnFocusGained(input, $scope, $scope.handlers.onFocusGainedMethodID);
					$amdUtils.attachOnFocusLost(input, $scope, $scope.handlers.onFocusLostMethodID);
				}

				$timeout(initInput);

				/**
				 * Search for items... use $timeout to simulate
				 * remote dataservice call.
				 */
				function querySearch(query) {
//					if ($scope.dpChanged) {
//						$scope.dpChanged = false;
//						return [];
//					}

					// valuelistID has values
					if ($scope.model.valuelistID && $scope.model.valuelistID.length) {
						var items = $scope.model.valuelistID;

						// filter empty objects
						if (items[0].realValue === "") {
							items = items.filter(function(item) {
								return item.realValue !== ""
							});
						}

						// search for results
						var results = items ? ((query != null && query != '') ? items.filter(createFilterFor(query)) : items) : [];
						
						// TODO deferred
						var deferred;
						if ($scope.simulateQuery) {
							// TODO is this necessary ?
							deferred = $q.defer();
							$timeout(function() {
									deferred.resolve(results);
								}, Math.random() * 1000, false);
							return deferred.promise;
						} else {
							return results;
						}
					} else { // empty valuelistID
						// TODO query to server
					}
				}

				// When the search text is modified or cleared
				function searchTextChange(text) {

					// When search text is cleared, clear the data provider
					if (text == '' || text == null) {
						$scope.model.dataProviderID = null;
						$scope.svyServoyapi.apply('dataProviderID');
						$scope.searchText = '';
					}
				}

				// When one item is selected
				function selectedItemChange(item) {
					if (item) {
						$scope.model.dataProviderID = item.realValue;
						$scope.svyServoyapi.apply('dataProviderID');
					}
				}

				/**
				 * Create filter function for a query string
				 */
				function createFilterFor(query) {

					if (!$scope.model.enabled) return;

					var lowercaseQuery = angular.lowercase(query);
					return function filterFn(item) {
						if (item.realValue === "") {
							return false;
						}
						var value = item.displayValue.toLowerCase()
						return (value.indexOf(lowercaseQuery) === 0);
					};
				}

				// Get display value of the item in valuelistID
				function getDisplayValue(realValue) {
					var item;
					if ($scope.model.valuelistID) {
						for (var i in $scope.model.valuelistID) {
							item = $scope.model.valuelistID[i]
							if (item.realValue == realValue) {
								return item.displayValue;
							}
						}
					}
					return realValue;
				}

				// Watch dataprovider changes
				$scope.$watch('model.dataProviderID', function(newVal, oldVal) {

						if (newVal == oldVal) {
							//							if ($scope.model.dataProviderID == null || $scope.model.dataProviderID == '') {
							//								$scope.searchText = '';
							//							} else {
							//								$scope.searchText = getDisplayValue($scope.model.dataProviderID);
							//							}
							return;
						}

						$scope.dpChanged = true;
						if ($scope.model.dataProviderID == null || $scope.model.dataProviderID == '') {
							$scope.searchText = '';
						} else {
							$scope.searchText = getDisplayValue($scope.model.dataProviderID);
						}
					});

				$scope.$watch('model.visible', function(newVal, oldVal) {

						if (newVal && newVal != oldVal) {
							$timeout(initInput());
							return;
						}
					});
			},
			templateUrl: 'angularmaterial/mdautocomplete/mdautocomplete.html'
		};
	}])