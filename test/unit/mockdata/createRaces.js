(function(global) {
    global.mockData = global.mockData || {};

    global.mockData.createRacesSuccess = function (idOfRaceToSucceed) {
      return  [{
                "meetingId": idOfRaceToSucceed,
                "createRaceResultDtos":
                  [{
                      "raceId": 111,
                      "errorCode": null
                  },
                  {
                      "raceId": 222,
                      "errorCode": null
                  },
                  {
                      "raceId": 333,
                      "errorCode": null
                  }]
              }];
    };

    global.mockData.createRacesFail = function (idOfRaceToFail) {
      return  [{
                "meetingId": idOfRaceToFail,
                "createRaceResultDtos":
                  [{
                      "raceId": 111,
                      "errorCode": 'EVENT_GROUP_DOES_NOT_EXIST'
                  },
                  {
                      "raceId": 222,
                      "errorCode": null
                  },
                  {
                      "raceId": 333,
                      "errorCode": null
                  }]
              }];
    };

    global.mockData.createRacesOneFailOneSuccess = function (idOfRaceToFail, idOfRaceToSucceed) {
      return  [{
                "meetingId": idOfRaceToFail,
                "createRaceResultDtos":
                  [{
                      "raceId": 111,
                      "errorCode": 'EVENT_GROUP_DOES_NOT_EXIST'
                  },
                  {
                      "raceId": 222,
                      "errorCode": 'EVENT_GROUP_DOES_NOT_EXIST'
                  },
                  {
                      "raceId": 333,
                      "errorCode": 'EVENT_GROUP_DOES_NOT_EXIST'
                  }]
              },{
                "meetingId": idOfRaceToSucceed,
                "createRaceResultDtos":
                  [{
                      "raceId": 444,
                      "errorCode": null
                  },
                  {
                      "raceId": 555,
                      "errorCode": null
                  },
                  {
                      "raceId": 666,
                      "errorCode": null
                  }]
              }];
    };

    global.mockData.defaultListOfMeetings = function () {
        return [
          {
            "id": 88,
            "name": "Ballarat",
            "sport": "GREYHOUND",
            "meetingCreated": false,
            "version": 1
          },
          {
            "id": 80,
            "name": "Charlton",
            "sport": "HARNESS",
            "meetingCreated": false,
            "version": 1
          },
          {
            "id": 90,
            "name": "Dapto",
            "sport": "GREYHOUND",
            "meetingCreated": false,
            "version": 1
          },
          {
            "id": 81,
            "name": "Geelong",
            "sport": "HARNESS",
            "meetingCreated": false,
            "version": 1
          },
          {
            "id": 72,
            "name": "Happy Valley - HK",
            "sport": "GALLOPS",
            "meetingCreated": false,
            "version": 1
          },
          {
            "id": 91,
            "name": "Hatrick",
            "sport": "GREYHOUND",
            "meetingCreated": false,
            "version": 1
          },
          {
            "id": 92,
            "name": "Ipswich",
            "sport": "GREYHOUND",
            "meetingCreated": false,
            "version": 1
          },
          {
            "id": 73,
            "name": "Kembla Grange",
            "sport": "GALLOPS",
            "meetingCreated": false,
            "version": 1
          },
          {
            "id": 74,
            "name": "Kenilworth - SAF",
            "sport": "GALLOPS",
            "meetingCreated": false,
            "version": 1
          },
          {
            "id": 82,
            "name": "Rangiora",
            "sport": "HARNESS",
            "meetingCreated": false,
            "version": 1
          },
          {
            "id": 83,
            "name": "Redcliffe",
            "sport": "HARNESS",
            "meetingCreated": false,
            "version": 1
          },
          {
            "id": 76,
            "name": "Sandown",
            "sport": "GALLOPS",
            "meetingCreated": false,
            "version": 1
          },
          {
            "id": 78,
            "name": "Strathalbyn",
            "sport": "GALLOPS",
            "meetingCreated": false,
            "version": 1
          },
          {
            "id": 84,
            "name": "Tamworth",
            "sport": "HARNESS",
            "meetingCreated": false,
            "version": 1
          }
        ];
    };
})(window);