// var app = angular.module('tareas', ['anguFixedHeaderTable']);
// var app = angular.module('tareas', []);
app.controller('seguimientoController',['$scope', '$uibModal', '$timeout', function($scope, $uibModal, $timeout) {

	$scope.oportunidad = "10";
	
	$scope.open = function () {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '../seguimiento/modal.html',
      controller: 'modalController',
      backdrop: false,
      size: '',
      resolve: {
      }
    });
    
     $timeout(function(){
        modalInstance.close();
      }, 3000);
};
}]);

app.controller('modalController', function($scope) {
  
 $scope.close = function () {
    $uibModalInstance.dismiss();
  };

});