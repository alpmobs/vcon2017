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

      .state('app.main-ar', {
        url: '/main-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/main-ar.html'
          }
        }
      })

      .state('app.main-fr', {
        url: '/main-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/main-fr.html'
          }
        }
      })

      .state('app.main-ru', {
        url: '/main-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/main-ru.html'
          }
        }
      })

      .state('app.main-tr', {
        url: '/main-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/main-tr.html'
          }
        }
      })

      .state('app.main-id', {
        url: '/main-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/main-id.html'
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

      .state('app.vmp-dato', {
        url: '/vmp-dato',
        views: {
          'menuContent': {
            templateUrl: 'templates/vmp-dato-sri-vijay-eswaran.html',
          }
        }
      })



      .state('app.vp-kpadma', {
        url: '/vp-kpadma',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kpadma.html',
          }
        }
      })



      .state('app.newslanding', {
        url: '/newslanding',
        views: {
          'menuContent': {
            templateUrl: 'templates/newslanding.html',
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

      .state('app.faqs-header', {
        url: '/faqs',
        views: {
          'menuContent': {
            templateUrl: 'templates/faqs.html',
          }
        }
      })

      .state('app.whydo', {
        url: '/whydo',
        views: {
          'menuContent': {
            templateUrl: 'templates/whydo.html',
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

      .state('app.howto', {
        url: '/howto',
        views: {
          'menuContent': {
            templateUrl: 'templates/howto.html',
          }
        }
      })

      .state('app.whatto', {
        url: '/whatto',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatto.html',
          }
        }
      })

      .state('app.whereto', {
        url: '/whereto',
        views: {
          'menuContent': {
            templateUrl: 'templates/whereto.html',
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/splash');
  });
