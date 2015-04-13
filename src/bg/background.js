angular.module('background', ['firebase'])
.controller('BackgroundController', ['$rootScope', '$firebaseObject', function($rootScope, $firebaseObject) {
  var ref = new Firebase('https://get-ta.firebaseio.com/assistant/jose/help');
  var i = 0;
  ref.on("value", function(snapshot) {
    var opt = {
      type: "basic",
      title: snapshot.val().student,
      message: snapshot.val().student + ' needs your help',
      iconUrl: "../../icons/icon128.png"
    }
    chrome.notifications.create('notify' + i, opt, function(id) { i++; });
  });

  var food = new Firebase('https://get-ta.firebaseio.com/food/dinner');
  var i = 0;
  food.on("value", function(snapshot) {
    var opt = {
      type: "basic",
      title: 'Dinner is ready!',
      message: snapshot.val(),
      iconUrl: "../../icons/icon128.png"
    }
    chrome.notifications.create('food' + i, opt, function(id) { i++; });
  });
}]);
