angular.module('angularmaterialMdtabpanel', ['servoy', 'ngMaterial']).directive('angularmaterialMdtabpanel', function() {
		return {
			restrict: 'E',
			scope: {
				model: "=svyModel",
				svyServoyapi: "=",
				handlers: "=svyHandlers",
				api: "=svyApi"
			},
			controller: function($scope, $element, $attrs, $window, $timeout, webStorage) {
				
				var persistTabs = true;		// flag used to persist tabs
				var sessionIndex;			// the index of the restored session
				var isContainerResponsive = !$element.parent().hasClass('svy-wrapper');
				
				/** @deprecated  */
				$scope.mdSelectTab = function(index, t) {
					console.log("select tab " + JSON.stringify(t));
				}

				/** @deprecated  */
				$scope.mdDeselectTab = function(t) {
					console.log("deselect tab " + JSON.stringify(t));
				}
				
				// FIXME remove selected tab does not trigger onShow
				// FIXME visible toggle should trigger onShow/onHide ?
				// TESTME change contained form at runtime
				
				$scope.waitForSessionRestore;				// If there is already an existing session (F5) wait for server values
				$scope.waitingForServerVisibility = { } 	// Used to wait for return true of tab
				$scope.selectedIndex;						// Component sets the active tab id in this scope variable

				// Get the active tab source
				$scope.getActiveTabUrl = function(tab) {

					if (tab) {
						return $scope.svyServoyapi.getFormUrl(tab.containedForm)
					}
					return "";
				}
				
				// restore tabIndex from the session
				sessionIndex = getTabIndexFromSession();
				if (sessionIndex) {
					$scope.waitForSessionRestore = true;
					$scope.model.tabIndex = sessionIndex;
				}

				// show the form at selectedIndex
				// required to show the form in tab panel. Used to restore the form in tab when the top form has been hide.
				//				if ($scope.model.tabs && $scope.model.tabs.length >0 && $scope.selectedIndex && $scope.selectedIndex >= 0) {
				//					$scope.svyServoyapi.formWillShow($scope.model.tabs[$scope.selectedIndex].containedForm, $scope.model.tabs[$scope.selectedIndex].relationName);
				//
				//					$scope.model.selectedTab = $scope.model.tabs[$scope.selectedIndex];
				//				} else if ($scope.model.tabs && $scope.model.tabs.length) {
				//					console.log ("there are tabs but but not selected index");
				//					$scope.svyServoyapi.formWillShow($scope.model.tabs[$scope.model.tabIndex].containedForm, $scope.model.tabs[$scope.model.tabIndex].relationName);
				//				}

				// Get form container style
				$scope.getContainerStyle = function(tab) {
					var style = {};
					if (isContainerResponsive && tab.height) {
						style.height = tab.height + "px";
					}
					return style;
//					return { top: $element.find(".nav-tabs").height() + "px" };
					//			return {minHeight:($scope.model.size.height - 40)+"px",
					//					height: "100%",
					//					position:"relative",
					//					top:"0px"};
				}

				/** 
				 * @param {Number} index 1-based
				 * set the active tab on the tab object
				 * @private 
				 * */
				function setActiveTab(index) {
					// TODO should this be done ?
					// if ($scope.model.tabIndex == undefined) $scope.model.tabIndex = 1; // default it is 1
					var realTabIndex = index - 1//$scope.model.tabIndex - 1;

					// update the status of the active tab
					if ($scope.model.tabs)
						for (var i = 0; i < $scope.model.tabs.length; i++) {
							if (i == realTabIndex) {
								if (!$scope.model.tabs[i].active) {
									$scope.model.tabs[i].active = true;
								}
							} else {
								if($scope.model.tabs[i].active) {
									$scope.model.tabs[i].active = false;
								}
							}
					}
				}
				
				// wait for the model to be synchronized
				$scope.$watch("model.svyMarkupId", function (newValue, oldValue) {
					if (newValue && $scope.waitForSessionRestore) {
							$scope.waitForSessionRestore = false;
					}
				})
				
				$scope.$watch("model.tabIndex", function(newValue, oldValue) {
					console.log("tabIndex " + oldValue + " -> " + newValue);
					
					// the tabs should be persisted at least once or md-tabs will always restore it to 0
					if (persistTabs && sessionIndex != $scope.model.tabIndex && $scope.model.tabs && $scope.model.tabs.length && $scope.model.tabIndex > 1) {
						console.log("Persist tabs ")
						$scope.svyServoyapi.apply("tabs");
						persistTabs = false;
					}

					$scope.selectedIndex = $scope.model.tabIndex - 1;
					
					// store the tabIndex in session storage
					storeTabInxexInSession($scope.model.tabIndex);
				});

				$scope.$watch("selectedIndex", function(newValue, oldValue) {
						console.log("selectedIndex " + oldValue + " -> " + newValue);
						
						// skip if the selectedIndex is undefined
						if (isNaN($scope.selectedIndex)) {
							return;
						}

						// update the selectedIndex
						$scope.model.tabIndex = $scope.selectedIndex + 1;

						// skip if the value didn't change
						if (newValue !== oldValue) {

							if ($scope.model.tabs && $scope.model.tabs.length) {
								// update the active tab
								setActiveTab($scope.model.tabIndex);
								// get the active tab
								var tabName = $scope.selectActiveTab();
								
//								// hide the previous form
//								if (oldValue && oldValue >= 0) {
//									$scope.svyServoyapi.hideForm($scope.model.tabs[oldValue].containedForm);
//								}
//
//								// show the new form
//								if (newValue && newValue >= 0) {
//									$scope.svyServoyapi.formWillShow($scope.model.tabs[$scope.selectedIndex].containedForm, $scope.model.tabs[$scope.selectedIndex].relationName);
//								}
//
//								$scope.model.selectedTab = $scope.model.tabs[$scope.selectedIndex];
//
//								// trigger onTabChange event
//								if ($scope.handlers.onTabChange) {
//
//									if (isNaN(oldValue) || newValue < 0 || newValue >= $scope.model.tabs.length) {
//										return;
//									}
//
//									// Create JSEvent
//									var jsEvent = { }
//									jsEvent.type = 'event';
//									jsEvent.data = $scope.model.tabs[$scope.selectedIndex];
//									$scope.handlers.onTabChange(oldValue + 1, jsEvent, newValue + 1, $scope.model.tabs[$scope.selectedIndex]);
//								}
							}
						}

					});

				$scope.$watch("model.tabs", function(newValue, oldValue) {
					console.log ("watch tabs " + JSON.stringify(newValue))
						// TODO watch this
						// if there is not an active tab, set the active tab
						if (newValue && !$scope.waitForSessionRestore ) {
							//if (!$scope.selectActiveTab()) {
								// if tabIndex is lower then tabs length, reset tabindex to 1
								
								// reduce tabIndex if suddenly is shorter
								if ($scope.model.tabIndex > $scope.model.tabs.length) {
									$scope.model.tabIndex = 1;
								}
								
								setActiveTab($scope.model.tabIndex);
								$scope.selectActiveTab();
								
								if (!$scope.model.tabs.length && $scope.model.selectedTab && $scope.model.selectedTab.containedForm) {
									var promise = $scope.svyServoyapi.hideForm($scope.model.selectedTab.containedForm);
									delete $scope.model.selectedTab;
								} else {

								}
							//}
						} else if (!newValue && $scope.model.selectedTab && $scope.model.selectedTab.containedForm) {
							// all tabs removed hide the tab.
							var promise = $scope.svyServoyapi.hideForm($scope.model.selectedTab.containedForm);
							delete $scope.model.selectedTab;
						}
					});

				$scope.$watch("model.readOnly", function(newValue) {
						//var activeForm = $scope.getActiveTab()
						//if (activeForm) {
							//						$scope.svyServoyapi.setFormReadOnly(activeForm, newValue);
						//}
					});
				$scope.$watch("model.enabled", function(newValue) {
						//var activeForm = $scope.getActiveTab()
						//if (activeForm) {
							//						$scope.svyServoyapi.setFormEnabled(activeForm, newValue);
						//}
					});

				/** 
				 * returns the name of the active tab
				 * */
				$scope.selectActiveTab = function() {
					if (!$scope.model.tabs) {
						return ""; //$scope.model.selectedTab ? $scope.svyServoyapi.getFormUrl($scope.model.selectedTab.containedForm) : "";
					}
					// if the active tab is different then the selectedTab
					for (var i = 0; i < $scope.model.tabs.length; i++) {
						if ($scope.model.tabs[i].active) {
							
							// TODO should be here ?
							// may better be selectActiveTab
							if ($scope.model.selectedTab != $scope.model.tabs[i]) {
								$scope.select($scope.model.tabs[i]);
							}
							break;
						}
					}
					//return  $scope.model.selectedTab ? $scope.svyServoyapi.getFormUrl($scope.model.selectedTab.containedForm) : "";
					//return false;
				}

				$scope.getSelectedTab = function() {
					return $scope.model.selectedTab;
				}

				/** 
				 * Get tab at index 1-based
				 * @param {Number} index
				 * @return {Object} */
				$scope.getTabAt = function(index) {
					if (index > 0 && index <= $scope.model.tabs.length) {
						return $scope.model.tabs[index - 1];
					}
					return null;
				}
				
				/** 
				 * Get index of tab
				 * @param {Object} tab
				 * @return {Number} */
				$scope.getTabIndex = function(tab) {
					if (tab) {
						for (var i = 0; i < $scope.model.tabs.length; i++) {
							if ($scope.model.tabs[i].containedForm == tab.containedForm) {
								return i + 1;
							}
						}
					}
					return -1;
				}

				$scope.getForm = function(tab) {
					if ($scope.model.selectedTab && tab.containedForm == $scope.model.selectedTab.containedForm) {
						return $scope.svyServoyapi.getFormUrl(tab.containedForm);
					}
					return "";
				}

				$scope.getActiveForm = function(tab) {
					if (tab && tab.active == true) {
						return $scope.svyServoyapi.getFormUrl(tab.containedForm);
					}
					return "";
				}

				function setFormVisible(tab, event) {
					var oldSelected = $scope.model.selectedTab;
									
					// show the first tab
					$scope.svyServoyapi.formWillShow(tab.containedForm, tab.relationName);
					if (oldSelected && $scope.model.selectedTab && $scope.model.selectedTab != tab && $scope.handlers.onTabChange) {
						//$scope.handlers.onTabChange($scope.getTabIndex($scope.model.selectedTab),  $.Event("change"))//event instanceof MouseEvent ? event : null);
					
						$timeout(function() {
							$scope.handlers.onTabChange($scope.getTabIndex(oldSelected), event !=null?event : $.Event("change"));
						},0,false);
					
					}
					$scope.model.selectedTab = tab;
				}

				/** select the tab */
				$scope.select = function(tab) {
					// skip if tab is undefined, if already selected or if containedForm doesn't change
					if ( (tab != undefined && $scope.model.selectedTab != undefined && tab.containedForm == $scope.model.selectedTab.containedForm) || (tab == $scope.model.selectedTab)) return;
					var selectEvent = $window.event ? $window.event : null;
					if ($scope.model.selectedTab) {	// hide selected tab and show new tab
						if (!$scope.waitingForServerVisibility[$scope.model.selectedTab.containedForm]) {
							var formInWait = $scope.model.selectedTab.containedForm;
							$scope.waitingForServerVisibility[formInWait] = true;
							var promise = $scope.svyServoyapi.hideForm($scope.model.selectedTab.containedForm);
							promise.then(function(ok) {
								delete $scope.waitingForServerVisibility[formInWait];
								if (ok) {
									setFormVisible(tab, selectEvent);
								} else {	
									// restore the selected tab 
									// TODO should i also change index here ?
									tab.active = false;
									$scope.model.selectedTab.active = true;
									
									var oldIndex = $scope.getTabIndex($scope.model.selectedTab)
									if (oldIndex > 0) {
										$scope.model.tabIndex = oldIndex;
									} else {	// if the tab has been removed;
										setFormVisible(tab, selectEvent);
									}
								}
							})
						}
					} else {
						setFormVisible(tab, selectEvent);
					}
				}
				
				function storeWebSessionKey(key, value) {
					if ($scope.$parent && $scope.$parent.formname) {
						var keyName = $scope.$parent.formname + "_" + $element.attr('name') + "_" + key;
						webStorage.session.add(keyName, value);
					}
				}
				
				function getWebSessionValue(key) {
					var storageValue
					if ($scope.$parent && $scope.$parent.formname) {
						var keyName = $scope.$parent.formname + "_" + $element.attr('name') + "_" + key;
						storageValue = webStorage.session.get(keyName);
					}
					return storageValue;
				}
				
				function removeWebSessionKey(key) {
					if ($scope.$parent && $scope.$parent.formname) {
						var keyName = $scope.$parent.formname + "_" + $element.attr('name') + "_" + key;
						webStorage.session.remove(keyName);
					}
				}

				function storeTabInxexInSession(newValue) {
					storeWebSessionKey("tabindex", newValue);
				}

				function getTabIndexFromSession() {
					var index;
					var storageValue = getWebSessionValue("tabindex")
					if (storageValue) {
						index = parseInt(storageValue);
						if (!index || index < 1) {
							index = 1;
						}
					}
					return index;
				}
				
			},
			link: function($scope, $element, $attrs, $window) {

				// the api defined in the spec file
				$scope.api.getMaxTabIndex = function() {
					return $scope.model.tabs.length;
				}

				$scope.api.getSelectedTabFormName = function() {
					var selectedTab = $scope.getSelectedTab();
					return selectedTab ? selectedTab.containedForm : null;
				}

				$scope.api.getTabFormNameAt = function(index) {
					var tab = $scope.getTabAt(index);
					return tab ? tab.containedForm : '';
				}

				$scope.api.getTabNameAt = function(index) {
					var tab = $scope.getTabAt(index);
					return tab ? tab.name : '';
				}

				$scope.api.getTabRelationNameAt = function(index) {
					var tab = $scope.getTabAt(index);
					return tab ? tab.relationName : '';
				}

				$scope.api.getTabTextAt = function(index) {
					var tab = $scope.getTabAt(index);
					return tab ? tab.text : '';
				}

				$scope.api.isTabEnabledAt = function(index) {
					var tab = $scope.getTabAt(index);
					return tab ? (tab.disabled == undefined ? true : !tab.disabled) : true;
				}

				$scope.api.getElementType = function() {
					return 'TABPANEL';
				}
			},
			templateUrl: 'angularmaterial/mdtabpanel/mdtabpanel.html'
		};
	})