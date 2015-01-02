app.controller('appController', function($scope, titleService) {
  $scope.title = 'Angular App';
  $scope.$on('handleTitleBroadcast', function() {
    $scope.tttle = titleService.title;
  });
});
