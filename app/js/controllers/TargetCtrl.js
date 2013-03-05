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

    $scope.types = [
        {id:'timer', name:'Timer'},
        {id:'sun', name:'Sun'}
    ];

    $scope.onoff = [{id:'on', name:'On'}, {id:'off', name:'Off'}];

    $scope.sunEvents = [pair('sunset', 'Sunset'), pair('sunrise', 'Sunrise')];

    function pair(id, name) {
        return {id: id, name: name};
    }
}
TargetCtrl.$inject = ['$scope', 'PytimerService'];

