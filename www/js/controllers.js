angular.module('toroApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MyStocksCtrl', ['$scope',
  function($scope) {

    $scope.myStocksArray = [
      {ticker: "TSLA"},
      {ticker: "FB"},
      {ticker: "GPRO"},
      {ticker: "SPY"},
      {ticker: "AAPL"},
      {ticker: "NFLX"},
      {ticker: "BRK-A"},
      {ticker: "INTC"},
      {ticker: "MSFT"},
      {ticker: "GE"},
      {ticker: "BAC"},
      {ticker: "NUGT"}
    ];

}])

.controller('StockCtrl', ['$scope', '$stateParams', 'stockDataService', 'dateService',
  function($scope, $stateParams, stockDataService, dateService) {

    $scope.ticker = $stateParams.stockTicker;
    $scope.chartView = 1;

    $scope.$on("$ionicView.afterEnter", function() {
      getPriceData();
      getDetailsData();
    });

    $scope.chartViewFunc = function(n) {
      $scope.chartView = n;
    };

    function getPriceData() {

      var promise = stockDataService.getPriceData($scope.ticker);

      promise.then(function(data) {
        $scope.stockPriceData = data;
      });
    }

    function getDetailsData() {

      var promise = stockDataService.getDetailsData($scope.ticker);

      promise.then(function(data) {
        $scope.stockDetailsData = data;
      });
    }

}]);
