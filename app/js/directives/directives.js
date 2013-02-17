'use strict';

angular.module('pytimer.directives', [])

    // Simple date selector
    .directive('dateSelector', function () {
        return {
            restrict:'E',
            template: '<a ng-click="changeDate(-1)" class="btn btn-small"><i class="icon-chevron-left"></i></a>'+
                      '<span class="muted date-selector-label">{{selectedDate | date:"yyyy-MM-dd"}}</span>'+
                      '<a ng-click="changeDate(1)" class="btn btn-small"><i class="icon-chevron-right"></i></a>',
            scope:{
                selectedDate:'=',
                onChange:'&'
            },
            controller:function ($scope) {
                $scope.changeDate = function (days) {
                    $scope.selectedDate.setTime($scope.selectedDate.getTime() + (86400000 * days));
                    $scope.onChange();
                }
            }
        };
    })

;
