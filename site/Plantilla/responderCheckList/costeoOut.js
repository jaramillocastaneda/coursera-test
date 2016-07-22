app.controller('costeoOutController',['$scope', '$log', function($scope, $log) {
    
    $scope.meses = '12';
    $scope.primerItem = 1;
    $scope.copy = false;
    $scope.valorCopia = 0;
    $scope.costeo = [{perfil: "",
                        horas: []}];
    
    $scope.perfiles = [{codigo:"1",descripcion: "Junio"}, {codigo:"2",descripcion: "Especialista"}, {codigo:"1",descripcion: "Senior"}]
    $scope.invalidTipoIdentificacion = false;
    
    $scope.addCosteo = function() {
        $scope.costeo.splice(0,0,{perfil: "" ,
                        horas: []}) 
    }
    
    $scope.removeCosteo = function(index) {
         $scope.costeo.splice(index, 1);
      };
      
    $scope.getNumber = function() {
        if ($scope.meses <= 12) {
            total = $scope.meses;
        } 
        else {
            total = 12;
        }
		return new Array(Math.ceil(total));   
	}
   
   
    $scope.moverRight = function() {
        if ($scope.primerItem + 11 < $scope.meses) { 
            $scope.primerItem = $scope.primerItem + 1;
        }
	} 

    $scope.moverLeft = function() {
        if ($scope.primerItem > 1) { 
            $scope.primerItem = $scope.primerItem - 1;
        }
	} 
    
   $scope.moverLeftPage = function(fila) {
        if ($scope.primerItem >= 13) { 
            $scope.primerItem = $scope.primerItem - 12;
        }
        else {
            $scope.primerItem = 1;
        }
	} 

    $scope.moverRightPage = function() {
        if ($scope.primerItem + 23 < $scope.meses) { 
            $scope.primerItem = $scope.primerItem + 12;
        }
        else {
            $scope.primerItem = $scope.meses - 11;
        }
	} 
    
    $scope.corregirPosicion = function() {
        // $log.info($scope.meses)
        if ($scope.primerItem + 11 > $scope.meses) {
            $scope.primerItem=$scope.meses-11
        }
	} 
    
    
    $scope.changeCopy = function(valor, f, c) {
        $scope.copy = valor;
        if (valor) {
            $scope.valorCopia = $scope.costeo[f].horas[c]
        }
    }


    $scope.change = function(f, c) {
        // $log.log($scope.copy);
		if ($scope.copy) {
            $scope.costeo[f].horas[c] = $scope.valorCopia;
        }   
	}
    
    $scope.totalCosteo = function(index) {
         total = 0;
         $scope.costeo[index].horas.forEach(function(element) {
             if (!isNaN(parseInt(element))) {
                total = total + parseInt(element);
             }
         }, this); 
         return total;
    };

}
]);