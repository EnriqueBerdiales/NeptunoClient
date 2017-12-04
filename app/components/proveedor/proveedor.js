var app = angular.module('neptunoApp');
app.controller('CtrlListaProveedor', ['$scope', '$http', function ($scope, $http) {
     $scope.listaProveedor = [];
         var promise = $http.post('http://192.168.43.73:8081/TiendaNeptuno/listaProveedores', []);
         promise.then(function(data, status, headers, config) {
         $scope.listaProveedor = data.data;
         }), function(error) {
         alert( "Error: " + JSON.stringify({error: error}));
         };
}]);

app.controller('CtrlGuardarProveedor', ['$scope', '$http','$routeParams', function ($scope, $http, $routeParams) {
    
    var proveedor;
    var promise = $http.get('http://192.168.43.73:8081/TiendaNeptuno/verProveedor/'+$routeParams.id);
    
    promise.then(function(data, status, headers, config) {
        proveedor = data.data;
        $scope.nombreProveedor=proveedor.nombreProveedor;
        $scope.ciudadProveedor=proveedor.ciudad;
        $scope.idProveedor=proveedor.idProveedor;
        $scope.codigoPostalProveedor=proveedor.codigoPostal;
        $scope.paisProveedor=proveedor.pais;
        $scope.telefonoProveedor=proveedor.telefono;
    }), function(error) {
        alert( "Error: " + JSON.stringify({error: error}));
    };

    $scope.guardarProveedor = function () {
        var promise = $http.get('http://192.168.43.73:8081/TiendaNeptuno/updateProveedor/'+proveedor.idProveedor);
        promise.then(function (data, status, headers, config) {   
        }), function (error) {
            alert("Error: " + JSON.stringify({ error: error }));
        };
    };
}]);