var myModule = angular.module('myModule', [])
    .controller('myController', function($scope){
        
        $scope.title = "Employee";

        var employee = {
            firstName : "Atur",
            middleName : "",
            lastName : "Aritonang"
        };

        $scope.employee = employee;
    });