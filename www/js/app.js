// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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

      .state('app.main', {
        url: '/main',
        views: {
          'menuContent': {
            templateUrl: 'templates/main.html'
          }
        }
      })

      .state('app.whatis', {
        url: '/whatis',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatis.html'
          }
        }
      })
      .state('app.allabout', {
        url: '/allabout',
        views: {
          'menuContent': {
            templateUrl: 'templates/allabout.html'
          }
        }
      })
      .state('app.ticket', {
        url: '/ticket',
        views: {
          'menuContent': {
            templateUrl: 'templates/ticket.html',
          }
        }
      })

      .state('app.mark', {
        url: '/mark',
        views: {
          'menuContent': {
            templateUrl: 'templates/mark.html',
          }
        }
      })

      .state('app.downloads', {
        url: '/downloads',
        views: {
          'menuContent': {
            templateUrl: 'templates/downloads.html',
          }
        }
      })

      .state('app.speakers', {
        url: '/speakers',
        views: {
          'menuContent': {
            templateUrl: 'templates/thespeakers.html',
          }
        }
      })

      .state('app.news', {
        url: '/news',
        views: {
          'menuContent': {
            templateUrl: 'templates/news.html',
          }
        }
      })

      .state('app.penang101', {
        url: '/penang101',
        views: {
          'menuContent': {
            templateUrl: 'templates/penang101.html',
          }
        }
      })

      .state('app.merchandise', {
        url: '/merchandise',
        views: {
          'menuContent': {
            templateUrl: 'templates/merchandise.html',
          }
        }
      })

      .state('app.contact', {
        url: '/contact',
        views: {
          'menuContent': {
            templateUrl: 'templates/contact.html',
          }
        }
      })

      .state('app.faq', {
        url: '/faq',
        views: {
          'menuContent': {
            templateUrl: 'templates/faq.html',
          }
        }
      })

      .state('app.splash', {
        url: '/splash',
        views: {
          'menuContent': {
            templateUrl: 'templates/splash.html',
          }
        }
      })

      .state('app.splashnext', {
        url: '/splashnext',
        views: {
          'menuContent': {
            templateUrl: 'templates/splashnext.html',
          }
        }
      })

      .state('app.claim', {
        url: '/claim',
        views: {
          'menuContent': {
            templateUrl: 'templates/claim.html',
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/main');
  });
