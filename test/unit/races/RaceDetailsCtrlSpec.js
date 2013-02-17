describe('RaceDetailsCtrl', function(){
    var scope = {};
    var updateData;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        scope.race = {};
        var id = 2;

        var RaceService = {
            getCreated: function(params, success) {
                success(window.mockData.raceWithInvalidFeedOdds(scope.id));
            },
            update: function(id, data, success) {
                updateData = data;
                success(updateData);
            }
        }

        new RaceDetailsCtrl(
            scope,
            RaceService,
            {id: id, sport:"Gallops"},
            new EquipageUtil(),
            new DateUtil(),
            new OddsValidatorUtil(),
            new FormatUtil()
        );
    }));

    it('should have correct data', inject(function ($rootScope, $controller) {
        expect(scope.equipages.length).toBe(2);
        expect(scope.equipages[0].sbOdds[0].odds).toBe(1000);
    }));

    it('should build empty odds object', inject(function ($rootScope, $controller) {
        var equipage = { feedOdds: [] }
        var sbOdds = scope.buildEmptyWinOddsObject("feedOdds", equipage);
        expect(equipage.feedOdds[0].odds).toBe(0);
    }));


    it('should load equipage with correct odds', inject(function ($rootScope, $controller) {
        var equipage = scope.getEquipageById(3719);
        expect(scope.getWinOddsObject("sbOdds", equipage).odds).toBe(1000);
        expect(scope.getWinOddsObject("feedOdds", equipage).odds).toBe(0);
    }));

    it('should update odds from message', inject(function ($rootScope, $controller) {
        var newMessageData = window.mockData.raceMessageWithValidData(scope.id);
        scope.updateEquipagesWithData(newMessageData);
        expect(scope.equipages[0].sbOdds[0].odds).toBe(1100);
        expect(scope.equipages[0].feedOdds[0].odds).toBe(1200);
    }));

    it('should not update odds from message when same version', inject(function ($rootScope, $controller) {
        var newMessageData = window.mockData.raceMessageWithValidData(scope.id);

        newMessageData.updatedOdds[0].feedOddsVersion = 0;
        newMessageData.updatedOdds[0].sbOddsVersion = 1;

        scope.updateEquipagesWithData(newMessageData);
        expect(scope.equipages[0].sbOdds[0].odds).toBe(1000);
    }));

    it('should update odds from button', inject(function ($rootScope, $controller) {
        scope.updateOdds(scope.equipages);
        expect(updateData[1].feedOdds).toBe(1000);
        expect(updateData[1].sbOdds).toBeUndefined();
        expect(updateData[0].feedOdds).toBeUndefined();
        expect(updateData[0].sbOdds).toBe(1000);
    }));

     it('should calculate correct payback', inject(function ($rootScope, $controller) {
        var equipages = [{
                sbOdds: [{
                    type: "WIN",
                    odds: 2000
                }]
            }, {
                sbOdds: [{
                    type: "WIN",
                    odds: 3000
                }]
            }, {
                sbOdds: [{
                    type: "WIN",
                    odds: 4000
                }]
            }
        ];
        var payback = scope.calculatePayback("sbOdds", equipages);
        console.log("payback ", payback);
        expect(payback).toBe(92308);
    }));
});