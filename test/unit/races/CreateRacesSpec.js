'use strict';

var $httpBackend;
var meetingService;
var raceService;
window.kambiNS = {};
window.kambiNS.apiBaseUrl = '';
window.kambiNS.apiPort = '';
window.kambiNS.apiLocation = '';


// helper function to create valid date format to query api
function padDate (value) {
    if (value < 10) {
        return '0' + value;
    }
    return value;
}


describe('CreateRacesCtrl', function() {

    beforeEach(module('racingApp.services'));
    beforeEach(inject(function ($injector) {
        var todaysDate = new Date(Date.now());
        var dateParam = [todaysDate.getFullYear(), padDate(todaysDate.getMonth() + 1), padDate(todaysDate.getDate())].join('-');
        var postData = '';

        meetingService = $injector.get('MeetingService');
        raceService = $injector.get('RaceService');
        $httpBackend = $injector.get('$httpBackend');

        // default response for all tests using controller
        $httpBackend.whenGET(':meetings/upcomingMeetingNames?created=false&date=' + dateParam).respond(function (method, url, data) {
            var responseData = window.mockData.defaultListOfMeetings();
            return [200, responseData];
        });

    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    /*it('should make initial call to fetch all upcoming meetings for todays date (default)', inject(function ($rootScope, $controller) {
        var scope = $rootScope.$new();

        spyOn(meetingService, 'getUpcoming').andCallThrough();

        var ctrl = $controller(CreateRacesCtrl, {
            $scope: scope,
            MeetingService: meetingService
        });

        $httpBackend.flush();

        expect(meetingService.getUpcoming).toHaveBeenCalled();
        expect(scope.upcomingMeetings).toBeDefined();
        expect(scope.upcomingMeetings.length).toBe(14);
    }));


    describe('should ', function () {

        it('get list of selected meetings', inject(function ($rootScope, $controller) {
            var scope = $rootScope.$new();
            var ctrl = $controller(CreateRacesCtrl, {
                $scope: scope
            });

            $httpBackend.flush();

            // simulate user selecting two meetings from list
            var expectedSelectedMeeting1 = scope.upcomingMeetings[5];
            var expectedSelectedMeeting2 = scope.upcomingMeetings[8];
            expectedSelectedMeeting1.selected = true;
            expectedSelectedMeeting2.selected = true;

            var selectedMeetings = scope.selectedMeetings(scope.upcomingMeetings);

            expect(angular.isArray(selectedMeetings)).toBeTruthy();
            expect(selectedMeetings.length).toBe(2);

            expect(selectedMeetings[0]).toEqual(expectedSelectedMeeting1);
            expect(selectedMeetings[1]).toEqual(expectedSelectedMeeting2);

        }));

        it('set successful status on meeting after correct creation', inject(function ($rootScope, $controller) {
            var scope = $rootScope.$new();
            var selectedMeeting;

            // setup response for this specific POST
            $httpBackend.whenPOST(':meetings').respond(function (method, url, data, headers) {
                var responseData = mockData.createRacesSuccess(selectedMeeting.id);
                return [200, responseData];
            });

            spyOn(raceService, 'create').andCallThrough();
            var ctrl = $controller(CreateRacesCtrl, {
                $scope: scope,
                RaceService: raceService
            });

            $httpBackend.flush();

            selectedMeeting = scope.upcomingMeetings[5];
            selectedMeeting.selected = true;

            // meeting is selected but has no status
            expect(selectedMeeting.status).toBeUndefined();

            scope.createRaces(scope.upcomingMeetings);
            $httpBackend.flush();

            expect(raceService.create).toHaveBeenCalled();
            expect(selectedMeeting.status).toEqual('success');

        }));

        it('set failed status on meeting after failed creation', inject(function ($rootScope, $controller) {
            var scope = $rootScope.$new();
            var selectedMeeting;

            // setup response for this specific POST
            $httpBackend.whenPOST(':meetings').respond(function (method, url, data, headers) {
                var responseData = mockData.createRacesFail(selectedMeeting.id);
                return [409, responseData];
            });

            spyOn(raceService, 'create').andCallThrough();
            var ctrl = $controller(CreateRacesCtrl, {
                $scope: scope,
                RaceService: raceService
            });

            $httpBackend.flush();

            selectedMeeting = scope.upcomingMeetings[5];
            selectedMeeting.selected = true;

            // meeting is selected but has no status
            expect(selectedMeeting.status).toBeUndefined();

            scope.createRaces(scope.upcomingMeetings);
            $httpBackend.flush();

            expect(raceService.create).toHaveBeenCalled();
            expect(selectedMeeting.status).toEqual('error');
        }));

        it('handle both success/fail status on meetings in creation response', inject(function ($rootScope, $controller) {
            var scope = $rootScope.$new();
            var selectedMeetingToSucceed;
            var selectedMeetingToFail;

            // setup response for this specific POST
            $httpBackend.whenPOST(':meetings').respond(function (method, url, data, headers) {
                var responseData = mockData.createRacesOneFailOneSuccess( selectedMeetingToFail.id, selectedMeetingToSucceed.id);
                return [409, responseData];
            });

            spyOn(raceService, 'create').andCallThrough();
            var ctrl = $controller(CreateRacesCtrl, {
                $scope: scope,
                RaceService: raceService
            });

            $httpBackend.flush();

            selectedMeetingToFail = scope.upcomingMeetings[5];
            selectedMeetingToFail.selected = true;

            selectedMeetingToSucceed = scope.upcomingMeetings[7];
            selectedMeetingToSucceed.selected = true;

            // meeting is selected but has no status
            expect(selectedMeetingToFail.status).toBeUndefined();
            expect(selectedMeetingToSucceed.status).toBeUndefined();

            scope.createRaces(scope.upcomingMeetings);
            $httpBackend.flush();

            expect(raceService.create).toHaveBeenCalled();
            expect(selectedMeetingToSucceed.status).toEqual('success');
            expect(selectedMeetingToFail.status).toEqual('error');
        }));
    });*/

});
