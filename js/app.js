angular
  .module('AdamPortfolio', ['ui.router'])
  .config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('main', {
        url: "/main",
        templateUrl: 'main.html'
      })
      .state('portfolio',{
        url:'/portfolio',
        templateUrl: 'portfolio.html'
      })
      .state('about',{
        url:'/about',
        templateUrl: 'about.html'
      })
      .state('contact',{
        url:'/contact',
        templateUrl: 'contact.html'
      })
      // $urlRouterProvider.otherwise("/main")

}


