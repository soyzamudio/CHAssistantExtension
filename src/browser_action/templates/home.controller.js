angular.module('alert')
.controller('HomeController', ['$rootScope', '$scope', '$state', '$firebaseObject', function($rootScope, $scope, $state, $firebaseObject) {
  var ref = new Firebase('https://get-ta.firebaseio.com/assistant/' + $rootScope.name);
  var user = $firebaseObject(ref);
  user.$loaded(function(snapshot) {
    $scope.user = snapshot;
    if ($scope.user.available) {
      chrome.browserAction.setIcon({path: '../../../icons/iconAvailable.png'})
    } else {
      chrome.browserAction.setIcon({path: '../../../icons/iconNotAvailable.png'})
    }
  });

  $scope.availability = function() {
    $scope.user.available ? ref.update({ available: 0 }) : ref.update({ available: 1 });
    $scope.user.available ? chrome.browserAction.setIcon({path: '../../../icons/iconNotAvailable.png'}) : chrome.browserAction.setIcon({path: '../../../icons/iconAvailable.png'});
  };

  $scope.logout = function() {
    chrome.browserAction.setIcon({path: '../../../icons/icon48.png'});
    chrome.storage.local.clear();
    $state.go('name');
  };
}]);
