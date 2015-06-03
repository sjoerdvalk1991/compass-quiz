var app = angular.module('heading.controller', []);
headingController = function($scope, $state, $cordovaDeviceOrientation) {
  var _this = this;
  this.heading = {};

  document.addEventListener("deviceready", function () {

    $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
       var magneticHeading = result.magneticHeading;
       var trueHeading = result.trueHeading;
       var accuracy = result.headingAccuracy;
       var timeStamp = result.timestamp;
       _this.heading = magneticHeading;
       console.log(_this.heading);
    }, function(err) {
      // An error occurred
    });



    var options = {
      frequency: 3000,
      filter: true     // if frequency is set, filter is ignored
    }

    var watch = $cordovaDeviceOrientation.watchHeading(options).then(
      null,
      function(error) {
        // An error occurred
      },
      function(result) {   // updates constantly (depending on frequency value)
        var magneticHeading = result.magneticHeading;
        var trueHeading = result.trueHeading;
        var accuracy = result.headingAccuracy;
        var timeStamp = result.timestamp;
      });


    watch.clearWatch();
    // OR
    $cordovaDeviceOrientation.clearWatch(watch)
      .then(function(result) {

      }, function(err) {
        // An error occurred
      });

  }, false);
};
headingController.$inject = ['$scope', '$state', '$cordovaDeviceOrientation'];
app.controller('HeadingCtrl',headingController);