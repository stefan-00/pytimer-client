'use strict';

describe('OddsCtrl', function(){
    var scope = {};

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      scope.odds = 1500;
      new OddsCtrl(scope, new OddsValidatorUtil());
    }));

    it('should increase correctly', function () {
        scope.increaseOdds();
        scope.increaseOdds();
        expect(scope.odds).toEqual(1700);
    });

    it('should increase correctly', function () {
        scope.decreaseOdds();
        scope.decreaseOdds();
        expect(scope.odds).toEqual(1300);
    });

    it('should validate odds', function () {
        expect(scope.validateOdds(1000)).toBeTruthy();
        expect(scope.validateOdds('')).toBeTruthy();
        expect(scope.validateOdds('n')).toBeTruthy();

        expect(scope.validateOdds('N')).toBeFalsy();
        expect(scope.validateOdds('abc')).toBeFalsy();
        expect(scope.validateOdds(-1)).toBeFalsy();
        expect(scope.validateOdds(999)).toBeFalsy();
    });
});