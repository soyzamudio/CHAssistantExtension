angular.module('alert')
.controller('HomeController', ['$rootScope', '$scope', '$state', '$firebaseObject', function($rootScope, $scope, $state, $firebaseObject) {
  var ref = new Firebase('https://get-ta.firebaseio.com/assistant/' + $rootScope.name);
  var user = $firebaseObject(ref);
  user.$loaded(function(snapshot) {
    $scope.user = snapshot;
  })

  $scope.availability = function() {
    $scope.user.available ? ref.update({ available: 0 }) : ref.update({ available: 1 });
  };

  $scope.logout = function() {
    chrome.storage.local.clear();
    $state.go('name');
  };
}]);
