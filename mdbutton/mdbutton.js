angular.module('angularmaterialMdbutton', ['servoy', 'ngMaterial']).directive('angularmaterialMdbutton', function() {
		return {
			restrict: 'E',
			scope: {
				model: "=svyModel",
				handlers: "=svyHandlers",
				api: "=svyApi"
			},
			link: function($scope, $element, $attrs) {
			},
			controller: function($scope, $element, $attrs) {
			},
			templateUrl: 'angularmaterial/mdbutton/mdbutton.html'
		};
	})
//	.config(function($mdThemingProvider) {
//	var themes = ['red',
//		'pink',
//		'purple',
//		'deep-purple',
//		'indigo',
//		'blue',
//		'light-blue',
//		'cyan',
//		'teal',
//		'green',
//		'light-green',
//		'lime',
//		'yellow',
//		'amber',
//		'orange',
//		'deep-orange',
//		'brown',
//		'grey',
//		'blue-grey'];
//
//	themes.forEach(function(t) {
//		//add temp check for duplicate color
//		if (t == 'grey') {
//			$mdThemingProvider.theme(t).primaryPalette(t).accentPalette('blue-grey');
//		} else {
//			$mdThemingProvider.theme(t).primaryPalette(t).accentPalette(t);
//		}
//	});
//});