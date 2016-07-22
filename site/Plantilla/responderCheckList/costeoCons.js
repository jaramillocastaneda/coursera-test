app.controller('costeoConsController',['$scope', '$log', function($scope, $log) {
    
    $scope.primerItem = 1;
    $scope.meses = '18';
    $scope.costeos = [{fase: "",
                        meses: [], 
                        perfiles:[{rol:'', horas:0}],
                        mostrar: false
                     }];
    
    $scope.fases = [{codigo:"1",descripcion: "Analisis"}, {codigo:"2",descripcion: "Diseño"}, 
                    {codigo:"3",descripcion: "Desarrollo"},{codigo:"4",descripcion: "Pruebas"}];     
    
    $scope.perfiles =  [{codigo:"1",descripcion: "Junior"}, {codigo:"2",descripcion: "Especialista"}, 
                    {codigo:"3",descripcion: "Senior"}];
    
    $scope.addCosteo = function() {
        $scope.costeos.push({fase: "" ,
                        meses: [], 
                        perfiles: [{rol:'', horas:0}],
                        mostrar:false
                    }) 
    }
    
    $scope.removeCosteo = function(index) {
         $scope.costeos.splice(index, 1);
    };
    
    $scope.totalCosteo = function(index) {
         total = 0;
         $scope.costeos[index].perfiles.forEach(function(element) {
             total = total + element.horas;
         }, this); 
         return total;
    };
    
    $scope.addPerfil = function(perfil) {
        perfil.push({rol:'', horas:0});
    }
    
    $scope.removePerfil = function(perfil, index) {
        perfil.splice(index, 1);
    }
    
      
    $scope.getNumber = function() {
        if ($scope.meses <= 18) {
            total = $scope.meses;
        } 
        else {
            total = 18;
        }
		return new Array(Math.ceil(total));   
	}
   
   
    $scope.moverRight = function(fila) {
        if ($scope.primerItem + 17 < $scope.meses) { 
            $scope.primerItem = $scope.primerItem + 1;
        }
	} 

    $scope.moverLeft = function(fila) {
        if ($scope.primerItem > 1) { 
            $scope.primerItem = $scope.primerItem - 1;
        }
	} 
    
    $scope.corregirPosicion = function() {
        // $log.info($scope.meses)
        if ($scope.primerItem + 17 > $scope.meses) {
            $scope.primerItem=$scope.meses-17
        }
	} 
    
  }
]);