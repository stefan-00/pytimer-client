'use strict';

/* Services */

angular
    .module('pytimer.services', ['ngResource'])
        .factory('LogService', function ($rootScope) {
            return {
                logError: function (data, errorType) {
                    $rootScope.$broadcast('event-log-error', data, errorType);
                },
                log: function (message) {
                    $rootScope.$broadcast('event-log', message);
                }
            }
        })

        .factory('ApplicationParametersService', function () {
            return {
                getApiUrl: function () {
                    return 'http://bubba:8181/';
                }
            }
        })

        .factory('PytimerService', function ($http, ApplicationParametersService, $resource) {

        var targets = $resource('http://bubba\\:8181/targets', {callback: 'JSON_CALLBACK'},
            {get:{method:'JSONP', isArray: true}});
         return {

                getTargets: function () {
                    return targets.get();
                    //return $http.get(ApplicationParametersService.getApiUrl() + 'targets');
                }

            }
        })
;
