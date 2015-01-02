app.config(function($routeProvider) {
  $routeProvider

  // home page
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'homeController'
  });
});
