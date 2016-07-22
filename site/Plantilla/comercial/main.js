var app = angular.module('comercial', ['ngRoute', 'nya.bootstrap.select', 'ngAnimate', 'ui.bootstrap']);


app.controller('comercialController',['$scope', '$location', '$uibModal', '$timeout',
			function($scope, $location, $uibModal, $timeout) 
{

// Manejo de los campos tipo fecha
	$scope.calendario = false;
	
	$scope.dateOptions = {
		dateDisabled: '',
		formatYear: 'yy',
		maxDate: new Date(2020, 5, 22),
		minDate: new Date(),
		startingDay: 1
	};
	
	 $scope.inlineOptions = {
		minDate: new Date(),
		showWeeks: true
	};

  	
//////////////////////
	$scope.usuario = "Pedro Perez"

// Menu
	$scope.menu = [
		{codigo: "MAESTR", descripcion: "Maestros", url:"",
			detalle:[{descripcion:"maestro1"},
					 {descripcion:"maestro2"},
					 {descripcion:"maestro3"}
					]},
		{codigo: "REGOPT", descripcion: "Registrar Oportunidad", url:"#oportunidad", detalle:[]},
		{codigo: "SEGUIM", descripcion: "Seguimiento", url:"#seguimiento", detalle: []},
		{codigo: "REPORT", descripcion: "Reportes", url:"",
			 detalle: [{descripcion:"Reporte 1"},
					 {descripcion:"Reporte 2"}]
			}
	];

// Función Cerrar cualquier opción y regresar al home
	
	$scope.cerrar = function() {
		$location.path("#");
	}

// Función para abrir la ventana de procesamiento
	$scope.ventanaProcesamiento;
	$scope.openProcesamiento = function (mensaje) {
		$scope.mensajeProcesamiento = mensaje;
		$scope.ventanaProcesamiento = $uibModal.open({
			animation: true,
			templateUrl: '../comercial/procesamiento.html?bust=' + Math.random().toString(36).slice(2), // el parámetro es solo truco para que no tome el cache
			controller: 'modalController',
			backdrop: 'static',
			keyboard: false,
			scope: $scope,
			size: '',
			resolve: {
			}
		})
	};
	
// Función para abrir la ventana de errores
	$scope.ventanaMensaje;
	$scope.mensaje = '';
	$scope.tituloMensaje = '';
	$scope.openMensaje = function (titulo, mensaje, timeout) {
		$scope.mensaje = mensaje;
		$scope.tituloMensaje = titulo;
		$scope.ventanaMensaje = $uibModal.open({
				animation: true,
				templateUrl: '../comercial/Error.html?bust=' + Math.random().toString(36).slice(2), // el parámetro es solo truco para que no tome el cache
				controller: 'modalController',
				backdrop: true,
				keyboard: true,
				scope: $scope,
				size: '',
				resolve: {
				}
			});
	
	if (timeout) {
		$timeout(function(){
		$scope.ventanaMensaje.close();
		}, 2500);
	}


	
	};
    
}]);

app.controller('modalController', function($scope) {
  
 $scope.close = function () {
    $uibModalInstance.dismiss();
  };

});
	

app.config(function($routeProvider) {
    $routeProvider
    .when("/oportunidad", {
		controller: "oportunidadController",
        templateUrl : "/oportunidad/oportunidad.html"
    })
  .when("/calificar/:caso", {
		controller: "calificarController",
        templateUrl : "/calificar/calificar.html"
    })
    .when("/seguimiento", {
		controller: "seguimientoController",
        templateUrl : "/seguimiento/seguimiento.html"
    })
	.when("/responderCheckList/:caso", {
		controller: "responderCLController",
        templateUrl : "/responderCheckList/responderCheckList.html"
    })
    .otherwise({
		controller: "tareasController",
        templateUrl : "/tareas/tareas.html"
    });
});


