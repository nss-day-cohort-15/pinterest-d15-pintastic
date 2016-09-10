"use strict"

app.controller('ProfileCtrl', function($scope, AuthFactory){
  if(AuthFactory.getUser()){
    console.log('ProfileCtrl')
    $scope.name = AuthFactory.getUserInfo().name
    $scope.image = AuthFactory.getUserInfo().img
    console.log($scope.name, $scope.image)
  }
})
