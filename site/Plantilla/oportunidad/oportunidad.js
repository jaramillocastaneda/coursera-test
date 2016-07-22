// var app = angular.module('tareas', ['anguFixedHeaderTable']);
// var app = angular.module('tareas', []);
app.controller('oportunidadController',['$scope','$timeout', function($scope, $timeout) {

  $scope.errorMessage ="";

	$scope.ciudades = [
      {codigo:1, nombre:'MEDELLIN'},
      {codigo:2, nombre:'CALI'},
      {codigo:3, nombre:'BOGOTA'},
      {codigo:4, nombre:'BARRANQUILLA'},
      {codigo:-1, nombre:' '}
  ];
  
	$scope.clientes = [
      {codigo:9, nombre:'A TODA HORA'},
      {codigo:643, nombre:'ABB TECHNOLOGY'},
      {codigo:283, nombre:'ACCION FIDUCIARIA'},
      {codigo:390, nombre:'ACUEDUCTO Y ALCANTARILLADO DE POPAYAN'},
      {codigo:151, nombre:'AGECOLDEX'},
      {codigo:429, nombre:'ALCALDIA DE LA CEJA'},
      {codigo:1217, nombre:'Aldo Conti'},
      {codigo:133, nombre:'ALDOR'},
      {codigo:289, nombre:'ALEMAUTOS PANAMA'},
      {codigo:34, nombre:'ALIANZA FIDUCIARIA'},
      {codigo:504, nombre:'ALIANZA GRAFICA'},
      {codigo:1218, nombre:'Aliat Universidades'},
      {codigo:804, nombre:'ALLIANCE ENTERPRISE S.A.S.'},
      {codigo:85, nombre:'ALLUS GROUP (MULTIENLACE) '},
      {codigo:77, nombre:'ALMACENES CORONA'},
      {codigo:70, nombre:'ALMACENES EXITO S.A'},
      {codigo:94, nombre:'ALMACENES FLAMINGO'},
      {codigo:1219, nombre:'Almacenes Principado'},
      {codigo:39, nombre:'ALPINA'},
      {codigo:1220, nombre:'Altesa'},
      {codigo:543, nombre:'ALUMINA'},
      {codigo:183, nombre:'AMERIKA TI'},
      {codigo:1221, nombre:'AMPERSAND'},
      {codigo:1324, nombre:'ANAHUAC DE SUR'},
      {codigo:1223, nombre:'Apiassa'},
      {codigo:1300, nombre:'Arista'},
      {codigo:883, nombre:'AROCA'},
      {codigo:1222, nombre:'Arteli'},
      {codigo:1224, nombre:'ASSURANT'},
      {codigo:1225, nombre:'AT&T'},
      {codigo:10, nombre:'AUTECO'},
      {codigo:663, nombre:'AVANTEL '},
      {codigo:783, nombre:'AVANXO'},
      {codigo:167, nombre:'AVIANCA'},
      {codigo:4, nombre:'AXA'},
      {codigo:1226, nombre:'Axa reinventando los seguros'},
      {codigo:40, nombre:'AXALTA COATING SYSTEMS'},
      {codigo:1227, nombre:'Axalta Coating Systems'},
      {codigo:37, nombre:'BANCAMIA'},
      {codigo:1228, nombre:'Banco Actinver'},
      {codigo:15, nombre:'BANCO AV VILLAS'},
      {codigo:1229, nombre:'Banco Azteca'},
      {codigo:19, nombre:'BANCO DE BOGOTA'},
      {codigo:113, nombre:'BANCO DE OCCIDENTE'},
      {codigo:1231, nombre:'Banco Interacciones'},
      {codigo:1233, nombre:'Banco Multiva'},
      {codigo:20, nombre:'BANCO POPULAR'},
      {codigo:142, nombre:'BANCO WWB'},
      {codigo:1235, nombre:'BancoCoppel'},
      {codigo:67, nombre:'BANCOLOMBIA'},
      {codigo:123, nombre:'BANCOOMEVA'},
      {codigo:81, nombre:'BANISTMO S.A'},
      {codigo:1230, nombre:'Banorte-Ixe'},
      {codigo:443, nombre:'BATERIFONDO'},
      {codigo:1236, nombre:'Baxter'},
      {codigo:1237, nombre:'BBVA BANCOMER'},
      {codigo:12, nombre:'BCSC'},
      {codigo:91, nombre:'BENEDAN'},
      {codigo:1238, nombre:'Best Buy'},
      {codigo:1239, nombre:'Bestel'},
      {codigo:36, nombre:'BRINKS'},
      {codigo:87, nombre:'BTGPACTUAL'},
      {codigo:426, nombre:'BYTESW'},
      {codigo:93, nombre:'CADENA S.A.'},
      {codigo:250, nombre:'CAFAM'},
      {codigo:153, nombre:'CAMARA DE COMERCIO DE CALI'},
      {codigo:52, nombre:'CAMARA DE RIESGO DE CONTRAPARTE'},
      {codigo:1240, nombre:'Cargill'},
      {codigo:152, nombre:'CARTON DE COLOMBIA'},
      {codigo:97, nombre:'CEMENTOS ARGOS S.A.'},
      {codigo:1243, nombre:'Cemex'},
      {codigo:139, nombre:'CENTELSA'},
      {codigo:146, nombre:'CENTRO MEDICO IMBANACO'},
      {codigo:130, nombre:'CERCA TECNOLOGY'},
      {codigo:1244, nombre:'Charly'},
      {codigo:110, nombre:'CHEC'},
      {codigo:903, nombre:'CHOUCAIR'},
      {codigo:158, nombre:'CIAMSA'},
      {codigo:103, nombre:'CLINICA VIDA '},
      {codigo:1245, nombre:'CMT'},
      {codigo:1162, nombre:'COCA COLA'},
      {codigo:149, nombre:'CODESA'},
      {codigo:626, nombre:'COEM'},
      {codigo:170, nombre:'COEXITO'},
      {codigo:135, nombre:'COLGATE'},
      {codigo:5, nombre:'COLMENA SEGUROS VIDA Y ARP'},
      {codigo:2, nombre:'COLOMBIA MOVIL S.A ESP - TIGO'},
      {codigo:134, nombre:'COLOMBINA'},
      {codigo:750, nombre:'COLSOF S.A'},
      {codigo:367, nombre:'COLTABACO'},
      {codigo:463, nombre:'COLUMBUS '},
      {codigo:8, nombre:'COMCEL'},
      {codigo:1246, nombre:'Comercial Mexicana'},
      {codigo:128, nombre:'COMFANDI - CAJA DE COMPENSACION'},
      {codigo:76, nombre:'COMFENALCO ANTIOQUIA -STS'},
      {codigo:127, nombre:'COMFENALCO TOLIMA'},
      {codigo:160, nombre:'COMFENALCO VALLE DELAGENTE'},
      {codigo:171, nombre:'COMPANIA ENERGETICA DE OCCIDENTE'},
      {codigo:45, nombre:'COMPUREDES'},
      {codigo:42, nombre:'COMWARE'},
      {codigo:723, nombre:'CONFA CALDAS'},
      {codigo:843, nombre:'CONFIAR'},
      {codigo:106, nombre:'CONGREGACION MARIANA'},
      {codigo:763, nombre:'CONSORCIO CANALES NACIONALES PRIVADOS - CCNP'},
      {codigo:1271, nombre:'Convermex'},
      {codigo:1247, nombre:'Converse'},
      {codigo:726, nombre:'COOMEVA - COOPERATIVA MEDICA DEL VALLE Y DE PROFESIONALES DE COLOMBIA'},
      {codigo:116, nombre:'COOMEVA MEDICINA PREPAGADA S.A.'},
      {codigo:109, nombre:'CORBETA'},
      {codigo:78, nombre:'CORONA INDUSTRIAL S.A.S'},
      {codigo:38, nombre:'CORPBANCA'},
      {codigo:57, nombre:'CORREDOR EMPRESARIAL S.A.'},
      {codigo:14, nombre:'CORREDORES ASOCIADOS'},
      {codigo:48, nombre:'COVINOC'},
      {codigo:23, nombre:'CREDIBANCO'},
      {codigo:35, nombre:'CREDIFINANCIERA'},
      {codigo:111, nombre:'CREDITOS ORBE'},
      {codigo:1248, nombre:'Crepes & Waffles'},
      {codigo:1250, nombre:'Danone'},
      {codigo:96, nombre:'DATACENTER'},
      {codigo:11, nombre:'DAVIVIENDA'},
      {codigo:1251, nombre:'DeAcero'},
      {codigo:102, nombre:'DISLICORES'},
      {codigo:1253, nombre:'Dormimundo'},
      {codigo:1254, nombre:'EDA CONSULTORES'},
      {codigo:1255, nombre:'EDENRED'},
      {codigo:1256, nombre:'EDX Signature'},
      {codigo:132, nombre:'EFIGAS'},
      {codigo:1270, nombre:'El Buen Bife'},
      {codigo:89, nombre:'EL COLOMBIANO'},
      {codigo:126, nombre:'EMCALI'},
      {codigo:1257, nombre:'Empacadora Murgati'},
      {codigo:403, nombre:'ENERGIFONDO'},
      {codigo:98, nombre:'ENLACE OPERATIVO'},
      {codigo:75, nombre:'ENLACE TECNOLOGICO DE NEGOCIOS'},
      {codigo:154, nombre:'EPSA'},
      {codigo:324, nombre:'ESTIBOL S.A.S.'},
      {codigo:1, nombre:'ETB'},
      {codigo:92, nombre:'FABRICATO'},
      {codigo:125, nombre:'FANALCA'},
      {codigo:1259, nombre:'Farmacias el ahorro'},
      {codigo:31, nombre:'FASECOLDA'},
      {codigo:1260, nombre:'FEMSA'},
      {codigo:144, nombre:'FENALCO'},
      {codigo:1261, nombre:'FESTO'},
      {codigo:205, nombre:'FIDUBOGOTA'},
      {codigo:-1, nombre:' '}
	];
	
	$scope.oportunidad = {
		cliente: 0,
    otroCliente:'',
    ciudad: 0,
    otraCiudad: '',
    contacto: '',
    email: '',
    telefono: '',
    cargo: '',
    comentario: ''
	};
	
  $scope.clienteSeleccionado = {codigo:-1, nombre:' '};
  $scope.ciudadSeleccionada = {codigo:-1, nombre:' '};
  $scope.otroCliente = false;
  $scope.otraCiudad = false;
  $scope.submitted = false;
  
  $scope.limpiarCliente = function(){
    $scope.clienteSeleccionado = {codigo:-1, nombre:' '};
    $scope.oportunidad.otroCliente = ""; 
  }
  
  $scope.limpiarCiudad = function(){
    $scope.ciudadSeleccionada = {codigo:-1, nombre:' '};   
    $scope.oportunidad.otraCiudad = ""; 
  }
  
  $scope.clienteValido = function(){
    if (($scope.clienteSeleccionado.codigo==-1) && ($scope.oportunidad.otroCliente == "")) {
       return  false;
    }  
    else {
       return true;
    }
  }
  
   $scope.ciudadValida = function(){
    if (($scope.ciudadSeleccionada.codigo==-1) && ($scope.oportunidad.otraCiudad == "")) {
       return  false;
    }  
    else {
       return true;
    }
  }
 
	$scope.enviar = function(isValid) {
    $scope.submitted = true;
  
		if (!isValid || !$scope.clienteValido() || !$scope.ciudadValida()) {
        $scope.openMensaje ('Error','Debe ingresar toda la información obligatoria', true);
          return;
    };      
   $scope.openProcesamiento("Enviando Información...");
      $timeout(function(){
          $scope.ventanaProcesamiento.close();
        }, 2500);
	};

} ]
);