angular.module('toroApp', [
  'ionic',
  'toroApp.directives',
  'toroApp.controllers',
  'toroApp.services',
  'toroApp.filters',
  'nvd3',
  'nvChart',
  'angular-cache',
  'cb.x2js'
  ])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.myStocks', {
      url: '/my_stocks',
      views: {
        'menuContent': {
          templateUrl: 'templates/my_stocks.html',
          controller: 'MyStocksCtrl'
        }
      }
    })

    .state('app.stock', {
      url: '/:stockTicker',
      views: {
        'menuContent': {
          templateUrl: 'templates/stock.html',
          controller: 'StockCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/app/my_stocks');
});
