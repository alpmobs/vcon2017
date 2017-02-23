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
      .state('app.whatis-ar', {
        url: '/whatis',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatis.html'
          }
        }
      })
      .state('app.whatis-id', {
        url: '/whatis-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatis-id.html'
          }
        }
      })
      .state('app.whatis-fr', {
        url: '/whatis-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatis-fr.html'
          }
        }
      })
      .state('app.whatis-ru', {
        url: '/whatis-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatis-ru.html'
          }
        }
      })
      .state('app.whatis-tr', {
        url: '/whatis-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatis-tr.html'
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.allabout', {
        url: '/allabout',
        views: {
          'menuContent': {
            templateUrl: 'templates/allabout.html'
          }
        }
      })
      .state('app.allabout-ar', {
        url: '/allabout-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/allabout-ar.html'
          }
        }
      })
      .state('app.allabout-id', {
        url: '/allabout-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/allabout-id.html'
          }
        }
      })
      .state('app.allabout-fr', {
        url: '/allabout-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/allabout-fr.html'
          }
        }
      })
      .state('app.allabout-ru', {
        url: '/allabout-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/allabout-ru.html'
          }
        }
      })
      .state('app.allabout-tr', {
        url: '/allabout-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/allabout-tr.html'
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.ticket', {
        url: '/ticket',
        views: {
          'menuContent': {
            templateUrl: 'templates/ticket.html',
          }
        }
      })
      .state('app.ticket-ar', {
        url: '/ticket-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/ticket-ar.html',
          }
        }
      })
      .state('app.ticket-fr', {
        url: '/ticket-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/ticket-fr.html',
          }
        }
      })
      .state('app.ticket-id', {
        url: '/ticket-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/ticket-id.html',
          }
        }
      })
      .state('app.ticket-ru', {
        url: '/ticket-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/ticket-ru.html',
          }
        }
      })
      .state('app.ticket-tr', {
        url: '/ticket-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/ticket-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.mark', {
        url: '/mark',
        views: {
          'menuContent': {
            templateUrl: 'templates/mark.html',
          }
        }
      })
      .state('app.mark-ar', {
        url: '/mark-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/mark-ar.html',
          }
        }
      })
      .state('app.mark-fr', {
        url: '/mark-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/mark-fr.html',
          }
        }
      })
      .state('app.mark-id', {
        url: '/mark-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/mark-id.html',
          }
        }
      })
      .state('app.mark-ru', {
        url: '/mark-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/mark-ru.html',
          }
        }
      })
      .state('app.mark-tr', {
        url: '/mark-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/mark-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.downloads', {
        url: '/downloads',
        views: {
          'menuContent': {
            templateUrl: 'templates/downloads.html',
          }
        }
      })
      .state('app.downloads-ar', {
        url: '/downloads-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/downloads-ar.html',
          }
        }
      })
      .state('app.downloads-fr', {
        url: '/downloads-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/downloads-fr.html',
          }
        }
      })
      .state('app.downloads-id', {
        url: '/downloads-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/downloads-id.html',
          }
        }
      })
      .state('app.downloads-ru', {
        url: '/downloads-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/downloads-ru.html',
          }
        }
      })
      .state('app.downloads-tr', {
        url: '/downloads-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/downloads-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.speakers', {
        url: '/speakers',
        views: {
          'menuContent': {
            templateUrl: 'templates/thespeakers.html',
          }
        }
      })
      .state('app.speakers-ar', {
        url: '/speakers-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/thespeakers-ar.html',
          }
        }
      })
      .state('app.speakers-fr', {
        url: '/speakers-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/thespeakers-fr.html',
          }
        }
      })
      .state('app.speakers-id', {
        url: '/speakers-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/thespeakers.html-id',
          }
        }
      })
      .state('app.speakers-ru', {
        url: '/speakers-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/thespeakers.html-ru',
          }
        }
      })
      .state('app.speakers-tr', {
        url: '/speakers-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/thespeakers-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vmp-dato', {
        url: '/vmp-dato',
        views: {
          'menuContent': {
            templateUrl: 'templates/vmp-dato-sri-vijay-eswaran.html',
          }
        }
      })
      .state('app.vmp-dato-ar', {
        url: '/vmp-dato-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vmp-dato-sri-vijay-eswaran-ar.html',
          }
        }
      })

      .state('app.vmp-dato-fr', {
        url: '/vmp-dato-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vmp-dato-sri-vijay-eswaran-fr.html',
          }
        }
      })
      .state('app.vmp-dato-id', {
        url: '/vmp-dato-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vmp-dato-sri-vijay-eswaran-id.html',
          }
        }
      })
      .state('app.vmp-dato-ru', {
        url: '/vmp-dato-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vmp-dato-sri-vijay-eswaran-ru.html',
          }
        }
      })
      .state('app.vmp-dato-tr', {
        url: '/vmp-dato-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vmp-dato-sri-vijay-eswaran-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vfp-jtb', {
        url: '/vfp-jtb',
        views: {
          'menuContent': {
            templateUrl: 'templates/vfp-joseph-bismark.html',
          }
        }
      })
      .state('app.vfp-jtb-ar', {
        url: '/vfp-jtb-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vfp-joseph-bismark-ar.html',
          }
        }
      })
      .state('app.vfp-jtb-fr', {
        url: '/vfp-jtb-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vfp-joseph-bismark-fr.html',
          }
        }
      })
      .state('app.vfp-jtb-id', {
        url: '/vfp-jtb-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vfp-joseph-bismark-id.html',
          }
        }
      })
      .state('app.vfp-jtb-ru', {
        url: '/vfp-jtb-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vfp-joseph-bismark-ru.html',
          }
        }
      })
      .state('app.vfp-jtb-tr', {
        url: '/vfp-jtb-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vfp-joseph-bismark-tr.html',
          }
        }
      })


      // 
      // ----------------- 
      // 

      .state('app.vp-tg', {
        url: '/vp-tg',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-tg-kintanar.html',
          }
        }
      })
      .state('app.vp-tg-ar', {
        url: '/vp-tg-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-tg-kintanar-ar.html',
          }
        }
      })
      .state('app.vp-tg-fr', {
        url: '/vp-tg-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-tg-kintanar-fr.html',
          }
        }
      })
      .state('app.vp-tg-id', {
        url: '/vp-tg-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-tg-kintanar-id.html',
          }
        }
      })
      .state('app.vp-tg-ru', {
        url: '/vp-tg-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-tg-kintanar-ru.html',
          }
        }
      })
      .state('app.vp-tg-tr', {
        url: '/vp-tg-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-tg-kintanar-tr.html',
          
        
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-dil', {
        url: '/vp-dil',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-donna-imson.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-rs', {
        url: '/vp-rs',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-ranjit-singh.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-ks', {
        url: '/vp-ks',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kuna-senathirajah.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-ps', {
        url: '/vp-ps',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-pathman-senathirajah.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-ag', {
        url: '/vp-ag',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-arun-george.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-ah', {
        url: '/vp-ah',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-adly-hassan.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-ss', {
        url: '/vp-ss',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-sathi-senathirajah.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-ft', {
        url: '/vp-ft',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-ferdie-tolentino.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-cm', {
        url: '/vp-cm',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-cherian-mathew.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-ds', {
        url: '/vp-ds',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-david-sharma.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-mk', {
        url: '/vp-mk',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-mahendra-kumar.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-dmq', {
        url: '/vp-dmq',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-dr-motaz-qais.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-kp', {
        url: '/vp-kp',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kpadma.html',
          }
        }
      })

      // 
      // ----------------- 
      // 



      .state('app.newslanding', {
        url: '/newslanding',
        views: {
          'menuContent': {
            templateUrl: 'templates/newslanding.html',
          }
        }
      })

      // 
      // ----------------- 
      // 
      .state('app.news', {
        url: '/news',
        views: {
          'menuContent': {
            templateUrl: 'templates/news.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.penang101', {
        url: '/penang101',
        views: {
          'menuContent': {
            templateUrl: 'templates/penang101.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.merchandise', {
        url: '/merchandise',
        views: {
          'menuContent': {
            templateUrl: 'templates/merchandise.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.contact', {
        url: '/contact',
        views: {
          'menuContent': {
            templateUrl: 'templates/contact.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.faqs-header', {
        url: '/faqs',
        views: {
          'menuContent': {
            templateUrl: 'templates/faqs.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.whydo', {
        url: '/whydo',
        views: {
          'menuContent': {
            templateUrl: 'templates/whydo.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.whydo-ar', {
        url: '/whydo-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/ar/whydo.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.splash', {
        url: '/splash',
        views: {
          'menuContent': {
            templateUrl: 'templates/splash.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.splashnext', {
        url: '/splashnext',
        views: {
          'menuContent': {
            templateUrl: 'templates/splashnext.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.splashnext-fr', {
        url: '/splashnext-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/splashnext-fr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.howto', {
        url: '/howto',
        views: {
          'menuContent': {
            templateUrl: 'templates/howto.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.whatto', {
        url: '/whatto',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatto.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.whereto', {
        url: '/whereto',
        views: {
          'menuContent': {
            templateUrl: 'templates/whereto.html',
          }
        }
      });
      // 
      // ----------------- 
      // 


      // -------------- ARABIC -------------- //
      // -------------- FRENCH -------------- //
      // -------------- INDONESIA -------------- //
      // -------------- RUSSIAN -------------- //
      // -------------- TURKISH -------------- //




    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/main-fr');
  });
