
app.controller('responderCLController', ['$scope', '$routeParams', function($scope, $routeParams) {

	$scope.caso = $routeParams.caso;
	
	$scope.tabActivo = 3;
	
	$scope.clickTab = function (index) {
		$scope.tabActivo = index;
	}
	
} ]
);