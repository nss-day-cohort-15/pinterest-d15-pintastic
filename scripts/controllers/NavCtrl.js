"use strict";

app.controller("NavCtrl", function($scope, $location, AuthFactory){

  $scope.loginButton = "login"

  $scope.login = function(){
    AuthFactory.authWithProvider()
    .then(function(result){
      var user = result.user.uid
      $location.path("boards")
      // $scope.loginButton = "logout"
      $scope.$apply()
    }).catch(function(error){
      let errorCode = error.code,
          errorMessage = error.message,
          credential = error.credential
    })
  }

  $scope.logout = function() {
    console.log('USER HAS LOGGED OUT');
    $location.path("/")
    return firebase.auth().signOut();
  };
  // $scope.isActive = (viewLocation) => viewLocation === $location.path();
});