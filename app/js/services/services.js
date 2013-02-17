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

        .factory('ApplicationParametersService', function ($window) {
            return {
                getClientRoot: function () {
                    return $window.kambiNS.clientRoot;
                },
                getBaseUrl: function () {
                    return $window.kambiNS.apiBaseUrl + ':' + $window.kambiNS.apiPort + "/";
                },
                getApiUrl: function () {
                    return $window.kambiNS.apiBaseUrl + ':' + $window.kambiNS.apiPort + $window.kambiNS.apiLocation;
                }
            }
        })

        .factory('PytimerService', function ($http, ApplicationParametersService) {
            return {

                update: function (id, data, success, error) {
                    return $http.post(ApplicationParametersService.getApiUrl() + 'race/' + id + '/updateOdds', data, {
                        withCredentials: true
                    }).success(success).error(error);
                }

            }
        })
;
