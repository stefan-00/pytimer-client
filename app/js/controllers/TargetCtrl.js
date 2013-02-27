'use strict';

function TargetCtrl($scope, $PytimerService) {

    var response = $PytimerService.getTargets();
    console.log(response);
    $scope.targets = response;
//        .success(function (data) {
//            $scope.targets = data;
//        })
//        .error(function (data) {
//            $scope.$emit('error', 'Error getting targets.', data);
//        })

}
TargetCtrl.$inject = ['$scope', 'PytimerService'];

