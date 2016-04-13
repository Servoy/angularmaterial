angular.module('angularmaterialMdtabpanel',['servoy', 'ngMaterial']).directive('angularmaterialMdtabpanel', function() {  
    return {
      restrict: 'E',
      scope: {
    		model: "=svyModel",
			svyServoyapi: "=",
			handlers: "=svyHandlers",
			api: "=svyApi"
    },
    controller: function($scope, $element, $attrs) {
  	  
  	// Component sets the active tab id in this scope variable
  	$scope.selectedIndex = 0;
  	
    	// Get the active tab source
		$scope.getActiveTabUrl = function(tab) {
			  
			if (tab)
			{
				return $scope.svyServoyapi.getFormUrl(tab.containedForm)
			}
			return "";
		}
		
		// show the form at selectedIndex
		// required to show the form in tab panel
		if ($scope.model.tabs && $scope.selectedIndex && $scope.selectedIndex >= 0)
		{
			$scope.svyServoyapi.formWillShow($scope.model.tabs[$scope.selectedIndex].containedForm, $scope.model.tabs[$scope.selectedIndex].relationName);
			
			$scope.model.selectedTab = $scope.model.tabs[$scope.selectedIndex];
		}
		
		// When form is modified load new form and hide older one
		$scope.$watch("selectedIndex", function(newValue,oldValue) {
			if (newValue !== oldValue)
			{
				if (newValue && newValue >= 0) {
					
					$scope.svyServoyapi.formWillShow($scope.model.tabs[$scope.selectedIndex].containedForm, $scope.model.tabs[$scope.selectedIndex].relationName);
				}
				
				if (oldValue && oldValue >= 0) $scope.svyServoyapi.hideForm($scope.model.tabs[oldValue].containedForm);
				
				$scope.model.selectedTab = $scope.model.tabs[$scope.selectedIndex];
			}	
		});
		
		// Get form container style
		$scope.getContainerStyle = function() {
			return {top:$element.find(".nav-tabs").height()+"px"};
//			return {minHeight:($scope.model.size.height - 40)+"px", 
//					height: "100%",
//					position:"relative", 
//					top:"0px"};
		}
	  },
    link: function($scope, $element, $attrs, $window) {
  	  
			$scope.waitingForServerVisibility = { }

			function refresh() {
				if ($scope.model.tabIndex == undefined) $scope.model.tabIndex = 1; // default it is 1
				var realTabIndex = $scope.model.tabIndex - 1;
				if ($scope.model.tabs)
					for (var i = 0; i < $scope.model.tabs.length; i++) {
						if (i == realTabIndex) {
							$scope.model.tabs[i].active = true;
						} else $scope.model.tabs[i].active = false;
					}
			}

			$scope.$watch("selectedIndex", function(newValue, oldValue) {
				$scope.model.tabIndex = $scope.selectedIndex + 1;
				
				if ($scope.handlers.onTabChange) {
					
					if (newValue < 0 || newValue >= $scope.model.tabs.length) {
						return;
					}
					
					// Create JSEvent
	  				var jsEvent = {}
	  				jsEvent.type = 'event';
	  				jsEvent.data= $scope.model.tabs[$scope.selectedIndex];
					$scope.handlers.onTabChange(oldValue + 1, jsEvent, newValue + 1, $scope.model.tabs[$scope.selectedIndex]);
				}
			});
			
			$scope.$watch("model.tabIndex", function(newValue) {
				
					$scope.selectedIndex = $scope.model.tabIndex - 1;
					refresh();
				});

			$scope.$watch("model.tabs", function(newValue) {
					$scope.getActiveTab()
					refresh();
				});

			$scope.$watch("model.readOnly", function(newValue) {
					var activeForm = $scope.getActiveTab()
					if (activeForm) {
//						$scope.svyServoyapi.setFormReadOnly(activeForm, newValue);
					}
				});
			$scope.$watch("model.enabled", function(newValue) {
					var activeForm = $scope.getActiveTab()
					if (activeForm) {
//						$scope.svyServoyapi.setFormEnabled(activeForm, newValue);
					}
				});
			$scope.getTemplateUrl = function() {
				if (!$scope.model.tabs) {
					return "MDComponents/MDTabs/MDTabs.html";
				}
				if ($scope.model.tabOrientation == -1 || ($scope.model.tabOrientation == 0 && $scope.model.tabs.length == 1)) return "MDComponents/MDTabs/MDTabs.html";
				else if ($scope.model.tabOrientation == -4) return "MDComponents/MDTabs/MDTabs.html"
				else return "MDComponents/MDTabs/MDTabs.html";
			}
			
			
			$scope.getActiveTab = function() {
				if (!$scope.model.tabs) {
					return $scope.model.selectedTab ? $scope.svyServoyapi.getFormUrl($scope.model.selectedTab.containedForm) : "";
				}
				// if the active tab is different then the selectedTab
				for (var i = 0; i < $scope.model.tabs.length; i++) {
					if ($scope.model.tabs[i].active) {
						if ($scope.model.selectedTab != $scope.model.tabs[i]) {
							$scope.select($scope.model.tabs[i]);
						}
						break;
					}
				}
				return $scope.model.selectedTab ? $scope.svyServoyapi.getFormUrl($scope.model.selectedTab.containedForm) : "";
			}

			$scope.getSelectedTab = function() {
				return $scope.model.selectedTab;
			}

			$scope.getTabAt = function(index) {
				if (index > 0 && index <= $scope.model.tabs.length) {
					return $scope.model.tabs[index - 1];
				}
				return null;
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
				$scope.svyServoyapi.formWillShow(tab.containedForm, tab.relationName);
				if ($scope.model.selectedTab && $scope.model.selectedTab != tab && $scope.handlers.onTabChange) {
					$scope.handlers.onTabChange($scope.getTabIndex($scope.model.selectedTab), event instanceof MouseEvent ? event : null);
				}
				$scope.model.selectedTab = tab;
			}

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

			$scope.select = function(tab) {
				if ( (tab != undefined && $scope.model.selectedTab != undefined && tab.containedForm == $scope.model.selectedTab.containedForm) || (tab == $scope.model.selectedTab)) return;
				var selectEvent = $window.event ? $window.event : null;
				if ($scope.model.selectedTab) {
					if (!$scope.waitingForServerVisibility[$scope.model.selectedTab.containedForm]) {
						var formInWait = $scope.model.selectedTab.containedForm;
						$scope.waitingForServerVisibility[formInWait] = true;
						var promise = $scope.svyServoyapi.hideForm($scope.model.selectedTab.containedForm);
						promise.then(function(ok) {
							delete $scope.waitingForServerVisibility[formInWait];
							if (ok) {
								setFormVisible(tab, selectEvent);
							} else {
								tab.active = false;
								$scope.model.selectedTab.active = true;
							}
						})
					}
				} else {
					setFormVisible(tab, selectEvent);
				}
			}

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