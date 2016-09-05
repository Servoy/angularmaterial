$scope.getSelectedTab = function() {
	return $scope.model.selectedTab;
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

$scope.getTabAt = function(index) {
	if (index > 0 && index <= $scope.model.tabs.length) {
		return $scope.model.tabs[index - 1];
	}
}

// the api defined in the spec file
$scope.api.addTab = function(form, nameArg, tabText, tooltip, relation, index) {
	
	// empty array if does not exists
	if (!$scope.model.tabs) $scope.model.tabs = [];
	
	if (index == 0 || index < 0 || index > $scope.model.tabs.length + 1) {
		return false;
	}
	
	var insertPosition = (index == undefined) ? $scope.model.tabs.length : ( (index == -1 || index > $scope.model.tabs.length) ? $scope.model.tabs.length : index);
	if (insertPosition > 0) insertPosition--;
	
	// don't change the original object tabs
	for (var i = $scope.model.tabs.length; i > insertPosition; i--) {
		$scope.model.tabs[i] = $scope.model.tabs[i - 1]; 
	}

	// create tab
	if (!tabText) {
		if (nameArg) tabText = nameArg;
		if (nameArg) tabText = nameArg;
		else {
			   if (typeof form == 'string')
			   {
				   tabText = form;
			   }
			   else if (form)
			   {
				   tabText = form._formname_;
			   }	  
		   }
	}
	
	$scope.model.tabs[insertPosition] = {
		name: nameArg,
		containedForm: form,
		text: tabText,
		relationName: relation,
		disabled: false
	};

	// adjust tabIndex
	if ($scope.model.tabs.length == 1 || !$scope.model.tabIndex || $scope.model.tabs.length < $scope.model.tabIndex) {
		$scope.model.tabIndex = 1;
	} else if ($scope.model.tabIndex > insertPosition) {
		$scope.model.tabIndex++;
	}
	return true;
}

$scope.api.removeTabAt = function(index) {
	if (index > 0 && index <= $scope.model.tabs.length) {
		
		// don't change the original object tabs
		for (var i = index - 1; i < $scope.model.tabs.length - 1; i++) {
			$scope.model.tabs[i] = $scope.model.tabs[i + 1];
		}
		$scope.model.tabs.length = $scope.model.tabs.length - 1;
		
		// update tabindex
		if ($scope.model.tabs.length === 0) {
			delete $scope.model.selectedTab;
			$scope.model.tabIndex = -1;
		} else if ($scope.model.tabIndex >= index) {
			if ($scope.model.tabIndex === index) {
				$scope.model.tabIndex = 1;
			} else {
				$scope.model.tabIndex--;
			}   
	   }  
	   return true;
	}
	return false;
}

$scope.api.removeAllTabs = function() {
	if ($scope.model.tabs.length > 0) {
		$scope.model.tabs.length = 0;
		$scope.model.tabIndex = -1;
		delete $scope.model.selectedTab;
		return true;
	}
	return false;
}

$scope.api.setTabEnabledAt = function(index, enabled) {
	var tab = $scope.getTabAt(index);
	if (tab) {
		tab.disabled = !enabled;
	}
}

$scope.api.setTabTextAt = function(index, text) {
	var tab = $scope.getTabAt(index);
	if (tab) {
		tab.text = text;
	}
}