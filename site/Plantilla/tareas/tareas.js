// var app = angular.module('tareas', ['anguFixedHeaderTable']);
// var app = angular.module('tareas', []);
app.controller('tareasController',['$scope', '$filter', '$location' ,function($scope, $filter, $location) {

	$scope.itemsPagina = "8";
	$scope.paginaActual = 1;
	$scope.campoOrden = "";

  	$scope.tareas = [
      {descripcion: "Tarea número 1 xxxxx xxxxxx xxxxxxxx xxxxx xxxxxxxx", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00001"},
	  {descripcion: "Tarea número 2 xxxxx xxxxxx xxxxxxxx xxxxx xxxxxxxx", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00002"},
	  {descripcion: "Tarea número 3 xxxxx xxxxxx xxxxxxxx xxxxx xxxxxxxx", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00003"},
	  {descripcion: "Tarea número 4 xxxxx xxxxxx xxxxxxxx xxxxx xxxxxxxx", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00004"},
	  {descripcion: "Tarea número 5 xxxxx xxxxxx xxxxxxxx xxxxx xxxxxxxx", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00005"},
	  {descripcion: "Tarea número 6 xxxxx xxxxxx xxxxxxxx xxxxx xxxxxxxx", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00006"},
	  {descripcion: "Tarea número 7 xxxxx xxxxxx xxxxxxxx xxxxx xxxxxxxx", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00007"},
	  {descripcion: "Tarea número 8 xxxxx xxxxxx xxxxxxxx xxxxx xxxxxxxx", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00008"},
	  {descripcion: "Tarea número 9 xxxxx xxxxxx xxxxxxxx xxxxx xxxxxxxx", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00009"},
	  {descripcion: "Tarea número 10 xxxxx xxxxxx xxxxxxxx xxxxx xxxxxxxx", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00010"},
	  {descripcion: "Tarea número 11", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00011"},
	  {descripcion: "Tarea número 12", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00012"},
	  {descripcion: "Tarea número 13", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00013"},
	  {descripcion: "Tarea número 14", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00014"},
	  {descripcion: "Tarea número 15", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00015"},
	  {descripcion: "Tarea número 16", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00016"},
	  {descripcion: "Tarea número 17", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00017"},
	  {descripcion: "Tarea número 18", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00018"},
	  {descripcion: "Tarea número 19", fechaCreacion: "00-00-00 00:00:00", fechaVencimiento: "00-00-00 00:00:00", actividad: "actividad", caso:"00019"},
        ];

	$scope.itemsFiltrados = $scope.tareas;
		  
	$scope.next = function(maximo) {
		if ((($scope.paginaActual)*$scope.itemsPagina) <= maximo)
			$scope.paginaActual = $scope.paginaActual + 1;
	}

	$scope.previous = function() {
		if ($scope.paginaActual -1 > 0)
			$scope.paginaActual = $scope.paginaActual - 1;
	}
	
	$scope.setPagina = function(pagina) {
		$scope.paginaActual = pagina;
	}

	$scope.getNumber = function(total) {
		return new Array(Math.ceil(total/$scope.itemsPagina));   
	}
	
	$scope.setOrden = function(campo) {
		$scope.campoOrden = campo;
		$scope.paginaActual = 1
	}
	
	$scope.getOrden = function () 
	{
		return $scope.campoOrden;
	}
	
	$scope.getItemInicial = function() {
		return ($scope.paginaActual-1)* $scope.itemsPagina
	}

	$scope.getItemFinal = function(maximo) {
		var itemFinal = ($scope.paginaActual-1)* $scope.itemsPagina + $scope.itemsPagina - 1 ;
		if (itemFinal >= maximo -1) 
			itemFinal =  maximo - 1;
		return itemFinal;
		
	}

	$scope.setitemsPagina = function(numero) {
		$scope.paginaActual = 1;
		$scope.itemsPagina = numero;	
	}

	$scope.seleccionarTarea = function(caso) {
		// alert(caso);	
		$location.path("/responderCheckList/" + caso);
	}

}]);

app.filter('startFrom', function() {    
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
} 
);