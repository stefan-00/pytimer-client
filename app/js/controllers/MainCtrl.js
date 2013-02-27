'use strict';

function MainCtrl($scope) {

    $scope.$on('error', function() {
        $scope.error = 'Error';
    })

}
MainCtrl.$inject = ['$scope'];

