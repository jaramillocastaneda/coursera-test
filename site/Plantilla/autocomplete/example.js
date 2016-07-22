angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('TypeaheadCtrl', function($scope, $http) {

  var _selected;

  $scope.selected = undefined;
  $scope.participantes = ['Juan Fernando Vélez', 'Esteban', 'Angelo', 'Diana'];
 
});