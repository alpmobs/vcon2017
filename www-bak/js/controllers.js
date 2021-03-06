angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});




  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/changelang.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeContact = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.contact = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeContact();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$ionicScrollDelegate) {
    //$scope.sttButton = false;

  $scope.scrollTop = function(){
    $ionicScrollDelegate.scrollTop();
    // $scope.sttButton = false;
  };

  // $scope.getScrollPosition = function(){
  //   var moveData = $ionicScrollDelegate.getScrollPosition().top;

  //   $scope.$apply(function(){
  //     if(moveDate > 150 ){
  //       $scope.sttButton = true;
  //     }else{
  //       $scope.sttButton = fase;
  //     }

  //   })
  // }


})

.controller('PlaylistCtrl', function($scope, $stateParams) {



});



