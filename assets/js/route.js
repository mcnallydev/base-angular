app.config(function($routeProvider) {
  $routeProvider

  // home page
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'homeController'
  })

  // veterinary page
  .when('/veterinary', {
    templateUrl: 'views/veterinary.html',
    controller: 'veterinaryController'
  });
});
