(function(global) {
  global.mockData = global.mockData || {};

  global.mockData.raceWithInvalidFeedOdds = function (raceId) {
    return {
        "id": raceId,
        "startTime": "2013-02-11T18:20:00.000+01:00",
        "status": "OPEN",
        "distance": "1200m",
        "number": 9,
        "name": "Natural Health &amp; Healing Centre",
        "equipages": [{
            "id": 3719,
            "number": 1,
            "runnerName": "SAND DUNE",
            "driverName": "GRANT BUCKLEY",
            "driverWeight": 60.0,
            "sbOdds": [{
                "odds": 1000,
                "type": "WIN",
                "source": "DEFAULT",
                "version": 1
            }, {
                "odds": 1000,
                "type": "SP",
                "source": "DEFAULT",
                "version": 1
            }],
            "feedOdds": [],
            "version": 1
        }, {
            "id": 3720,
            "number": 2,
            "runnerName": "STRATUMSPHERE",
            "driverName": "MS KRISTEN SMART (A2.0)",
            "driverWeight": 59.5,
            "sbOdds": [{
                "odds": 1000,
                "type": "WIN",
                "source": "DEFAULT",
                "version": 1
            }, {
                "odds": 1000,
                "type": "SP",
                "source": "DEFAULT",
                "version": 1
            }],
            "feedOdds": [{
                "odds": 1000,
                "diff": 0,
                "type": "WIN",
                "source": "DEFAULT",
                "version": 1
            }],
            "version": 1
        }],
        "version": 1
    }
  };

  global.mockData.raceMessageWithValidData = function (raceId) {
    return {
        "raceId": raceId,
        "updatedOdds": [{
            "diff": 0,
            "equipageId": 3719,
            "feedOdds": 1200,
            "feedOddsVersion": 1,
            "oddsType": "WIN",
            "sbOdds": 1100,
            "sbOddsVersion": 2,
            "source": "DEFAULT"
        }, {
            "diff": 0,
            "equipageId": 5176,
            "feedOdds": 1200,
            "feedOddsVersion": 1,
            "oddsType": "WIN",
            "sbOdds": 1200,
            "sbOddsVersion": 2,
            "source": "DEFAULT"
        }]
    }
  };

})(window);