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

	if (!$scope.model.tabs) $scope.model.tabs = [];
	var insertPosition = (index == undefined) ? $scope.model.tabs.length : ( (index == -1 || index > $scope.model.tabs.length) ? $scope.model.tabs.length : index);
	for (var i = $scope.model.tabs.length; i > insertPosition; i--) {
		$scope.model.tabs[i] = $scope.model.tabs[i - 1];
	}
	if (!tabText) {
		if (nameArg) tabText = nameArg;
		else tabText = form;
	}
	$scope.model.tabs[insertPosition] = {
		name: nameArg,
		containedForm: form,
		text: tabText,
		relationName: relation,
		disabled: false
	};
	if ($scope.model.tabs.length == 1) {
		$scope.model.tabIndex = 1;
	}

	return true;
}

$scope.api.removeTabAt = function(index) {
	if (index > 0 && index <= $scope.model.tabs.length) {
		for (var i = index - 1; i < $scope.model.tabs.length - 1; i++) {
			$scope.model.tabs[i] = $scope.model.tabs[i + 1];
		}
		$scope.model.tabs.length = $scope.model.tabs.length - 1;
		$scope.model.tabIndex = $scope.getTabIndex($scope.getSelectedTab());
		return true;
	}
	return false;
}

$scope.api.removeAllTabs = function() {
	if ($scope.model.tabs.length > 0) {
		$scope.model.tabs.length = 0;
		$scope.model.tabIndex = $scope.getTabIndex($scope.getSelectedTab());
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