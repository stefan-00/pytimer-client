'use strict';

var includes = ['pytimer.filters', 'pytimer.services', 'pytimer.directives'];


// Declare app level module which depends on filters, and services
angular.module('pytimer', includes)

  .config(['$routeProvider', function($routeProvider) {

        var baseUrl = 'partials/';

//        $routeProvider.when('/races/create/:sport', {
//            templateUrl: baseUrl + 'CreateRaces.html',
//            controller: 'CreateRacesCtrl'
//        });

        $routeProvider.otherwise({
            templateUrl: baseUrl + 'home.html'
//            controller: 'HomeCntrl'
        });
    }])
;
